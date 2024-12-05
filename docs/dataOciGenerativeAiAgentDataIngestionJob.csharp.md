# `dataOciGenerativeAiAgentDataIngestionJob` Submodule <a name="`dataOciGenerativeAiAgentDataIngestionJob` Submodule" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJob"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciGenerativeAiAgentDataIngestionJob <a name="DataOciGenerativeAiAgentDataIngestionJob" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJob.DataOciGenerativeAiAgentDataIngestionJob"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_agent_data_ingestion_job oci_generative_ai_agent_data_ingestion_job}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJob.DataOciGenerativeAiAgentDataIngestionJob.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciGenerativeAiAgentDataIngestionJob(Construct Scope, string Id, DataOciGenerativeAiAgentDataIngestionJobConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJob.DataOciGenerativeAiAgentDataIngestionJob.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJob.DataOciGenerativeAiAgentDataIngestionJob.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJob.DataOciGenerativeAiAgentDataIngestionJob.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJob.DataOciGenerativeAiAgentDataIngestionJobConfig">DataOciGenerativeAiAgentDataIngestionJobConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJob.DataOciGenerativeAiAgentDataIngestionJob.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJob.DataOciGenerativeAiAgentDataIngestionJob.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJob.DataOciGenerativeAiAgentDataIngestionJob.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJob.DataOciGenerativeAiAgentDataIngestionJobConfig">DataOciGenerativeAiAgentDataIngestionJobConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJob.DataOciGenerativeAiAgentDataIngestionJob.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJob.DataOciGenerativeAiAgentDataIngestionJob.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJob.DataOciGenerativeAiAgentDataIngestionJob.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJob.DataOciGenerativeAiAgentDataIngestionJob.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJob.DataOciGenerativeAiAgentDataIngestionJob.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJob.DataOciGenerativeAiAgentDataIngestionJob.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJob.DataOciGenerativeAiAgentDataIngestionJob.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJob.DataOciGenerativeAiAgentDataIngestionJob.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJob.DataOciGenerativeAiAgentDataIngestionJob.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJob.DataOciGenerativeAiAgentDataIngestionJob.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJob.DataOciGenerativeAiAgentDataIngestionJob.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJob.DataOciGenerativeAiAgentDataIngestionJob.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJob.DataOciGenerativeAiAgentDataIngestionJob.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJob.DataOciGenerativeAiAgentDataIngestionJob.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJob.DataOciGenerativeAiAgentDataIngestionJob.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJob.DataOciGenerativeAiAgentDataIngestionJob.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJob.DataOciGenerativeAiAgentDataIngestionJob.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJob.DataOciGenerativeAiAgentDataIngestionJob.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJob.DataOciGenerativeAiAgentDataIngestionJob.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJob.DataOciGenerativeAiAgentDataIngestionJob.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJob.DataOciGenerativeAiAgentDataIngestionJob.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJob.DataOciGenerativeAiAgentDataIngestionJob.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJob.DataOciGenerativeAiAgentDataIngestionJob.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJob.DataOciGenerativeAiAgentDataIngestionJob.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJob.DataOciGenerativeAiAgentDataIngestionJob.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJob.DataOciGenerativeAiAgentDataIngestionJob.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJob.DataOciGenerativeAiAgentDataIngestionJob.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJob.DataOciGenerativeAiAgentDataIngestionJob.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJob.DataOciGenerativeAiAgentDataIngestionJob.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJob.DataOciGenerativeAiAgentDataIngestionJob.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJob.DataOciGenerativeAiAgentDataIngestionJob.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJob.DataOciGenerativeAiAgentDataIngestionJob.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJob.DataOciGenerativeAiAgentDataIngestionJob.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJob.DataOciGenerativeAiAgentDataIngestionJob.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJob.DataOciGenerativeAiAgentDataIngestionJob.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJob.DataOciGenerativeAiAgentDataIngestionJob.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJob.DataOciGenerativeAiAgentDataIngestionJob.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJob.DataOciGenerativeAiAgentDataIngestionJob.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJob.DataOciGenerativeAiAgentDataIngestionJob.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJob.DataOciGenerativeAiAgentDataIngestionJob.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJob.DataOciGenerativeAiAgentDataIngestionJob.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJob.DataOciGenerativeAiAgentDataIngestionJob.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJob.DataOciGenerativeAiAgentDataIngestionJob.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJob.DataOciGenerativeAiAgentDataIngestionJob.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJob.DataOciGenerativeAiAgentDataIngestionJob.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJob.DataOciGenerativeAiAgentDataIngestionJob.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJob.DataOciGenerativeAiAgentDataIngestionJob.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJob.DataOciGenerativeAiAgentDataIngestionJob.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJob.DataOciGenerativeAiAgentDataIngestionJob.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJob.DataOciGenerativeAiAgentDataIngestionJob.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJob.DataOciGenerativeAiAgentDataIngestionJob.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciGenerativeAiAgentDataIngestionJob resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJob.DataOciGenerativeAiAgentDataIngestionJob.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciGenerativeAiAgentDataIngestionJob.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJob.DataOciGenerativeAiAgentDataIngestionJob.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJob.DataOciGenerativeAiAgentDataIngestionJob.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciGenerativeAiAgentDataIngestionJob.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJob.DataOciGenerativeAiAgentDataIngestionJob.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJob.DataOciGenerativeAiAgentDataIngestionJob.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciGenerativeAiAgentDataIngestionJob.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJob.DataOciGenerativeAiAgentDataIngestionJob.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJob.DataOciGenerativeAiAgentDataIngestionJob.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciGenerativeAiAgentDataIngestionJob.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciGenerativeAiAgentDataIngestionJob resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJob.DataOciGenerativeAiAgentDataIngestionJob.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJob.DataOciGenerativeAiAgentDataIngestionJob.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciGenerativeAiAgentDataIngestionJob to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJob.DataOciGenerativeAiAgentDataIngestionJob.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciGenerativeAiAgentDataIngestionJob that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_agent_data_ingestion_job#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJob.DataOciGenerativeAiAgentDataIngestionJob.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciGenerativeAiAgentDataIngestionJob to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJob.DataOciGenerativeAiAgentDataIngestionJob.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJob.DataOciGenerativeAiAgentDataIngestionJob.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJob.DataOciGenerativeAiAgentDataIngestionJob.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJob.DataOciGenerativeAiAgentDataIngestionJob.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJob.DataOciGenerativeAiAgentDataIngestionJob.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJob.DataOciGenerativeAiAgentDataIngestionJob.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJob.DataOciGenerativeAiAgentDataIngestionJob.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJob.DataOciGenerativeAiAgentDataIngestionJob.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJob.DataOciGenerativeAiAgentDataIngestionJob.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJob.DataOciGenerativeAiAgentDataIngestionJob.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJob.DataOciGenerativeAiAgentDataIngestionJob.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJob.DataOciGenerativeAiAgentDataIngestionJob.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJob.DataOciGenerativeAiAgentDataIngestionJob.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJob.DataOciGenerativeAiAgentDataIngestionJob.property.dataIngestionJobStatistics">DataIngestionJobStatistics</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJob.DataOciGenerativeAiAgentDataIngestionJobDataIngestionJobStatisticsList">DataOciGenerativeAiAgentDataIngestionJobDataIngestionJobStatisticsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJob.DataOciGenerativeAiAgentDataIngestionJob.property.dataSourceId">DataSourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJob.DataOciGenerativeAiAgentDataIngestionJob.property.definedTags">DefinedTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJob.DataOciGenerativeAiAgentDataIngestionJob.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJob.DataOciGenerativeAiAgentDataIngestionJob.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJob.DataOciGenerativeAiAgentDataIngestionJob.property.freeformTags">FreeformTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJob.DataOciGenerativeAiAgentDataIngestionJob.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJob.DataOciGenerativeAiAgentDataIngestionJob.property.lifecycleDetails">LifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJob.DataOciGenerativeAiAgentDataIngestionJob.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJob.DataOciGenerativeAiAgentDataIngestionJob.property.systemTags">SystemTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJob.DataOciGenerativeAiAgentDataIngestionJob.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJob.DataOciGenerativeAiAgentDataIngestionJob.property.timeUpdated">TimeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJob.DataOciGenerativeAiAgentDataIngestionJob.property.dataIngestionJobIdInput">DataIngestionJobIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJob.DataOciGenerativeAiAgentDataIngestionJob.property.dataIngestionJobId">DataIngestionJobId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJob.DataOciGenerativeAiAgentDataIngestionJob.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJob.DataOciGenerativeAiAgentDataIngestionJob.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJob.DataOciGenerativeAiAgentDataIngestionJob.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJob.DataOciGenerativeAiAgentDataIngestionJob.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJob.DataOciGenerativeAiAgentDataIngestionJob.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJob.DataOciGenerativeAiAgentDataIngestionJob.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJob.DataOciGenerativeAiAgentDataIngestionJob.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJob.DataOciGenerativeAiAgentDataIngestionJob.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJob.DataOciGenerativeAiAgentDataIngestionJob.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJob.DataOciGenerativeAiAgentDataIngestionJob.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJob.DataOciGenerativeAiAgentDataIngestionJob.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJob.DataOciGenerativeAiAgentDataIngestionJob.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJob.DataOciGenerativeAiAgentDataIngestionJob.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `DataIngestionJobStatistics`<sup>Required</sup> <a name="DataIngestionJobStatistics" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJob.DataOciGenerativeAiAgentDataIngestionJob.property.dataIngestionJobStatistics"></a>

