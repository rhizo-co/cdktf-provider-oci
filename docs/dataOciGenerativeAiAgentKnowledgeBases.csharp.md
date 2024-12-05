# `dataOciGenerativeAiAgentKnowledgeBases` Submodule <a name="`dataOciGenerativeAiAgentKnowledgeBases` Submodule" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciGenerativeAiAgentKnowledgeBases <a name="DataOciGenerativeAiAgentKnowledgeBases" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_agent_knowledge_bases oci_generative_ai_agent_knowledge_bases}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciGenerativeAiAgentKnowledgeBases(Construct Scope, string Id, DataOciGenerativeAiAgentKnowledgeBasesConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesConfig">DataOciGenerativeAiAgentKnowledgeBasesConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesConfig">DataOciGenerativeAiAgentKnowledgeBasesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.resetCompartmentId">ResetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.resetState">ResetState</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.putFilter"></a>

```csharp
private void PutFilter(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.putFilter.parameter.value"></a>

- *Type:* object

---

##### `ResetCompartmentId` <a name="ResetCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.resetCompartmentId"></a>

```csharp
private void ResetCompartmentId()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetState` <a name="ResetState" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.resetState"></a>

```csharp
private void ResetState()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciGenerativeAiAgentKnowledgeBases resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciGenerativeAiAgentKnowledgeBases.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciGenerativeAiAgentKnowledgeBases.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciGenerativeAiAgentKnowledgeBases.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciGenerativeAiAgentKnowledgeBases.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciGenerativeAiAgentKnowledgeBases resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciGenerativeAiAgentKnowledgeBases to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciGenerativeAiAgentKnowledgeBases that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_agent_knowledge_bases#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciGenerativeAiAgentKnowledgeBases to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterList">DataOciGenerativeAiAgentKnowledgeBasesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.property.knowledgeBaseCollection">KnowledgeBaseCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionList">DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.property.filterInput">FilterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.property.stateInput">StateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.property.state">State</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.property.filter"></a>

```csharp
public DataOciGenerativeAiAgentKnowledgeBasesFilterList Filter { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterList">DataOciGenerativeAiAgentKnowledgeBasesFilterList</a>

---

##### `KnowledgeBaseCollection`<sup>Required</sup> <a name="KnowledgeBaseCollection" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.property.knowledgeBaseCollection"></a>

```csharp
public DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionList KnowledgeBaseCollection { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionList">DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionList</a>

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.property.filterInput"></a>

```csharp
public object FilterInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.property.stateInput"></a>

```csharp
public string StateInput { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciGenerativeAiAgentKnowledgeBasesConfig <a name="DataOciGenerativeAiAgentKnowledgeBasesConfig" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciGenerativeAiAgentKnowledgeBasesConfig {
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
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_agent_knowledge_bases#compartment_id DataOciGenerativeAiAgentKnowledgeBases#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_agent_knowledge_bases#display_name DataOciGenerativeAiAgentKnowledgeBases#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesConfig.property.filter">Filter</a></code> | <code>object</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_agent_knowledge_bases#id DataOciGenerativeAiAgentKnowledgeBases#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesConfig.property.state">State</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_agent_knowledge_bases#state DataOciGenerativeAiAgentKnowledgeBases#state}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CompartmentId`<sup>Optional</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_agent_knowledge_bases#compartment_id DataOciGenerativeAiAgentKnowledgeBases#compartment_id}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_agent_knowledge_bases#display_name DataOciGenerativeAiAgentKnowledgeBases#display_name}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesConfig.property.filter"></a>

```csharp
public object Filter { get; set; }
```

- *Type:* object

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_agent_knowledge_bases#filter DataOciGenerativeAiAgentKnowledgeBases#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_agent_knowledge_bases#id DataOciGenerativeAiAgentKnowledgeBases#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `State`<sup>Optional</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesConfig.property.state"></a>

```csharp
public string State { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_agent_knowledge_bases#state DataOciGenerativeAiAgentKnowledgeBases#state}.

---

### DataOciGenerativeAiAgentKnowledgeBasesFilter <a name="DataOciGenerativeAiAgentKnowledgeBasesFilter" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciGenerativeAiAgentKnowledgeBasesFilter {
    string Name,
    string[] Values,
    object Regex = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilter.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_agent_knowledge_bases#name DataOciGenerativeAiAgentKnowledgeBases#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilter.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_agent_knowledge_bases#values DataOciGenerativeAiAgentKnowledgeBases#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilter.property.regex">Regex</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_agent_knowledge_bases#regex DataOciGenerativeAiAgentKnowledgeBases#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilter.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_agent_knowledge_bases#name DataOciGenerativeAiAgentKnowledgeBases#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilter.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_agent_knowledge_bases#values DataOciGenerativeAiAgentKnowledgeBases#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilter.property.regex"></a>

```csharp
public object Regex { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_agent_knowledge_bases#regex DataOciGenerativeAiAgentKnowledgeBases#regex}.

---

### DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollection <a name="DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollection" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollection.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollection {

};
```


### DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItems <a name="DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItems.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItems {

};
```


### DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfig <a name="DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfig" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfig {

};
```


### DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnection <a name="DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnection" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnection.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnection {

};
```


### DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctions <a name="DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctions" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctions {

};
```


### DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexes <a name="DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexes" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexes"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexes.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexes {

};
```


### DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchema <a name="DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchema" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchema"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchema.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchema {

};
```


### DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetail <a name="DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetail" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetail"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetail.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetail {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciGenerativeAiAgentKnowledgeBasesFilterList <a name="DataOciGenerativeAiAgentKnowledgeBasesFilterList" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciGenerativeAiAgentKnowledgeBasesFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterList.get"></a>

```csharp
private DataOciGenerativeAiAgentKnowledgeBasesFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciGenerativeAiAgentKnowledgeBasesFilterOutputReference <a name="DataOciGenerativeAiAgentKnowledgeBasesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciGenerativeAiAgentKnowledgeBasesFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterOutputReference.resetRegex"></a>

