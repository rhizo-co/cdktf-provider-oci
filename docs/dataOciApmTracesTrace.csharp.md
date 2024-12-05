# `dataOciApmTracesTrace` Submodule <a name="`dataOciApmTracesTrace` Submodule" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciApmTracesTrace <a name="DataOciApmTracesTrace" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_traces_trace oci_apm_traces_trace}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciApmTracesTrace(Construct Scope, string Id, DataOciApmTracesTraceConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceConfig">DataOciApmTracesTraceConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceConfig">DataOciApmTracesTraceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.resetTimeTraceStartedGreaterThanOrEqualTo">ResetTimeTraceStartedGreaterThanOrEqualTo</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.resetTimeTraceStartedLessThan">ResetTimeTraceStartedLessThan</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.resetTraceNamespace">ResetTraceNamespace</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeTraceStartedGreaterThanOrEqualTo` <a name="ResetTimeTraceStartedGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.resetTimeTraceStartedGreaterThanOrEqualTo"></a>

```csharp
private void ResetTimeTraceStartedGreaterThanOrEqualTo()
```

##### `ResetTimeTraceStartedLessThan` <a name="ResetTimeTraceStartedLessThan" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.resetTimeTraceStartedLessThan"></a>

```csharp
private void ResetTimeTraceStartedLessThan()
```

##### `ResetTraceNamespace` <a name="ResetTraceNamespace" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.resetTraceNamespace"></a>