```csharp
public DataOciGenerativeAiAgentDataIngestionJobDataIngestionJobStatisticsList DataIngestionJobStatistics { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJob.DataOciGenerativeAiAgentDataIngestionJobDataIngestionJobStatisticsList">DataOciGenerativeAiAgentDataIngestionJobDataIngestionJobStatisticsList</a>

---

##### `DataSourceId`<sup>Required</sup> <a name="DataSourceId" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJob.DataOciGenerativeAiAgentDataIngestionJob.property.dataSourceId"></a>

```csharp
public string DataSourceId { get; }
```

- *Type:* string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJob.DataOciGenerativeAiAgentDataIngestionJob.property.definedTags"></a>

```csharp
public StringMap DefinedTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJob.DataOciGenerativeAiAgentDataIngestionJob.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJob.DataOciGenerativeAiAgentDataIngestionJob.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJob.DataOciGenerativeAiAgentDataIngestionJob.property.freeformTags"></a>

```csharp
public StringMap FreeformTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJob.DataOciGenerativeAiAgentDataIngestionJob.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJob.DataOciGenerativeAiAgentDataIngestionJob.property.lifecycleDetails"></a>

```csharp
public string LifecycleDetails { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJob.DataOciGenerativeAiAgentDataIngestionJob.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJob.DataOciGenerativeAiAgentDataIngestionJob.property.systemTags"></a>

```csharp
public StringMap SystemTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJob.DataOciGenerativeAiAgentDataIngestionJob.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJob.DataOciGenerativeAiAgentDataIngestionJob.property.timeUpdated"></a>

```csharp
public string TimeUpdated { get; }
```

- *Type:* string

---

##### `DataIngestionJobIdInput`<sup>Optional</sup> <a name="DataIngestionJobIdInput" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJob.DataOciGenerativeAiAgentDataIngestionJob.property.dataIngestionJobIdInput"></a>

```csharp
public string DataIngestionJobIdInput { get; }
```

- *Type:* string

---

##### `DataIngestionJobId`<sup>Required</sup> <a name="DataIngestionJobId" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJob.DataOciGenerativeAiAgentDataIngestionJob.property.dataIngestionJobId"></a>

```csharp
public string DataIngestionJobId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJob.DataOciGenerativeAiAgentDataIngestionJob.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJob.DataOciGenerativeAiAgentDataIngestionJob.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciGenerativeAiAgentDataIngestionJobConfig <a name="DataOciGenerativeAiAgentDataIngestionJobConfig" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJob.DataOciGenerativeAiAgentDataIngestionJobConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJob.DataOciGenerativeAiAgentDataIngestionJobConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciGenerativeAiAgentDataIngestionJobConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string DataIngestionJobId
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJob.DataOciGenerativeAiAgentDataIngestionJobConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJob.DataOciGenerativeAiAgentDataIngestionJobConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJob.DataOciGenerativeAiAgentDataIngestionJobConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJob.DataOciGenerativeAiAgentDataIngestionJobConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJob.DataOciGenerativeAiAgentDataIngestionJobConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJob.DataOciGenerativeAiAgentDataIngestionJobConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJob.DataOciGenerativeAiAgentDataIngestionJobConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJob.DataOciGenerativeAiAgentDataIngestionJobConfig.property.dataIngestionJobId">DataIngestionJobId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_agent_data_ingestion_job#data_ingestion_job_id DataOciGenerativeAiAgentDataIngestionJob#data_ingestion_job_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJob.DataOciGenerativeAiAgentDataIngestionJobConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJob.DataOciGenerativeAiAgentDataIngestionJobConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJob.DataOciGenerativeAiAgentDataIngestionJobConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJob.DataOciGenerativeAiAgentDataIngestionJobConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJob.DataOciGenerativeAiAgentDataIngestionJobConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJob.DataOciGenerativeAiAgentDataIngestionJobConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJob.DataOciGenerativeAiAgentDataIngestionJobConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `DataIngestionJobId`<sup>Required</sup> <a name="DataIngestionJobId" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJob.DataOciGenerativeAiAgentDataIngestionJobConfig.property.dataIngestionJobId"></a>

```csharp
public string DataIngestionJobId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_agent_data_ingestion_job#data_ingestion_job_id DataOciGenerativeAiAgentDataIngestionJob#data_ingestion_job_id}.

---

### DataOciGenerativeAiAgentDataIngestionJobDataIngestionJobStatistics <a name="DataOciGenerativeAiAgentDataIngestionJobDataIngestionJobStatistics" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJob.DataOciGenerativeAiAgentDataIngestionJobDataIngestionJobStatistics"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJob.DataOciGenerativeAiAgentDataIngestionJobDataIngestionJobStatistics.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciGenerativeAiAgentDataIngestionJobDataIngestionJobStatistics {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciGenerativeAiAgentDataIngestionJobDataIngestionJobStatisticsList <a name="DataOciGenerativeAiAgentDataIngestionJobDataIngestionJobStatisticsList" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJob.DataOciGenerativeAiAgentDataIngestionJobDataIngestionJobStatisticsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJob.DataOciGenerativeAiAgentDataIngestionJobDataIngestionJobStatisticsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciGenerativeAiAgentDataIngestionJobDataIngestionJobStatisticsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJob.DataOciGenerativeAiAgentDataIngestionJobDataIngestionJobStatisticsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJob.DataOciGenerativeAiAgentDataIngestionJobDataIngestionJobStatisticsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJob.DataOciGenerativeAiAgentDataIngestionJobDataIngestionJobStatisticsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJob.DataOciGenerativeAiAgentDataIngestionJobDataIngestionJobStatisticsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJob.DataOciGenerativeAiAgentDataIngestionJobDataIngestionJobStatisticsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJob.DataOciGenerativeAiAgentDataIngestionJobDataIngestionJobStatisticsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJob.DataOciGenerativeAiAgentDataIngestionJobDataIngestionJobStatisticsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJob.DataOciGenerativeAiAgentDataIngestionJobDataIngestionJobStatisticsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJob.DataOciGenerativeAiAgentDataIngestionJobDataIngestionJobStatisticsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJob.DataOciGenerativeAiAgentDataIngestionJobDataIngestionJobStatisticsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJob.DataOciGenerativeAiAgentDataIngestionJobDataIngestionJobStatisticsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJob.DataOciGenerativeAiAgentDataIngestionJobDataIngestionJobStatisticsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJob.DataOciGenerativeAiAgentDataIngestionJobDataIngestionJobStatisticsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJob.DataOciGenerativeAiAgentDataIngestionJobDataIngestionJobStatisticsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJob.DataOciGenerativeAiAgentDataIngestionJobDataIngestionJobStatisticsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJob.DataOciGenerativeAiAgentDataIngestionJobDataIngestionJobStatisticsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJob.DataOciGenerativeAiAgentDataIngestionJobDataIngestionJobStatisticsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJob.DataOciGenerativeAiAgentDataIngestionJobDataIngestionJobStatisticsList.get"></a>

```csharp
private DataOciGenerativeAiAgentDataIngestionJobDataIngestionJobStatisticsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJob.DataOciGenerativeAiAgentDataIngestionJobDataIngestionJobStatisticsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJob.DataOciGenerativeAiAgentDataIngestionJobDataIngestionJobStatisticsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJob.DataOciGenerativeAiAgentDataIngestionJobDataIngestionJobStatisticsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJob.DataOciGenerativeAiAgentDataIngestionJobDataIngestionJobStatisticsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJob.DataOciGenerativeAiAgentDataIngestionJobDataIngestionJobStatisticsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciGenerativeAiAgentDataIngestionJobDataIngestionJobStatisticsOutputReference <a name="DataOciGenerativeAiAgentDataIngestionJobDataIngestionJobStatisticsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJob.DataOciGenerativeAiAgentDataIngestionJobDataIngestionJobStatisticsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJob.DataOciGenerativeAiAgentDataIngestionJobDataIngestionJobStatisticsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciGenerativeAiAgentDataIngestionJobDataIngestionJobStatisticsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJob.DataOciGenerativeAiAgentDataIngestionJobDataIngestionJobStatisticsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJob.DataOciGenerativeAiAgentDataIngestionJobDataIngestionJobStatisticsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJob.DataOciGenerativeAiAgentDataIngestionJobDataIngestionJobStatisticsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJob.DataOciGenerativeAiAgentDataIngestionJobDataIngestionJobStatisticsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJob.DataOciGenerativeAiAgentDataIngestionJobDataIngestionJobStatisticsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJob.DataOciGenerativeAiAgentDataIngestionJobDataIngestionJobStatisticsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJob.DataOciGenerativeAiAgentDataIngestionJobDataIngestionJobStatisticsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJob.DataOciGenerativeAiAgentDataIngestionJobDataIngestionJobStatisticsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJob.DataOciGenerativeAiAgentDataIngestionJobDataIngestionJobStatisticsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJob.DataOciGenerativeAiAgentDataIngestionJobDataIngestionJobStatisticsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJob.DataOciGenerativeAiAgentDataIngestionJobDataIngestionJobStatisticsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJob.DataOciGenerativeAiAgentDataIngestionJobDataIngestionJobStatisticsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJob.DataOciGenerativeAiAgentDataIngestionJobDataIngestionJobStatisticsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJob.DataOciGenerativeAiAgentDataIngestionJobDataIngestionJobStatisticsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJob.DataOciGenerativeAiAgentDataIngestionJobDataIngestionJobStatisticsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJob.DataOciGenerativeAiAgentDataIngestionJobDataIngestionJobStatisticsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJob.DataOciGenerativeAiAgentDataIngestionJobDataIngestionJobStatisticsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJob.DataOciGenerativeAiAgentDataIngestionJobDataIngestionJobStatisticsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJob.DataOciGenerativeAiAgentDataIngestionJobDataIngestionJobStatisticsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJob.DataOciGenerativeAiAgentDataIngestionJobDataIngestionJobStatisticsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJob.DataOciGenerativeAiAgentDataIngestionJobDataIngestionJobStatisticsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJob.DataOciGenerativeAiAgentDataIngestionJobDataIngestionJobStatisticsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJob.DataOciGenerativeAiAgentDataIngestionJobDataIngestionJobStatisticsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJob.DataOciGenerativeAiAgentDataIngestionJobDataIngestionJobStatisticsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJob.DataOciGenerativeAiAgentDataIngestionJobDataIngestionJobStatisticsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJob.DataOciGenerativeAiAgentDataIngestionJobDataIngestionJobStatisticsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJob.DataOciGenerativeAiAgentDataIngestionJobDataIngestionJobStatisticsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJob.DataOciGenerativeAiAgentDataIngestionJobDataIngestionJobStatisticsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJob.DataOciGenerativeAiAgentDataIngestionJobDataIngestionJobStatisticsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJob.DataOciGenerativeAiAgentDataIngestionJobDataIngestionJobStatisticsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJob.DataOciGenerativeAiAgentDataIngestionJobDataIngestionJobStatisticsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJob.DataOciGenerativeAiAgentDataIngestionJobDataIngestionJobStatisticsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJob.DataOciGenerativeAiAgentDataIngestionJobDataIngestionJobStatisticsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJob.DataOciGenerativeAiAgentDataIngestionJobDataIngestionJobStatisticsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJob.DataOciGenerativeAiAgentDataIngestionJobDataIngestionJobStatisticsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJob.DataOciGenerativeAiAgentDataIngestionJobDataIngestionJobStatisticsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJob.DataOciGenerativeAiAgentDataIngestionJobDataIngestionJobStatisticsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJob.DataOciGenerativeAiAgentDataIngestionJobDataIngestionJobStatisticsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJob.DataOciGenerativeAiAgentDataIngestionJobDataIngestionJobStatisticsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJob.DataOciGenerativeAiAgentDataIngestionJobDataIngestionJobStatisticsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJob.DataOciGenerativeAiAgentDataIngestionJobDataIngestionJobStatisticsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJob.DataOciGenerativeAiAgentDataIngestionJobDataIngestionJobStatisticsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJob.DataOciGenerativeAiAgentDataIngestionJobDataIngestionJobStatisticsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJob.DataOciGenerativeAiAgentDataIngestionJobDataIngestionJobStatisticsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJob.DataOciGenerativeAiAgentDataIngestionJobDataIngestionJobStatisticsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJob.DataOciGenerativeAiAgentDataIngestionJobDataIngestionJobStatisticsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJob.DataOciGenerativeAiAgentDataIngestionJobDataIngestionJobStatisticsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJob.DataOciGenerativeAiAgentDataIngestionJobDataIngestionJobStatisticsOutputReference.property.durationInSeconds">DurationInSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJob.DataOciGenerativeAiAgentDataIngestionJobDataIngestionJobStatisticsOutputReference.property.numberOfFailedFiles">NumberOfFailedFiles</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJob.DataOciGenerativeAiAgentDataIngestionJobDataIngestionJobStatisticsOutputReference.property.numberOfIngestedFiles">NumberOfIngestedFiles</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJob.DataOciGenerativeAiAgentDataIngestionJobDataIngestionJobStatisticsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJob.DataOciGenerativeAiAgentDataIngestionJobDataIngestionJobStatistics">DataOciGenerativeAiAgentDataIngestionJobDataIngestionJobStatistics</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJob.DataOciGenerativeAiAgentDataIngestionJobDataIngestionJobStatisticsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJob.DataOciGenerativeAiAgentDataIngestionJobDataIngestionJobStatisticsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DurationInSeconds`<sup>Required</sup> <a name="DurationInSeconds" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJob.DataOciGenerativeAiAgentDataIngestionJobDataIngestionJobStatisticsOutputReference.property.durationInSeconds"></a>

```csharp
public double DurationInSeconds { get; }
```

- *Type:* double

---

##### `NumberOfFailedFiles`<sup>Required</sup> <a name="NumberOfFailedFiles" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJob.DataOciGenerativeAiAgentDataIngestionJobDataIngestionJobStatisticsOutputReference.property.numberOfFailedFiles"></a>

```csharp
public double NumberOfFailedFiles { get; }
```

- *Type:* double

---

##### `NumberOfIngestedFiles`<sup>Required</sup> <a name="NumberOfIngestedFiles" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJob.DataOciGenerativeAiAgentDataIngestionJobDataIngestionJobStatisticsOutputReference.property.numberOfIngestedFiles"></a>

```csharp
public double NumberOfIngestedFiles { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJob.DataOciGenerativeAiAgentDataIngestionJobDataIngestionJobStatisticsOutputReference.property.internalValue"></a>

```csharp
public DataOciGenerativeAiAgentDataIngestionJobDataIngestionJobStatistics InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJob.DataOciGenerativeAiAgentDataIngestionJobDataIngestionJobStatistics">DataOciGenerativeAiAgentDataIngestionJobDataIngestionJobStatistics</a>

---