```csharp
private void ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterOutputReference.property.regex">Regex</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterOutputReference.property.regexInput"></a>

```csharp
public object RegexInput { get; }
```

- *Type:* object

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterOutputReference.property.regex"></a>

```csharp
public object Regex { get; }
```

- *Type:* object

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionList <a name="DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionList" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionList.get"></a>

```csharp
private DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionOutputReference <a name="DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionOutputReference.property.connectionId">ConnectionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionOutputReference.property.connectionType">ConnectionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnection">DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ConnectionId`<sup>Required</sup> <a name="ConnectionId" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionOutputReference.property.connectionId"></a>

```csharp
public string ConnectionId { get; }
```

- *Type:* string

---

##### `ConnectionType`<sup>Required</sup> <a name="ConnectionType" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionOutputReference.property.connectionType"></a>

```csharp
public string ConnectionType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionOutputReference.property.internalValue"></a>

```csharp
public DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnection InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnection">DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnection</a>

---


### DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsList <a name="DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsList" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsList.get"></a>

```csharp
private DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsOutputReference <a name="DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctions">DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsOutputReference.property.internalValue"></a>

```csharp
public DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctions InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctions">DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctions</a>

---


### DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesList <a name="DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesList" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesList.get"></a>

```csharp
private DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesOutputReference <a name="DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesOutputReference.property.schema">Schema</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaList">DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexes">DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Schema`<sup>Required</sup> <a name="Schema" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesOutputReference.property.schema"></a>

```csharp
public DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaList Schema { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaList">DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesOutputReference.property.internalValue"></a>

```csharp
public DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexes InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexes">DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexes</a>

---


### DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaList <a name="DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaList" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaList.get"></a>

```csharp
private DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaOutputReference <a name="DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaOutputReference" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaOutputReference.property.bodyKey">BodyKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaOutputReference.property.embeddingBodyKey">EmbeddingBodyKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaOutputReference.property.titleKey">TitleKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaOutputReference.property.urlKey">UrlKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchema">DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchema</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BodyKey`<sup>Required</sup> <a name="BodyKey" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaOutputReference.property.bodyKey"></a>

```csharp
public string BodyKey { get; }
```

- *Type:* string

---

##### `EmbeddingBodyKey`<sup>Required</sup> <a name="EmbeddingBodyKey" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaOutputReference.property.embeddingBodyKey"></a>

```csharp
public string EmbeddingBodyKey { get; }
```

- *Type:* string

---

##### `TitleKey`<sup>Required</sup> <a name="TitleKey" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaOutputReference.property.titleKey"></a>

```csharp
public string TitleKey { get; }
```

- *Type:* string

---

##### `UrlKey`<sup>Required</sup> <a name="UrlKey" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaOutputReference.property.urlKey"></a>

```csharp
public string UrlKey { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaOutputReference.property.internalValue"></a>

```csharp
public DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchema InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchema">DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchema</a>

---


### DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigList <a name="DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigList" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigList.get"></a>

```csharp
private DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigOutputReference <a name="DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigOutputReference.property.clusterId">ClusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigOutputReference.property.databaseConnection">DatabaseConnection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionList">DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigOutputReference.property.databaseFunctions">DatabaseFunctions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsList">DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigOutputReference.property.indexConfigType">IndexConfigType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigOutputReference.property.indexes">Indexes</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesList">DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigOutputReference.property.secretDetail">SecretDetail</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailList">DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigOutputReference.property.shouldEnableHybridSearch">ShouldEnableHybridSearch</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfig">DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ClusterId`<sup>Required</sup> <a name="ClusterId" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigOutputReference.property.clusterId"></a>

```csharp
public string ClusterId { get; }
```

- *Type:* string

---

##### `DatabaseConnection`<sup>Required</sup> <a name="DatabaseConnection" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigOutputReference.property.databaseConnection"></a>

```csharp
public DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionList DatabaseConnection { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionList">DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionList</a>

---

##### `DatabaseFunctions`<sup>Required</sup> <a name="DatabaseFunctions" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigOutputReference.property.databaseFunctions"></a>

```csharp
public DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsList DatabaseFunctions { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsList">DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsList</a>

---

##### `IndexConfigType`<sup>Required</sup> <a name="IndexConfigType" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigOutputReference.property.indexConfigType"></a>

```csharp
public string IndexConfigType { get; }
```

- *Type:* string

---

##### `Indexes`<sup>Required</sup> <a name="Indexes" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigOutputReference.property.indexes"></a>

```csharp
public DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesList Indexes { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesList">DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesList</a>

---

##### `SecretDetail`<sup>Required</sup> <a name="SecretDetail" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigOutputReference.property.secretDetail"></a>

```csharp
public DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailList SecretDetail { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailList">DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailList</a>

---

##### `ShouldEnableHybridSearch`<sup>Required</sup> <a name="ShouldEnableHybridSearch" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigOutputReference.property.shouldEnableHybridSearch"></a>

```csharp
public IResolvable ShouldEnableHybridSearch { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigOutputReference.property.internalValue"></a>

```csharp
public DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfig InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfig">DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfig</a>

---


### DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailList <a name="DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailList" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailList.get"></a>

```csharp
private DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailOutputReference <a name="DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailOutputReference" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailOutputReference.property.clientId">ClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailOutputReference.property.idcsUrl">IdcsUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailOutputReference.property.scopeUrl">ScopeUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailOutputReference.property.vaultSecretId">VaultSecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetail">DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetail</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailOutputReference.property.clientId"></a>

```csharp
public string ClientId { get; }
```

- *Type:* string

---

##### `IdcsUrl`<sup>Required</sup> <a name="IdcsUrl" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailOutputReference.property.idcsUrl"></a>

```csharp
public string IdcsUrl { get; }
```

- *Type:* string

---

##### `ScopeUrl`<sup>Required</sup> <a name="ScopeUrl" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailOutputReference.property.scopeUrl"></a>

```csharp
public string ScopeUrl { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `VaultSecretId`<sup>Required</sup> <a name="VaultSecretId" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailOutputReference.property.vaultSecretId"></a>

```csharp
public string VaultSecretId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailOutputReference.property.internalValue"></a>

```csharp
public DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetail InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetail">DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetail</a>

---


### DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsList <a name="DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsList.get"></a>

```csharp
private DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference <a name="DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.property.definedTags">DefinedTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.property.freeformTags">FreeformTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.property.indexConfig">IndexConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigList">DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.property.lifecycleDetails">LifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.property.systemTags">SystemTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.property.timeUpdated">TimeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItems">DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.property.definedTags"></a>

```csharp
public StringMap DefinedTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.property.freeformTags"></a>

```csharp
public StringMap FreeformTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IndexConfig`<sup>Required</sup> <a name="IndexConfig" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.property.indexConfig"></a>

```csharp
public DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigList IndexConfig { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigList">DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigList</a>

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.property.lifecycleDetails"></a>

```csharp
public string LifecycleDetails { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.property.systemTags"></a>

```csharp
public StringMap SystemTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.property.timeUpdated"></a>

```csharp
public string TimeUpdated { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.property.internalValue"></a>

```csharp
public DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItems InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItems">DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItems</a>

---


### DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionList <a name="DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionList" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionList.get"></a>

```csharp
private DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionOutputReference <a name="DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsList">DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollection">DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionOutputReference.property.items"></a>

```csharp
public DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsList Items { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsList">DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionOutputReference.property.internalValue"></a>

```csharp
public DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollection InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollection">DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollection</a>

---