```csharp
private void ResetTraceNamespace()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciApmTracesTrace resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciApmTracesTrace.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciApmTracesTrace.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciApmTracesTrace.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciApmTracesTrace.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciApmTracesTrace resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciApmTracesTrace to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciApmTracesTrace that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_traces_trace#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciApmTracesTrace to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.errorSpanCount">ErrorSpanCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.isFault">IsFault</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.rootSpanDurationInMs">RootSpanDurationInMs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.rootSpanOperationName">RootSpanOperationName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.rootSpanServiceName">RootSpanServiceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.serviceSummaries">ServiceSummaries</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesList">DataOciApmTracesTraceServiceSummariesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.sourceName">SourceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.spanCount">SpanCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.spans">Spans</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansList">DataOciApmTracesTraceSpansList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.spanSummary">SpanSummary</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryList">DataOciApmTracesTraceSpanSummaryList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.timeEarliestSpanStarted">TimeEarliestSpanStarted</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.timeLatestSpanEnded">TimeLatestSpanEnded</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.timeRootSpanEnded">TimeRootSpanEnded</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.timeRootSpanStarted">TimeRootSpanStarted</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.traceDurationInMs">TraceDurationInMs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.traceErrorCode">TraceErrorCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.traceErrorType">TraceErrorType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.traceStatus">TraceStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.apmDomainIdInput">ApmDomainIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.timeTraceStartedGreaterThanOrEqualToInput">TimeTraceStartedGreaterThanOrEqualToInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.timeTraceStartedLessThanInput">TimeTraceStartedLessThanInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.traceKeyInput">TraceKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.traceNamespaceInput">TraceNamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.apmDomainId">ApmDomainId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.timeTraceStartedGreaterThanOrEqualTo">TimeTraceStartedGreaterThanOrEqualTo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.timeTraceStartedLessThan">TimeTraceStartedLessThan</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.traceKey">TraceKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.traceNamespace">TraceNamespace</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `ErrorSpanCount`<sup>Required</sup> <a name="ErrorSpanCount" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.errorSpanCount"></a>

```csharp
public double ErrorSpanCount { get; }
```

- *Type:* double

---

##### `IsFault`<sup>Required</sup> <a name="IsFault" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.isFault"></a>

```csharp
public IResolvable IsFault { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Key`<sup>Required</sup> <a name="Key" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `RootSpanDurationInMs`<sup>Required</sup> <a name="RootSpanDurationInMs" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.rootSpanDurationInMs"></a>

```csharp
public double RootSpanDurationInMs { get; }
```

- *Type:* double

---

##### `RootSpanOperationName`<sup>Required</sup> <a name="RootSpanOperationName" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.rootSpanOperationName"></a>

```csharp
public string RootSpanOperationName { get; }
```

- *Type:* string

---

##### `RootSpanServiceName`<sup>Required</sup> <a name="RootSpanServiceName" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.rootSpanServiceName"></a>

```csharp
public string RootSpanServiceName { get; }
```

- *Type:* string

---

##### `ServiceSummaries`<sup>Required</sup> <a name="ServiceSummaries" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.serviceSummaries"></a>

```csharp
public DataOciApmTracesTraceServiceSummariesList ServiceSummaries { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesList">DataOciApmTracesTraceServiceSummariesList</a>

---

##### `SourceName`<sup>Required</sup> <a name="SourceName" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.sourceName"></a>

```csharp
public string SourceName { get; }
```

- *Type:* string

---

##### `SpanCount`<sup>Required</sup> <a name="SpanCount" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.spanCount"></a>

```csharp
public double SpanCount { get; }
```

- *Type:* double

---

##### `Spans`<sup>Required</sup> <a name="Spans" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.spans"></a>

```csharp
public DataOciApmTracesTraceSpansList Spans { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansList">DataOciApmTracesTraceSpansList</a>

---

##### `SpanSummary`<sup>Required</sup> <a name="SpanSummary" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.spanSummary"></a>

```csharp
public DataOciApmTracesTraceSpanSummaryList SpanSummary { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryList">DataOciApmTracesTraceSpanSummaryList</a>

---

##### `TimeEarliestSpanStarted`<sup>Required</sup> <a name="TimeEarliestSpanStarted" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.timeEarliestSpanStarted"></a>

```csharp
public string TimeEarliestSpanStarted { get; }
```

- *Type:* string

---

##### `TimeLatestSpanEnded`<sup>Required</sup> <a name="TimeLatestSpanEnded" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.timeLatestSpanEnded"></a>

```csharp
public string TimeLatestSpanEnded { get; }
```

- *Type:* string

---

##### `TimeRootSpanEnded`<sup>Required</sup> <a name="TimeRootSpanEnded" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.timeRootSpanEnded"></a>

```csharp
public string TimeRootSpanEnded { get; }
```

- *Type:* string

---

##### `TimeRootSpanStarted`<sup>Required</sup> <a name="TimeRootSpanStarted" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.timeRootSpanStarted"></a>

```csharp
public string TimeRootSpanStarted { get; }
```

- *Type:* string

---

##### `TraceDurationInMs`<sup>Required</sup> <a name="TraceDurationInMs" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.traceDurationInMs"></a>

```csharp
public double TraceDurationInMs { get; }
```

- *Type:* double

---

##### `TraceErrorCode`<sup>Required</sup> <a name="TraceErrorCode" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.traceErrorCode"></a>

```csharp
public string TraceErrorCode { get; }
```

- *Type:* string

---

##### `TraceErrorType`<sup>Required</sup> <a name="TraceErrorType" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.traceErrorType"></a>

```csharp
public string TraceErrorType { get; }
```

- *Type:* string

---

##### `TraceStatus`<sup>Required</sup> <a name="TraceStatus" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.traceStatus"></a>

```csharp
public string TraceStatus { get; }
```

- *Type:* string

---

##### `ApmDomainIdInput`<sup>Optional</sup> <a name="ApmDomainIdInput" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.apmDomainIdInput"></a>

```csharp
public string ApmDomainIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `TimeTraceStartedGreaterThanOrEqualToInput`<sup>Optional</sup> <a name="TimeTraceStartedGreaterThanOrEqualToInput" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.timeTraceStartedGreaterThanOrEqualToInput"></a>

```csharp
public string TimeTraceStartedGreaterThanOrEqualToInput { get; }
```

- *Type:* string

---

##### `TimeTraceStartedLessThanInput`<sup>Optional</sup> <a name="TimeTraceStartedLessThanInput" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.timeTraceStartedLessThanInput"></a>

```csharp
public string TimeTraceStartedLessThanInput { get; }
```

- *Type:* string

---

##### `TraceKeyInput`<sup>Optional</sup> <a name="TraceKeyInput" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.traceKeyInput"></a>

```csharp
public string TraceKeyInput { get; }
```

- *Type:* string

---

##### `TraceNamespaceInput`<sup>Optional</sup> <a name="TraceNamespaceInput" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.traceNamespaceInput"></a>

```csharp
public string TraceNamespaceInput { get; }
```

- *Type:* string

---

##### `ApmDomainId`<sup>Required</sup> <a name="ApmDomainId" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.apmDomainId"></a>

```csharp
public string ApmDomainId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `TimeTraceStartedGreaterThanOrEqualTo`<sup>Required</sup> <a name="TimeTraceStartedGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.timeTraceStartedGreaterThanOrEqualTo"></a>

```csharp
public string TimeTraceStartedGreaterThanOrEqualTo { get; }
```

- *Type:* string

---

##### `TimeTraceStartedLessThan`<sup>Required</sup> <a name="TimeTraceStartedLessThan" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.timeTraceStartedLessThan"></a>

```csharp
public string TimeTraceStartedLessThan { get; }
```

- *Type:* string

---

##### `TraceKey`<sup>Required</sup> <a name="TraceKey" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.traceKey"></a>

```csharp
public string TraceKey { get; }
```

- *Type:* string

---

##### `TraceNamespace`<sup>Required</sup> <a name="TraceNamespace" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.traceNamespace"></a>

```csharp
public string TraceNamespace { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciApmTracesTraceConfig <a name="DataOciApmTracesTraceConfig" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciApmTracesTraceConfig {
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
    string TimeTraceStartedGreaterThanOrEqualTo = null,
    string TimeTraceStartedLessThan = null,
    string TraceNamespace = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceConfig.property.apmDomainId">ApmDomainId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_traces_trace#apm_domain_id DataOciApmTracesTrace#apm_domain_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceConfig.property.traceKey">TraceKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_traces_trace#trace_key DataOciApmTracesTrace#trace_key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_traces_trace#id DataOciApmTracesTrace#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceConfig.property.timeTraceStartedGreaterThanOrEqualTo">TimeTraceStartedGreaterThanOrEqualTo</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_traces_trace#time_trace_started_greater_than_or_equal_to DataOciApmTracesTrace#time_trace_started_greater_than_or_equal_to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceConfig.property.timeTraceStartedLessThan">TimeTraceStartedLessThan</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_traces_trace#time_trace_started_less_than DataOciApmTracesTrace#time_trace_started_less_than}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceConfig.property.traceNamespace">TraceNamespace</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_traces_trace#trace_namespace DataOciApmTracesTrace#trace_namespace}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ApmDomainId`<sup>Required</sup> <a name="ApmDomainId" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceConfig.property.apmDomainId"></a>

```csharp
public string ApmDomainId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_traces_trace#apm_domain_id DataOciApmTracesTrace#apm_domain_id}.

---

##### `TraceKey`<sup>Required</sup> <a name="TraceKey" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceConfig.property.traceKey"></a>

```csharp
public string TraceKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_traces_trace#trace_key DataOciApmTracesTrace#trace_key}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_traces_trace#id DataOciApmTracesTrace#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `TimeTraceStartedGreaterThanOrEqualTo`<sup>Optional</sup> <a name="TimeTraceStartedGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceConfig.property.timeTraceStartedGreaterThanOrEqualTo"></a>

```csharp
public string TimeTraceStartedGreaterThanOrEqualTo { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_traces_trace#time_trace_started_greater_than_or_equal_to DataOciApmTracesTrace#time_trace_started_greater_than_or_equal_to}.

---

##### `TimeTraceStartedLessThan`<sup>Optional</sup> <a name="TimeTraceStartedLessThan" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceConfig.property.timeTraceStartedLessThan"></a>

```csharp
public string TimeTraceStartedLessThan { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_traces_trace#time_trace_started_less_than DataOciApmTracesTrace#time_trace_started_less_than}.

---

##### `TraceNamespace`<sup>Optional</sup> <a name="TraceNamespace" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceConfig.property.traceNamespace"></a>

```csharp
public string TraceNamespace { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_traces_trace#trace_namespace DataOciApmTracesTrace#trace_namespace}.

---

### DataOciApmTracesTraceServiceSummaries <a name="DataOciApmTracesTraceServiceSummaries" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummaries"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummaries.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciApmTracesTraceServiceSummaries {

};
```


### DataOciApmTracesTraceSpans <a name="DataOciApmTracesTraceSpans" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpans"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpans.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciApmTracesTraceSpans {

};
```


### DataOciApmTracesTraceSpansLogs <a name="DataOciApmTracesTraceSpansLogs" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogs"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogs.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciApmTracesTraceSpansLogs {

};
```


### DataOciApmTracesTraceSpansLogsSpanLogs <a name="DataOciApmTracesTraceSpansLogsSpanLogs" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogs"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogs.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciApmTracesTraceSpansLogsSpanLogs {

};
```


### DataOciApmTracesTraceSpansTags <a name="DataOciApmTracesTraceSpansTags" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTags"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTags.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciApmTracesTraceSpansTags {

};
```


### DataOciApmTracesTraceSpanSummary <a name="DataOciApmTracesTraceSpanSummary" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummary"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummary.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciApmTracesTraceSpanSummary {

};
```


### DataOciApmTracesTraceSpanSummaryServiceSummaries <a name="DataOciApmTracesTraceSpanSummaryServiceSummaries" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummaries"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummaries.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciApmTracesTraceSpanSummaryServiceSummaries {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciApmTracesTraceServiceSummariesList <a name="DataOciApmTracesTraceServiceSummariesList" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciApmTracesTraceServiceSummariesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesList.get"></a>

```csharp
private DataOciApmTracesTraceServiceSummariesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciApmTracesTraceServiceSummariesOutputReference <a name="DataOciApmTracesTraceServiceSummariesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciApmTracesTraceServiceSummariesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesOutputReference.property.errorSpans">ErrorSpans</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesOutputReference.property.spanServiceName">SpanServiceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesOutputReference.property.totalSpans">TotalSpans</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummaries">DataOciApmTracesTraceServiceSummaries</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ErrorSpans`<sup>Required</sup> <a name="ErrorSpans" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesOutputReference.property.errorSpans"></a>

```csharp
public string ErrorSpans { get; }
```

- *Type:* string

---

##### `SpanServiceName`<sup>Required</sup> <a name="SpanServiceName" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesOutputReference.property.spanServiceName"></a>

```csharp
public string SpanServiceName { get; }
```

- *Type:* string

---

##### `TotalSpans`<sup>Required</sup> <a name="TotalSpans" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesOutputReference.property.totalSpans"></a>

```csharp
public string TotalSpans { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesOutputReference.property.internalValue"></a>

```csharp
public DataOciApmTracesTraceServiceSummaries InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummaries">DataOciApmTracesTraceServiceSummaries</a>

---


### DataOciApmTracesTraceSpansList <a name="DataOciApmTracesTraceSpansList" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciApmTracesTraceSpansList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansList.get"></a>

```csharp
private DataOciApmTracesTraceSpansOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciApmTracesTraceSpansLogsList <a name="DataOciApmTracesTraceSpansLogsList" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciApmTracesTraceSpansLogsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsList.get"></a>

```csharp
private DataOciApmTracesTraceSpansLogsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciApmTracesTraceSpansLogsOutputReference <a name="DataOciApmTracesTraceSpansLogsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciApmTracesTraceSpansLogsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsOutputReference.property.eventName">EventName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsOutputReference.property.spanLogs">SpanLogs</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsList">DataOciApmTracesTraceSpansLogsSpanLogsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsOutputReference.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogs">DataOciApmTracesTraceSpansLogs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EventName`<sup>Required</sup> <a name="EventName" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsOutputReference.property.eventName"></a>

```csharp
public string EventName { get; }
```

- *Type:* string

---

##### `SpanLogs`<sup>Required</sup> <a name="SpanLogs" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsOutputReference.property.spanLogs"></a>

```csharp
public DataOciApmTracesTraceSpansLogsSpanLogsList SpanLogs { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsList">DataOciApmTracesTraceSpansLogsSpanLogsList</a>

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsOutputReference.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsOutputReference.property.internalValue"></a>

```csharp
public DataOciApmTracesTraceSpansLogs InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogs">DataOciApmTracesTraceSpansLogs</a>

---


### DataOciApmTracesTraceSpansLogsSpanLogsList <a name="DataOciApmTracesTraceSpansLogsSpanLogsList" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciApmTracesTraceSpansLogsSpanLogsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsList.get"></a>

```csharp
private DataOciApmTracesTraceSpansLogsSpanLogsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciApmTracesTraceSpansLogsSpanLogsOutputReference <a name="DataOciApmTracesTraceSpansLogsSpanLogsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciApmTracesTraceSpansLogsSpanLogsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsOutputReference.property.logKey">LogKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsOutputReference.property.logValue">LogValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogs">DataOciApmTracesTraceSpansLogsSpanLogs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LogKey`<sup>Required</sup> <a name="LogKey" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsOutputReference.property.logKey"></a>

```csharp
public string LogKey { get; }
```

- *Type:* string

---

##### `LogValue`<sup>Required</sup> <a name="LogValue" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsOutputReference.property.logValue"></a>

```csharp
public string LogValue { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsOutputReference.property.internalValue"></a>

```csharp
public DataOciApmTracesTraceSpansLogsSpanLogs InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogs">DataOciApmTracesTraceSpansLogsSpanLogs</a>

---


### DataOciApmTracesTraceSpansOutputReference <a name="DataOciApmTracesTraceSpansOutputReference" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciApmTracesTraceSpansOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.property.durationInMs">DurationInMs</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.property.isError">IsError</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.property.kind">Kind</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.property.logs">Logs</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsList">DataOciApmTracesTraceSpansLogsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.property.operationName">OperationName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.property.parentSpanKey">ParentSpanKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.property.serviceName">ServiceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.property.sourceName">SourceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.property.tags">Tags</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsList">DataOciApmTracesTraceSpansTagsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.property.timeEnded">TimeEnded</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.property.timeStarted">TimeStarted</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.property.traceKey">TraceKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpans">DataOciApmTracesTraceSpans</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DurationInMs`<sup>Required</sup> <a name="DurationInMs" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.property.durationInMs"></a>

```csharp
public string DurationInMs { get; }
```

- *Type:* string

---

##### `IsError`<sup>Required</sup> <a name="IsError" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.property.isError"></a>

```csharp
public IResolvable IsError { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Key`<sup>Required</sup> <a name="Key" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Kind`<sup>Required</sup> <a name="Kind" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.property.kind"></a>

```csharp
public string Kind { get; }
```

- *Type:* string

---

##### `Logs`<sup>Required</sup> <a name="Logs" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.property.logs"></a>

```csharp
public DataOciApmTracesTraceSpansLogsList Logs { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsList">DataOciApmTracesTraceSpansLogsList</a>

---

##### `OperationName`<sup>Required</sup> <a name="OperationName" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.property.operationName"></a>

```csharp
public string OperationName { get; }
```

- *Type:* string

---

##### `ParentSpanKey`<sup>Required</sup> <a name="ParentSpanKey" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.property.parentSpanKey"></a>

```csharp
public string ParentSpanKey { get; }
```

- *Type:* string

---

##### `ServiceName`<sup>Required</sup> <a name="ServiceName" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.property.serviceName"></a>

```csharp
public string ServiceName { get; }
```

- *Type:* string

---

##### `SourceName`<sup>Required</sup> <a name="SourceName" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.property.sourceName"></a>

```csharp
public string SourceName { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.property.tags"></a>

```csharp
public DataOciApmTracesTraceSpansTagsList Tags { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsList">DataOciApmTracesTraceSpansTagsList</a>

---

##### `TimeEnded`<sup>Required</sup> <a name="TimeEnded" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.property.timeEnded"></a>

```csharp
public string TimeEnded { get; }
```

- *Type:* string

---

##### `TimeStarted`<sup>Required</sup> <a name="TimeStarted" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.property.timeStarted"></a>

```csharp
public string TimeStarted { get; }
```

- *Type:* string

---

##### `TraceKey`<sup>Required</sup> <a name="TraceKey" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.property.traceKey"></a>

```csharp
public string TraceKey { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.property.internalValue"></a>

```csharp
public DataOciApmTracesTraceSpans InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpans">DataOciApmTracesTraceSpans</a>

---


### DataOciApmTracesTraceSpansTagsList <a name="DataOciApmTracesTraceSpansTagsList" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciApmTracesTraceSpansTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsList.get"></a>

```csharp
private DataOciApmTracesTraceSpansTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciApmTracesTraceSpansTagsOutputReference <a name="DataOciApmTracesTraceSpansTagsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciApmTracesTraceSpansTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsOutputReference.property.tagName">TagName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsOutputReference.property.tagValue">TagValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTags">DataOciApmTracesTraceSpansTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TagName`<sup>Required</sup> <a name="TagName" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsOutputReference.property.tagName"></a>

```csharp
public string TagName { get; }
```

- *Type:* string

---

##### `TagValue`<sup>Required</sup> <a name="TagValue" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsOutputReference.property.tagValue"></a>

```csharp
public string TagValue { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsOutputReference.property.internalValue"></a>

```csharp
public DataOciApmTracesTraceSpansTags InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTags">DataOciApmTracesTraceSpansTags</a>

---


### DataOciApmTracesTraceSpanSummaryList <a name="DataOciApmTracesTraceSpanSummaryList" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciApmTracesTraceSpanSummaryList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryList.get"></a>

```csharp
private DataOciApmTracesTraceSpanSummaryOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciApmTracesTraceSpanSummaryOutputReference <a name="DataOciApmTracesTraceSpanSummaryOutputReference" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciApmTracesTraceSpanSummaryOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.property.errorSpanCount">ErrorSpanCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.property.isFault">IsFault</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.property.rootSpanDurationInMs">RootSpanDurationInMs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.property.rootSpanOperationName">RootSpanOperationName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.property.rootSpanServiceName">RootSpanServiceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.property.serviceSummaries">ServiceSummaries</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesList">DataOciApmTracesTraceSpanSummaryServiceSummariesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.property.spanCount">SpanCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.property.timeEarliestSpanStarted">TimeEarliestSpanStarted</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.property.timeLatestSpanEnded">TimeLatestSpanEnded</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.property.timeRootSpanEnded">TimeRootSpanEnded</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.property.timeRootSpanStarted">TimeRootSpanStarted</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.property.traceDurationInMs">TraceDurationInMs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.property.traceErrorCode">TraceErrorCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.property.traceErrorType">TraceErrorType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.property.traceStatus">TraceStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummary">DataOciApmTracesTraceSpanSummary</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ErrorSpanCount`<sup>Required</sup> <a name="ErrorSpanCount" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.property.errorSpanCount"></a>

```csharp
public double ErrorSpanCount { get; }
```

- *Type:* double

---

##### `IsFault`<sup>Required</sup> <a name="IsFault" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.property.isFault"></a>

```csharp
public IResolvable IsFault { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Key`<sup>Required</sup> <a name="Key" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `RootSpanDurationInMs`<sup>Required</sup> <a name="RootSpanDurationInMs" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.property.rootSpanDurationInMs"></a>

```csharp
public double RootSpanDurationInMs { get; }
```

- *Type:* double

---

##### `RootSpanOperationName`<sup>Required</sup> <a name="RootSpanOperationName" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.property.rootSpanOperationName"></a>

```csharp
public string RootSpanOperationName { get; }
```

- *Type:* string

---

##### `RootSpanServiceName`<sup>Required</sup> <a name="RootSpanServiceName" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.property.rootSpanServiceName"></a>

```csharp
public string RootSpanServiceName { get; }
```

- *Type:* string

---

##### `ServiceSummaries`<sup>Required</sup> <a name="ServiceSummaries" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.property.serviceSummaries"></a>

```csharp
public DataOciApmTracesTraceSpanSummaryServiceSummariesList ServiceSummaries { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesList">DataOciApmTracesTraceSpanSummaryServiceSummariesList</a>

---

##### `SpanCount`<sup>Required</sup> <a name="SpanCount" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.property.spanCount"></a>

```csharp
public double SpanCount { get; }
```

- *Type:* double

---

##### `TimeEarliestSpanStarted`<sup>Required</sup> <a name="TimeEarliestSpanStarted" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.property.timeEarliestSpanStarted"></a>

```csharp
public string TimeEarliestSpanStarted { get; }
```

- *Type:* string

---

##### `TimeLatestSpanEnded`<sup>Required</sup> <a name="TimeLatestSpanEnded" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.property.timeLatestSpanEnded"></a>

```csharp
public string TimeLatestSpanEnded { get; }
```

- *Type:* string

---

##### `TimeRootSpanEnded`<sup>Required</sup> <a name="TimeRootSpanEnded" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.property.timeRootSpanEnded"></a>

```csharp
public string TimeRootSpanEnded { get; }
```

- *Type:* string

---

##### `TimeRootSpanStarted`<sup>Required</sup> <a name="TimeRootSpanStarted" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.property.timeRootSpanStarted"></a>

```csharp
public string TimeRootSpanStarted { get; }
```

- *Type:* string

---

##### `TraceDurationInMs`<sup>Required</sup> <a name="TraceDurationInMs" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.property.traceDurationInMs"></a>

```csharp
public double TraceDurationInMs { get; }
```

- *Type:* double

---

##### `TraceErrorCode`<sup>Required</sup> <a name="TraceErrorCode" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.property.traceErrorCode"></a>

```csharp
public string TraceErrorCode { get; }
```

- *Type:* string

---

##### `TraceErrorType`<sup>Required</sup> <a name="TraceErrorType" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.property.traceErrorType"></a>

```csharp
public string TraceErrorType { get; }
```

- *Type:* string

---

##### `TraceStatus`<sup>Required</sup> <a name="TraceStatus" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.property.traceStatus"></a>

```csharp
public string TraceStatus { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.property.internalValue"></a>

```csharp
public DataOciApmTracesTraceSpanSummary InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummary">DataOciApmTracesTraceSpanSummary</a>

---


### DataOciApmTracesTraceSpanSummaryServiceSummariesList <a name="DataOciApmTracesTraceSpanSummaryServiceSummariesList" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciApmTracesTraceSpanSummaryServiceSummariesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesList.get"></a>

```csharp
private DataOciApmTracesTraceSpanSummaryServiceSummariesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciApmTracesTraceSpanSummaryServiceSummariesOutputReference <a name="DataOciApmTracesTraceSpanSummaryServiceSummariesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciApmTracesTraceSpanSummaryServiceSummariesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesOutputReference.property.errorSpans">ErrorSpans</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesOutputReference.property.spanServiceName">SpanServiceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesOutputReference.property.totalSpans">TotalSpans</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummaries">DataOciApmTracesTraceSpanSummaryServiceSummaries</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ErrorSpans`<sup>Required</sup> <a name="ErrorSpans" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesOutputReference.property.errorSpans"></a>

```csharp
public string ErrorSpans { get; }
```

- *Type:* string

---

##### `SpanServiceName`<sup>Required</sup> <a name="SpanServiceName" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesOutputReference.property.spanServiceName"></a>

```csharp
public string SpanServiceName { get; }
```

- *Type:* string

---

##### `TotalSpans`<sup>Required</sup> <a name="TotalSpans" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesOutputReference.property.totalSpans"></a>

```csharp
public string TotalSpans { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesOutputReference.property.internalValue"></a>

```csharp
public DataOciApmTracesTraceSpanSummaryServiceSummaries InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummaries">DataOciApmTracesTraceSpanSummaryServiceSummaries</a>

---



