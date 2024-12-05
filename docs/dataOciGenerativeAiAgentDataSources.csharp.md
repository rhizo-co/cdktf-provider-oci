# `dataOciGenerativeAiAgentDataSources` Submodule <a name="`dataOciGenerativeAiAgentDataSources` Submodule" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciGenerativeAiAgentDataSources <a name="DataOciGenerativeAiAgentDataSources" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSources"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_agent_data_sources oci_generative_ai_agent_data_sources}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSources.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciGenerativeAiAgentDataSources(Construct Scope, string Id, DataOciGenerativeAiAgentDataSourcesConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSources.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSources.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSources.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesConfig">DataOciGenerativeAiAgentDataSourcesConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSources.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSources.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSources.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesConfig">DataOciGenerativeAiAgentDataSourcesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSources.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSources.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSources.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSources.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSources.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSources.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSources.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSources.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSources.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSources.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSources.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSources.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSources.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSources.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSources.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSources.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSources.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSources.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSources.resetCompartmentId">ResetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSources.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSources.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSources.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSources.resetKnowledgeBaseId">ResetKnowledgeBaseId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSources.resetState">ResetState</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSources.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSources.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSources.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSources.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSources.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSources.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSources.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSources.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSources.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSources.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSources.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSources.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSources.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSources.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSources.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSources.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSources.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSources.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSources.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSources.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSources.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSources.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSources.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSources.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSources.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSources.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSources.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSources.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSources.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSources.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSources.putFilter"></a>

```csharp
private void PutFilter(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSources.putFilter.parameter.value"></a>

- *Type:* object

---

##### `ResetCompartmentId` <a name="ResetCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSources.resetCompartmentId"></a>

```csharp
private void ResetCompartmentId()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSources.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSources.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSources.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetKnowledgeBaseId` <a name="ResetKnowledgeBaseId" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSources.resetKnowledgeBaseId"></a>

```csharp
private void ResetKnowledgeBaseId()
```

##### `ResetState` <a name="ResetState" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSources.resetState"></a>

```csharp
private void ResetState()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSources.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSources.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSources.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSources.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciGenerativeAiAgentDataSources resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSources.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciGenerativeAiAgentDataSources.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSources.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSources.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciGenerativeAiAgentDataSources.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSources.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSources.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciGenerativeAiAgentDataSources.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSources.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSources.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciGenerativeAiAgentDataSources.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciGenerativeAiAgentDataSources resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSources.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSources.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciGenerativeAiAgentDataSources to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSources.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciGenerativeAiAgentDataSources that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_agent_data_sources#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSources.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciGenerativeAiAgentDataSources to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSources.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSources.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSources.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSources.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSources.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSources.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSources.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSources.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSources.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSources.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSources.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSources.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSources.property.dataSourceCollection">DataSourceCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionList">DataOciGenerativeAiAgentDataSourcesDataSourceCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSources.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesFilterList">DataOciGenerativeAiAgentDataSourcesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSources.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSources.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSources.property.filterInput">FilterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSources.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSources.property.knowledgeBaseIdInput">KnowledgeBaseIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSources.property.stateInput">StateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSources.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSources.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSources.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSources.property.knowledgeBaseId">KnowledgeBaseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSources.property.state">State</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSources.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSources.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSources.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSources.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSources.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSources.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSources.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSources.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSources.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSources.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSources.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSources.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `DataSourceCollection`<sup>Required</sup> <a name="DataSourceCollection" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSources.property.dataSourceCollection"></a>

```csharp
public DataOciGenerativeAiAgentDataSourcesDataSourceCollectionList DataSourceCollection { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionList">DataOciGenerativeAiAgentDataSourcesDataSourceCollectionList</a>

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSources.property.filter"></a>

```csharp
public DataOciGenerativeAiAgentDataSourcesFilterList Filter { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesFilterList">DataOciGenerativeAiAgentDataSourcesFilterList</a>

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSources.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSources.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSources.property.filterInput"></a>

```csharp
public object FilterInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSources.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `KnowledgeBaseIdInput`<sup>Optional</sup> <a name="KnowledgeBaseIdInput" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSources.property.knowledgeBaseIdInput"></a>

```csharp
public string KnowledgeBaseIdInput { get; }
```

- *Type:* string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSources.property.stateInput"></a>

```csharp
public string StateInput { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSources.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSources.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSources.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `KnowledgeBaseId`<sup>Required</sup> <a name="KnowledgeBaseId" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSources.property.knowledgeBaseId"></a>

```csharp
public string KnowledgeBaseId { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSources.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSources.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSources.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciGenerativeAiAgentDataSourcesConfig <a name="DataOciGenerativeAiAgentDataSourcesConfig" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciGenerativeAiAgentDataSourcesConfig {
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
    string KnowledgeBaseId = null,
    string State = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_agent_data_sources#compartment_id DataOciGenerativeAiAgentDataSources#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_agent_data_sources#display_name DataOciGenerativeAiAgentDataSources#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesConfig.property.filter">Filter</a></code> | <code>object</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_agent_data_sources#id DataOciGenerativeAiAgentDataSources#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesConfig.property.knowledgeBaseId">KnowledgeBaseId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_agent_data_sources#knowledge_base_id DataOciGenerativeAiAgentDataSources#knowledge_base_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesConfig.property.state">State</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_agent_data_sources#state DataOciGenerativeAiAgentDataSources#state}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CompartmentId`<sup>Optional</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_agent_data_sources#compartment_id DataOciGenerativeAiAgentDataSources#compartment_id}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_agent_data_sources#display_name DataOciGenerativeAiAgentDataSources#display_name}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesConfig.property.filter"></a>

```csharp
public object Filter { get; set; }
```

- *Type:* object

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_agent_data_sources#filter DataOciGenerativeAiAgentDataSources#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_agent_data_sources#id DataOciGenerativeAiAgentDataSources#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `KnowledgeBaseId`<sup>Optional</sup> <a name="KnowledgeBaseId" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesConfig.property.knowledgeBaseId"></a>

```csharp
public string KnowledgeBaseId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_agent_data_sources#knowledge_base_id DataOciGenerativeAiAgentDataSources#knowledge_base_id}.

---

##### `State`<sup>Optional</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesConfig.property.state"></a>

```csharp
public string State { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_agent_data_sources#state DataOciGenerativeAiAgentDataSources#state}.

---

### DataOciGenerativeAiAgentDataSourcesDataSourceCollection <a name="DataOciGenerativeAiAgentDataSourcesDataSourceCollection" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollection.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciGenerativeAiAgentDataSourcesDataSourceCollection {

};
```


### DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItems <a name="DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItems.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItems {

};
```


### DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfig <a name="DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfig" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfig {

};
```


### DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigObjectStoragePrefixes <a name="DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigObjectStoragePrefixes" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigObjectStoragePrefixes"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigObjectStoragePrefixes.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigObjectStoragePrefixes {

};
```


### DataOciGenerativeAiAgentDataSourcesFilter <a name="DataOciGenerativeAiAgentDataSourcesFilter" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciGenerativeAiAgentDataSourcesFilter {
    string Name,
    string[] Values,
    object Regex = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesFilter.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_agent_data_sources#name DataOciGenerativeAiAgentDataSources#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesFilter.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_agent_data_sources#values DataOciGenerativeAiAgentDataSources#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesFilter.property.regex">Regex</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_agent_data_sources#regex DataOciGenerativeAiAgentDataSources#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesFilter.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_agent_data_sources#name DataOciGenerativeAiAgentDataSources#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesFilter.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_agent_data_sources#values DataOciGenerativeAiAgentDataSources#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesFilter.property.regex"></a>

```csharp
public object Regex { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_agent_data_sources#regex DataOciGenerativeAiAgentDataSources#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigList <a name="DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigList" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigList.get"></a>

```csharp
private DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigObjectStoragePrefixesList <a name="DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigObjectStoragePrefixesList" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigObjectStoragePrefixesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigObjectStoragePrefixesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigObjectStoragePrefixesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigObjectStoragePrefixesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigObjectStoragePrefixesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigObjectStoragePrefixesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigObjectStoragePrefixesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigObjectStoragePrefixesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigObjectStoragePrefixesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigObjectStoragePrefixesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigObjectStoragePrefixesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigObjectStoragePrefixesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigObjectStoragePrefixesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigObjectStoragePrefixesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigObjectStoragePrefixesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigObjectStoragePrefixesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigObjectStoragePrefixesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigObjectStoragePrefixesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigObjectStoragePrefixesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigObjectStoragePrefixesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigObjectStoragePrefixesList.get"></a>

```csharp
private DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigObjectStoragePrefixesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigObjectStoragePrefixesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigObjectStoragePrefixesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigObjectStoragePrefixesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigObjectStoragePrefixesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigObjectStoragePrefixesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigObjectStoragePrefixesOutputReference <a name="DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigObjectStoragePrefixesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigObjectStoragePrefixesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigObjectStoragePrefixesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigObjectStoragePrefixesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigObjectStoragePrefixesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigObjectStoragePrefixesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigObjectStoragePrefixesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigObjectStoragePrefixesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigObjectStoragePrefixesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigObjectStoragePrefixesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigObjectStoragePrefixesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigObjectStoragePrefixesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigObjectStoragePrefixesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigObjectStoragePrefixesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigObjectStoragePrefixesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigObjectStoragePrefixesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigObjectStoragePrefixesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigObjectStoragePrefixesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigObjectStoragePrefixesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigObjectStoragePrefixesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigObjectStoragePrefixesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigObjectStoragePrefixesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigObjectStoragePrefixesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigObjectStoragePrefixesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigObjectStoragePrefixesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigObjectStoragePrefixesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigObjectStoragePrefixesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigObjectStoragePrefixesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigObjectStoragePrefixesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigObjectStoragePrefixesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigObjectStoragePrefixesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigObjectStoragePrefixesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigObjectStoragePrefixesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigObjectStoragePrefixesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigObjectStoragePrefixesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigObjectStoragePrefixesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigObjectStoragePrefixesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigObjectStoragePrefixesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigObjectStoragePrefixesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigObjectStoragePrefixesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigObjectStoragePrefixesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigObjectStoragePrefixesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigObjectStoragePrefixesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigObjectStoragePrefixesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigObjectStoragePrefixesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigObjectStoragePrefixesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigObjectStoragePrefixesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigObjectStoragePrefixesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigObjectStoragePrefixesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigObjectStoragePrefixesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigObjectStoragePrefixesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigObjectStoragePrefixesOutputReference.property.bucket">Bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigObjectStoragePrefixesOutputReference.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigObjectStoragePrefixesOutputReference.property.prefix">Prefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigObjectStoragePrefixesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigObjectStoragePrefixes">DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigObjectStoragePrefixes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigObjectStoragePrefixesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigObjectStoragePrefixesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigObjectStoragePrefixesOutputReference.property.bucket"></a>

```csharp
public string Bucket { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigObjectStoragePrefixesOutputReference.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `Prefix`<sup>Required</sup> <a name="Prefix" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigObjectStoragePrefixesOutputReference.property.prefix"></a>

```csharp
public string Prefix { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigObjectStoragePrefixesOutputReference.property.internalValue"></a>

```csharp
public DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigObjectStoragePrefixes InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigObjectStoragePrefixes">DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigObjectStoragePrefixes</a>

---


### DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigOutputReference <a name="DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigOutputReference.property.dataSourceConfigType">DataSourceConfigType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigOutputReference.property.objectStoragePrefixes">ObjectStoragePrefixes</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigObjectStoragePrefixesList">DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigObjectStoragePrefixesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfig">DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DataSourceConfigType`<sup>Required</sup> <a name="DataSourceConfigType" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigOutputReference.property.dataSourceConfigType"></a>

```csharp
public string DataSourceConfigType { get; }
```

- *Type:* string

---

##### `ObjectStoragePrefixes`<sup>Required</sup> <a name="ObjectStoragePrefixes" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigOutputReference.property.objectStoragePrefixes"></a>

```csharp
public DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigObjectStoragePrefixesList ObjectStoragePrefixes { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigObjectStoragePrefixesList">DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigObjectStoragePrefixesList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigOutputReference.property.internalValue"></a>

```csharp
public DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfig InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfig">DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfig</a>

---


### DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsList <a name="DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsList.get"></a>

```csharp
private DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsOutputReference <a name="DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsOutputReference.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsOutputReference.property.dataSourceConfig">DataSourceConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigList">DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsOutputReference.property.definedTags">DefinedTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsOutputReference.property.freeformTags">FreeformTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsOutputReference.property.knowledgeBaseId">KnowledgeBaseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsOutputReference.property.lifecycleDetails">LifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsOutputReference.property.systemTags">SystemTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsOutputReference.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsOutputReference.property.timeUpdated">TimeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItems">DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsOutputReference.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `DataSourceConfig`<sup>Required</sup> <a name="DataSourceConfig" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsOutputReference.property.dataSourceConfig"></a>

```csharp
public DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigList DataSourceConfig { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigList">DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigList</a>

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsOutputReference.property.definedTags"></a>

```csharp
public StringMap DefinedTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsOutputReference.property.freeformTags"></a>

```csharp
public StringMap FreeformTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `KnowledgeBaseId`<sup>Required</sup> <a name="KnowledgeBaseId" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsOutputReference.property.knowledgeBaseId"></a>

```csharp
public string KnowledgeBaseId { get; }
```

- *Type:* string

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsOutputReference.property.lifecycleDetails"></a>

```csharp
public string LifecycleDetails { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsOutputReference.property.systemTags"></a>

```csharp
public StringMap SystemTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsOutputReference.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsOutputReference.property.timeUpdated"></a>

```csharp
public string TimeUpdated { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsOutputReference.property.internalValue"></a>

```csharp
public DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItems InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItems">DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItems</a>

---


### DataOciGenerativeAiAgentDataSourcesDataSourceCollectionList <a name="DataOciGenerativeAiAgentDataSourcesDataSourceCollectionList" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciGenerativeAiAgentDataSourcesDataSourceCollectionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionList.get"></a>

```csharp
private DataOciGenerativeAiAgentDataSourcesDataSourceCollectionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciGenerativeAiAgentDataSourcesDataSourceCollectionOutputReference <a name="DataOciGenerativeAiAgentDataSourcesDataSourceCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciGenerativeAiAgentDataSourcesDataSourceCollectionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsList">DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollection">DataOciGenerativeAiAgentDataSourcesDataSourceCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionOutputReference.property.items"></a>

```csharp
public DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsList Items { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsList">DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionOutputReference.property.internalValue"></a>

```csharp
public DataOciGenerativeAiAgentDataSourcesDataSourceCollection InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollection">DataOciGenerativeAiAgentDataSourcesDataSourceCollection</a>

---


### DataOciGenerativeAiAgentDataSourcesFilterList <a name="DataOciGenerativeAiAgentDataSourcesFilterList" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesFilterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciGenerativeAiAgentDataSourcesFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesFilterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesFilterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesFilterList.get"></a>

```csharp
private DataOciGenerativeAiAgentDataSourcesFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesFilterList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesFilterList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciGenerativeAiAgentDataSourcesFilterOutputReference <a name="DataOciGenerativeAiAgentDataSourcesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciGenerativeAiAgentDataSourcesFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesFilterOutputReference.resetRegex"></a>

```csharp
private void ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesFilterOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesFilterOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesFilterOutputReference.property.regex">Regex</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesFilterOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesFilterOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesFilterOutputReference.property.regexInput"></a>

```csharp
public object RegexInput { get; }
```

- *Type:* object

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesFilterOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesFilterOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesFilterOutputReference.property.regex"></a>

```csharp
public object Regex { get; }
```

- *Type:* object

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesFilterOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesFilterOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



