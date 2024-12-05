# `dataOciAiLanguageModel` Submodule <a name="`dataOciAiLanguageModel` Submodule" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciAiLanguageModel <a name="DataOciAiLanguageModel" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModel"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_language_model oci_ai_language_model}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModel.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciAiLanguageModel(Construct Scope, string Id, DataOciAiLanguageModelConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModel.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModel.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModel.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelConfig">DataOciAiLanguageModelConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModel.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModel.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModel.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelConfig">DataOciAiLanguageModelConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModel.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModel.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModel.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModel.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModel.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModel.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModel.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModel.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModel.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModel.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModel.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModel.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModel.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModel.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModel.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModel.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModel.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModel.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModel.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModel.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModel.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModel.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModel.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModel.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModel.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModel.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModel.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModel.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModel.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModel.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModel.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModel.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModel.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModel.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModel.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModel.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModel.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModel.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModel.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModel.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModel.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModel.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModel.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModel.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModel.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModel.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModel.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModel.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModel.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModel.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModel.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciAiLanguageModel resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModel.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciAiLanguageModel.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModel.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModel.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciAiLanguageModel.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModel.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModel.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciAiLanguageModel.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModel.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModel.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciAiLanguageModel.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciAiLanguageModel resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModel.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModel.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciAiLanguageModel to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModel.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciAiLanguageModel that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_language_model#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModel.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciAiLanguageModel to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModel.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModel.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModel.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModel.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModel.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModel.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModel.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModel.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModel.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModel.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModel.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModel.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModel.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModel.property.definedTags">DefinedTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModel.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModel.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModel.property.evaluationResults">EvaluationResults</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsList">DataOciAiLanguageModelEvaluationResultsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModel.property.freeformTags">FreeformTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModel.property.lifecycleDetails">LifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModel.property.modelDetails">ModelDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelModelDetailsList">DataOciAiLanguageModelModelDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModel.property.projectId">ProjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModel.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModel.property.systemTags">SystemTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModel.property.testStrategy">TestStrategy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyList">DataOciAiLanguageModelTestStrategyList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModel.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModel.property.timeUpdated">TimeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModel.property.trainingDataset">TrainingDataset</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTrainingDatasetList">DataOciAiLanguageModelTrainingDatasetList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModel.property.version">Version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModel.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModel.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModel.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModel.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModel.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModel.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModel.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModel.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModel.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModel.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModel.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModel.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModel.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModel.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModel.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModel.property.definedTags"></a>

```csharp
public StringMap DefinedTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModel.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModel.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `EvaluationResults`<sup>Required</sup> <a name="EvaluationResults" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModel.property.evaluationResults"></a>

```csharp
public DataOciAiLanguageModelEvaluationResultsList EvaluationResults { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsList">DataOciAiLanguageModelEvaluationResultsList</a>

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModel.property.freeformTags"></a>

```csharp
public StringMap FreeformTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModel.property.lifecycleDetails"></a>

```csharp
public string LifecycleDetails { get; }
```

- *Type:* string

---

##### `ModelDetails`<sup>Required</sup> <a name="ModelDetails" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModel.property.modelDetails"></a>

```csharp
public DataOciAiLanguageModelModelDetailsList ModelDetails { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelModelDetailsList">DataOciAiLanguageModelModelDetailsList</a>

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModel.property.projectId"></a>

```csharp
public string ProjectId { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModel.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModel.property.systemTags"></a>

```csharp
public StringMap SystemTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `TestStrategy`<sup>Required</sup> <a name="TestStrategy" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModel.property.testStrategy"></a>

```csharp
public DataOciAiLanguageModelTestStrategyList TestStrategy { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyList">DataOciAiLanguageModelTestStrategyList</a>

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModel.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModel.property.timeUpdated"></a>

```csharp
public string TimeUpdated { get; }
```

- *Type:* string

---

##### `TrainingDataset`<sup>Required</sup> <a name="TrainingDataset" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModel.property.trainingDataset"></a>

```csharp
public DataOciAiLanguageModelTrainingDatasetList TrainingDataset { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTrainingDatasetList">DataOciAiLanguageModelTrainingDatasetList</a>

---

##### `Version`<sup>Required</sup> <a name="Version" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModel.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModel.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModel.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModel.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModel.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciAiLanguageModelConfig <a name="DataOciAiLanguageModelConfig" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciAiLanguageModelConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Id
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_language_model#id DataOciAiLanguageModel#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_language_model#id DataOciAiLanguageModel#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciAiLanguageModelEvaluationResults <a name="DataOciAiLanguageModelEvaluationResults" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResults"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResults.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciAiLanguageModelEvaluationResults {

};
```


### DataOciAiLanguageModelEvaluationResultsClassMetrics <a name="DataOciAiLanguageModelEvaluationResultsClassMetrics" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsClassMetrics"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsClassMetrics.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciAiLanguageModelEvaluationResultsClassMetrics {

};
```


### DataOciAiLanguageModelEvaluationResultsEntityMetrics <a name="DataOciAiLanguageModelEvaluationResultsEntityMetrics" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsEntityMetrics"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsEntityMetrics.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciAiLanguageModelEvaluationResultsEntityMetrics {

};
```


### DataOciAiLanguageModelEvaluationResultsMetrics <a name="DataOciAiLanguageModelEvaluationResultsMetrics" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsMetrics"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsMetrics.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciAiLanguageModelEvaluationResultsMetrics {

};
```


### DataOciAiLanguageModelModelDetails <a name="DataOciAiLanguageModelModelDetails" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelModelDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelModelDetails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciAiLanguageModelModelDetails {

};
```


### DataOciAiLanguageModelModelDetailsClassificationMode <a name="DataOciAiLanguageModelModelDetailsClassificationMode" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelModelDetailsClassificationMode"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelModelDetailsClassificationMode.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciAiLanguageModelModelDetailsClassificationMode {

};
```


### DataOciAiLanguageModelTestStrategy <a name="DataOciAiLanguageModelTestStrategy" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciAiLanguageModelTestStrategy {

};
```


### DataOciAiLanguageModelTestStrategyTestingDataset <a name="DataOciAiLanguageModelTestStrategyTestingDataset" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyTestingDataset"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyTestingDataset.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciAiLanguageModelTestStrategyTestingDataset {

};
```


### DataOciAiLanguageModelTestStrategyTestingDatasetLocationDetails <a name="DataOciAiLanguageModelTestStrategyTestingDatasetLocationDetails" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyTestingDatasetLocationDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyTestingDatasetLocationDetails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciAiLanguageModelTestStrategyTestingDatasetLocationDetails {

};
```


### DataOciAiLanguageModelTestStrategyValidationDataset <a name="DataOciAiLanguageModelTestStrategyValidationDataset" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyValidationDataset"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyValidationDataset.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciAiLanguageModelTestStrategyValidationDataset {

};
```


### DataOciAiLanguageModelTestStrategyValidationDatasetLocationDetails <a name="DataOciAiLanguageModelTestStrategyValidationDatasetLocationDetails" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyValidationDatasetLocationDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyValidationDatasetLocationDetails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciAiLanguageModelTestStrategyValidationDatasetLocationDetails {

};
```


### DataOciAiLanguageModelTrainingDataset <a name="DataOciAiLanguageModelTrainingDataset" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTrainingDataset"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTrainingDataset.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciAiLanguageModelTrainingDataset {

};
```


### DataOciAiLanguageModelTrainingDatasetLocationDetails <a name="DataOciAiLanguageModelTrainingDatasetLocationDetails" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTrainingDatasetLocationDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTrainingDatasetLocationDetails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciAiLanguageModelTrainingDatasetLocationDetails {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciAiLanguageModelEvaluationResultsClassMetricsList <a name="DataOciAiLanguageModelEvaluationResultsClassMetricsList" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsClassMetricsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsClassMetricsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciAiLanguageModelEvaluationResultsClassMetricsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsClassMetricsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsClassMetricsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsClassMetricsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsClassMetricsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsClassMetricsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsClassMetricsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsClassMetricsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsClassMetricsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsClassMetricsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsClassMetricsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsClassMetricsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsClassMetricsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsClassMetricsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsClassMetricsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsClassMetricsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsClassMetricsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsClassMetricsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsClassMetricsList.get"></a>

```csharp
private DataOciAiLanguageModelEvaluationResultsClassMetricsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsClassMetricsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsClassMetricsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsClassMetricsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsClassMetricsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsClassMetricsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciAiLanguageModelEvaluationResultsClassMetricsOutputReference <a name="DataOciAiLanguageModelEvaluationResultsClassMetricsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsClassMetricsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsClassMetricsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciAiLanguageModelEvaluationResultsClassMetricsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsClassMetricsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsClassMetricsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsClassMetricsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsClassMetricsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsClassMetricsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsClassMetricsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsClassMetricsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsClassMetricsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsClassMetricsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsClassMetricsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsClassMetricsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsClassMetricsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsClassMetricsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsClassMetricsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsClassMetricsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsClassMetricsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsClassMetricsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsClassMetricsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsClassMetricsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsClassMetricsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsClassMetricsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsClassMetricsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsClassMetricsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsClassMetricsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsClassMetricsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsClassMetricsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsClassMetricsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsClassMetricsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsClassMetricsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsClassMetricsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsClassMetricsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsClassMetricsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsClassMetricsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsClassMetricsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsClassMetricsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsClassMetricsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsClassMetricsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsClassMetricsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsClassMetricsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsClassMetricsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsClassMetricsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsClassMetricsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsClassMetricsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsClassMetricsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsClassMetricsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsClassMetricsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsClassMetricsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsClassMetricsOutputReference.property.f1">F1</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsClassMetricsOutputReference.property.label">Label</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsClassMetricsOutputReference.property.precision">Precision</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsClassMetricsOutputReference.property.recall">Recall</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsClassMetricsOutputReference.property.support">Support</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsClassMetricsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsClassMetrics">DataOciAiLanguageModelEvaluationResultsClassMetrics</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsClassMetricsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsClassMetricsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `F1`<sup>Required</sup> <a name="F1" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsClassMetricsOutputReference.property.f1"></a>

```csharp
public double F1 { get; }
```

- *Type:* double

---

##### `Label`<sup>Required</sup> <a name="Label" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsClassMetricsOutputReference.property.label"></a>

```csharp
public string Label { get; }
```

- *Type:* string

---

##### `Precision`<sup>Required</sup> <a name="Precision" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsClassMetricsOutputReference.property.precision"></a>

```csharp
public double Precision { get; }
```

- *Type:* double

---

##### `Recall`<sup>Required</sup> <a name="Recall" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsClassMetricsOutputReference.property.recall"></a>

```csharp
public double Recall { get; }
```

- *Type:* double

---

##### `Support`<sup>Required</sup> <a name="Support" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsClassMetricsOutputReference.property.support"></a>

```csharp
public double Support { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsClassMetricsOutputReference.property.internalValue"></a>

```csharp
public DataOciAiLanguageModelEvaluationResultsClassMetrics InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsClassMetrics">DataOciAiLanguageModelEvaluationResultsClassMetrics</a>

---


### DataOciAiLanguageModelEvaluationResultsEntityMetricsList <a name="DataOciAiLanguageModelEvaluationResultsEntityMetricsList" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsEntityMetricsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsEntityMetricsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciAiLanguageModelEvaluationResultsEntityMetricsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsEntityMetricsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsEntityMetricsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsEntityMetricsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsEntityMetricsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsEntityMetricsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsEntityMetricsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsEntityMetricsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsEntityMetricsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsEntityMetricsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsEntityMetricsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsEntityMetricsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsEntityMetricsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsEntityMetricsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsEntityMetricsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsEntityMetricsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsEntityMetricsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsEntityMetricsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsEntityMetricsList.get"></a>

```csharp
private DataOciAiLanguageModelEvaluationResultsEntityMetricsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsEntityMetricsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsEntityMetricsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsEntityMetricsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsEntityMetricsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsEntityMetricsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciAiLanguageModelEvaluationResultsEntityMetricsOutputReference <a name="DataOciAiLanguageModelEvaluationResultsEntityMetricsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsEntityMetricsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsEntityMetricsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciAiLanguageModelEvaluationResultsEntityMetricsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsEntityMetricsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsEntityMetricsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsEntityMetricsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsEntityMetricsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsEntityMetricsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsEntityMetricsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsEntityMetricsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsEntityMetricsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsEntityMetricsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsEntityMetricsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsEntityMetricsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsEntityMetricsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsEntityMetricsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsEntityMetricsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsEntityMetricsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsEntityMetricsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsEntityMetricsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsEntityMetricsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsEntityMetricsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsEntityMetricsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsEntityMetricsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsEntityMetricsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsEntityMetricsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsEntityMetricsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsEntityMetricsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsEntityMetricsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsEntityMetricsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsEntityMetricsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsEntityMetricsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsEntityMetricsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsEntityMetricsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsEntityMetricsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsEntityMetricsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsEntityMetricsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsEntityMetricsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsEntityMetricsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsEntityMetricsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsEntityMetricsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsEntityMetricsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsEntityMetricsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsEntityMetricsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsEntityMetricsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsEntityMetricsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsEntityMetricsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsEntityMetricsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsEntityMetricsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsEntityMetricsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsEntityMetricsOutputReference.property.f1">F1</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsEntityMetricsOutputReference.property.label">Label</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsEntityMetricsOutputReference.property.precision">Precision</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsEntityMetricsOutputReference.property.recall">Recall</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsEntityMetricsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsEntityMetrics">DataOciAiLanguageModelEvaluationResultsEntityMetrics</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsEntityMetricsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsEntityMetricsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `F1`<sup>Required</sup> <a name="F1" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsEntityMetricsOutputReference.property.f1"></a>

```csharp
public double F1 { get; }
```

- *Type:* double

---

##### `Label`<sup>Required</sup> <a name="Label" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsEntityMetricsOutputReference.property.label"></a>

```csharp
public string Label { get; }
```

- *Type:* string

---

##### `Precision`<sup>Required</sup> <a name="Precision" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsEntityMetricsOutputReference.property.precision"></a>

```csharp
public double Precision { get; }
```

- *Type:* double

---

##### `Recall`<sup>Required</sup> <a name="Recall" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsEntityMetricsOutputReference.property.recall"></a>

```csharp
public double Recall { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsEntityMetricsOutputReference.property.internalValue"></a>

```csharp
public DataOciAiLanguageModelEvaluationResultsEntityMetrics InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsEntityMetrics">DataOciAiLanguageModelEvaluationResultsEntityMetrics</a>

---


### DataOciAiLanguageModelEvaluationResultsList <a name="DataOciAiLanguageModelEvaluationResultsList" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciAiLanguageModelEvaluationResultsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsList.get"></a>

```csharp
private DataOciAiLanguageModelEvaluationResultsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciAiLanguageModelEvaluationResultsMetricsList <a name="DataOciAiLanguageModelEvaluationResultsMetricsList" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsMetricsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsMetricsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciAiLanguageModelEvaluationResultsMetricsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsMetricsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsMetricsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsMetricsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsMetricsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsMetricsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsMetricsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsMetricsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsMetricsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsMetricsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsMetricsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsMetricsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsMetricsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsMetricsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsMetricsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsMetricsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsMetricsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsMetricsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsMetricsList.get"></a>

```csharp
private DataOciAiLanguageModelEvaluationResultsMetricsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsMetricsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsMetricsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsMetricsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsMetricsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsMetricsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciAiLanguageModelEvaluationResultsMetricsOutputReference <a name="DataOciAiLanguageModelEvaluationResultsMetricsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsMetricsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsMetricsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciAiLanguageModelEvaluationResultsMetricsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsMetricsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsMetricsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsMetricsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsMetricsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsMetricsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsMetricsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsMetricsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsMetricsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsMetricsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsMetricsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsMetricsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsMetricsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsMetricsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsMetricsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsMetricsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsMetricsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsMetricsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsMetricsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsMetricsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsMetricsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsMetricsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsMetricsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsMetricsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsMetricsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsMetricsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsMetricsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsMetricsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsMetricsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsMetricsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsMetricsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsMetricsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsMetricsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsMetricsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsMetricsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsMetricsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsMetricsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsMetricsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsMetricsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsMetricsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsMetricsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsMetricsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsMetricsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsMetricsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsMetricsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsMetricsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsMetricsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsMetricsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsMetricsOutputReference.property.accuracy">Accuracy</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsMetricsOutputReference.property.macroF1">MacroF1</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsMetricsOutputReference.property.macroPrecision">MacroPrecision</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsMetricsOutputReference.property.macroRecall">MacroRecall</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsMetricsOutputReference.property.microF1">MicroF1</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsMetricsOutputReference.property.microPrecision">MicroPrecision</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsMetricsOutputReference.property.microRecall">MicroRecall</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsMetricsOutputReference.property.weightedF1">WeightedF1</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsMetricsOutputReference.property.weightedPrecision">WeightedPrecision</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsMetricsOutputReference.property.weightedRecall">WeightedRecall</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsMetricsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsMetrics">DataOciAiLanguageModelEvaluationResultsMetrics</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsMetricsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsMetricsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Accuracy`<sup>Required</sup> <a name="Accuracy" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsMetricsOutputReference.property.accuracy"></a>

```csharp
public double Accuracy { get; }
```

- *Type:* double

---

##### `MacroF1`<sup>Required</sup> <a name="MacroF1" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsMetricsOutputReference.property.macroF1"></a>

```csharp
public double MacroF1 { get; }
```

- *Type:* double

---

##### `MacroPrecision`<sup>Required</sup> <a name="MacroPrecision" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsMetricsOutputReference.property.macroPrecision"></a>

```csharp
public double MacroPrecision { get; }
```

- *Type:* double

---

##### `MacroRecall`<sup>Required</sup> <a name="MacroRecall" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsMetricsOutputReference.property.macroRecall"></a>

```csharp
public double MacroRecall { get; }
```

- *Type:* double

---

##### `MicroF1`<sup>Required</sup> <a name="MicroF1" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsMetricsOutputReference.property.microF1"></a>

```csharp
public double MicroF1 { get; }
```

- *Type:* double

---

##### `MicroPrecision`<sup>Required</sup> <a name="MicroPrecision" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsMetricsOutputReference.property.microPrecision"></a>

```csharp
public double MicroPrecision { get; }
```

- *Type:* double

---

##### `MicroRecall`<sup>Required</sup> <a name="MicroRecall" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsMetricsOutputReference.property.microRecall"></a>

```csharp
public double MicroRecall { get; }
```

- *Type:* double

---

##### `WeightedF1`<sup>Required</sup> <a name="WeightedF1" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsMetricsOutputReference.property.weightedF1"></a>

```csharp
public double WeightedF1 { get; }
```

- *Type:* double

---

##### `WeightedPrecision`<sup>Required</sup> <a name="WeightedPrecision" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsMetricsOutputReference.property.weightedPrecision"></a>

```csharp
public double WeightedPrecision { get; }
```

- *Type:* double

---

##### `WeightedRecall`<sup>Required</sup> <a name="WeightedRecall" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsMetricsOutputReference.property.weightedRecall"></a>

```csharp
public double WeightedRecall { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsMetricsOutputReference.property.internalValue"></a>

```csharp
public DataOciAiLanguageModelEvaluationResultsMetrics InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsMetrics">DataOciAiLanguageModelEvaluationResultsMetrics</a>

---


### DataOciAiLanguageModelEvaluationResultsOutputReference <a name="DataOciAiLanguageModelEvaluationResultsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciAiLanguageModelEvaluationResultsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsOutputReference.property.classMetrics">ClassMetrics</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsClassMetricsList">DataOciAiLanguageModelEvaluationResultsClassMetricsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsOutputReference.property.confusionMatrix">ConfusionMatrix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsOutputReference.property.entityMetrics">EntityMetrics</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsEntityMetricsList">DataOciAiLanguageModelEvaluationResultsEntityMetricsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsOutputReference.property.labels">Labels</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsOutputReference.property.metrics">Metrics</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsMetricsList">DataOciAiLanguageModelEvaluationResultsMetricsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsOutputReference.property.modelType">ModelType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResults">DataOciAiLanguageModelEvaluationResults</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ClassMetrics`<sup>Required</sup> <a name="ClassMetrics" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsOutputReference.property.classMetrics"></a>

```csharp
public DataOciAiLanguageModelEvaluationResultsClassMetricsList ClassMetrics { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsClassMetricsList">DataOciAiLanguageModelEvaluationResultsClassMetricsList</a>

---

##### `ConfusionMatrix`<sup>Required</sup> <a name="ConfusionMatrix" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsOutputReference.property.confusionMatrix"></a>

```csharp
public string ConfusionMatrix { get; }
```

- *Type:* string

---

##### `EntityMetrics`<sup>Required</sup> <a name="EntityMetrics" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsOutputReference.property.entityMetrics"></a>

```csharp
public DataOciAiLanguageModelEvaluationResultsEntityMetricsList EntityMetrics { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsEntityMetricsList">DataOciAiLanguageModelEvaluationResultsEntityMetricsList</a>

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsOutputReference.property.labels"></a>

```csharp
public string[] Labels { get; }
```

- *Type:* string[]

---

##### `Metrics`<sup>Required</sup> <a name="Metrics" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsOutputReference.property.metrics"></a>

```csharp
public DataOciAiLanguageModelEvaluationResultsMetricsList Metrics { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsMetricsList">DataOciAiLanguageModelEvaluationResultsMetricsList</a>

---

##### `ModelType`<sup>Required</sup> <a name="ModelType" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsOutputReference.property.modelType"></a>

```csharp
public string ModelType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResultsOutputReference.property.internalValue"></a>

```csharp
public DataOciAiLanguageModelEvaluationResults InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelEvaluationResults">DataOciAiLanguageModelEvaluationResults</a>

---


### DataOciAiLanguageModelModelDetailsClassificationModeList <a name="DataOciAiLanguageModelModelDetailsClassificationModeList" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelModelDetailsClassificationModeList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelModelDetailsClassificationModeList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciAiLanguageModelModelDetailsClassificationModeList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelModelDetailsClassificationModeList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelModelDetailsClassificationModeList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelModelDetailsClassificationModeList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelModelDetailsClassificationModeList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelModelDetailsClassificationModeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelModelDetailsClassificationModeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelModelDetailsClassificationModeList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelModelDetailsClassificationModeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelModelDetailsClassificationModeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelModelDetailsClassificationModeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelModelDetailsClassificationModeList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelModelDetailsClassificationModeList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelModelDetailsClassificationModeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelModelDetailsClassificationModeList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelModelDetailsClassificationModeList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelModelDetailsClassificationModeList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelModelDetailsClassificationModeList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelModelDetailsClassificationModeList.get"></a>

```csharp
private DataOciAiLanguageModelModelDetailsClassificationModeOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelModelDetailsClassificationModeList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelModelDetailsClassificationModeList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelModelDetailsClassificationModeList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelModelDetailsClassificationModeList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelModelDetailsClassificationModeList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciAiLanguageModelModelDetailsClassificationModeOutputReference <a name="DataOciAiLanguageModelModelDetailsClassificationModeOutputReference" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelModelDetailsClassificationModeOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelModelDetailsClassificationModeOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciAiLanguageModelModelDetailsClassificationModeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelModelDetailsClassificationModeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelModelDetailsClassificationModeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelModelDetailsClassificationModeOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelModelDetailsClassificationModeOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelModelDetailsClassificationModeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelModelDetailsClassificationModeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelModelDetailsClassificationModeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelModelDetailsClassificationModeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelModelDetailsClassificationModeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelModelDetailsClassificationModeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelModelDetailsClassificationModeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelModelDetailsClassificationModeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelModelDetailsClassificationModeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelModelDetailsClassificationModeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelModelDetailsClassificationModeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelModelDetailsClassificationModeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelModelDetailsClassificationModeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelModelDetailsClassificationModeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelModelDetailsClassificationModeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelModelDetailsClassificationModeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelModelDetailsClassificationModeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelModelDetailsClassificationModeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelModelDetailsClassificationModeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelModelDetailsClassificationModeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelModelDetailsClassificationModeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelModelDetailsClassificationModeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelModelDetailsClassificationModeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelModelDetailsClassificationModeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelModelDetailsClassificationModeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelModelDetailsClassificationModeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelModelDetailsClassificationModeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelModelDetailsClassificationModeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelModelDetailsClassificationModeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelModelDetailsClassificationModeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelModelDetailsClassificationModeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelModelDetailsClassificationModeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelModelDetailsClassificationModeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelModelDetailsClassificationModeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelModelDetailsClassificationModeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelModelDetailsClassificationModeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelModelDetailsClassificationModeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelModelDetailsClassificationModeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelModelDetailsClassificationModeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelModelDetailsClassificationModeOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelModelDetailsClassificationModeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelModelDetailsClassificationModeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelModelDetailsClassificationModeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelModelDetailsClassificationModeOutputReference.property.classificationMode">ClassificationMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelModelDetailsClassificationModeOutputReference.property.version">Version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelModelDetailsClassificationModeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelModelDetailsClassificationMode">DataOciAiLanguageModelModelDetailsClassificationMode</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelModelDetailsClassificationModeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelModelDetailsClassificationModeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ClassificationMode`<sup>Required</sup> <a name="ClassificationMode" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelModelDetailsClassificationModeOutputReference.property.classificationMode"></a>

```csharp
public string ClassificationMode { get; }
```

- *Type:* string

---

##### `Version`<sup>Required</sup> <a name="Version" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelModelDetailsClassificationModeOutputReference.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelModelDetailsClassificationModeOutputReference.property.internalValue"></a>

```csharp
public DataOciAiLanguageModelModelDetailsClassificationMode InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelModelDetailsClassificationMode">DataOciAiLanguageModelModelDetailsClassificationMode</a>

---


### DataOciAiLanguageModelModelDetailsList <a name="DataOciAiLanguageModelModelDetailsList" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelModelDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelModelDetailsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciAiLanguageModelModelDetailsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelModelDetailsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelModelDetailsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelModelDetailsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelModelDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelModelDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelModelDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelModelDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelModelDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelModelDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelModelDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelModelDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelModelDetailsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelModelDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelModelDetailsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelModelDetailsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelModelDetailsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelModelDetailsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelModelDetailsList.get"></a>

```csharp
private DataOciAiLanguageModelModelDetailsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelModelDetailsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelModelDetailsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelModelDetailsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelModelDetailsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelModelDetailsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciAiLanguageModelModelDetailsOutputReference <a name="DataOciAiLanguageModelModelDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelModelDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelModelDetailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciAiLanguageModelModelDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelModelDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelModelDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelModelDetailsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelModelDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelModelDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelModelDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelModelDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelModelDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelModelDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelModelDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelModelDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelModelDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelModelDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelModelDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelModelDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelModelDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelModelDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelModelDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelModelDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelModelDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelModelDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelModelDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelModelDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelModelDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelModelDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelModelDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelModelDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelModelDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelModelDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelModelDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelModelDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelModelDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelModelDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelModelDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelModelDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelModelDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelModelDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelModelDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelModelDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelModelDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelModelDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelModelDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelModelDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelModelDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelModelDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelModelDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelModelDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelModelDetailsOutputReference.property.classificationMode">ClassificationMode</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelModelDetailsClassificationModeList">DataOciAiLanguageModelModelDetailsClassificationModeList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelModelDetailsOutputReference.property.languageCode">LanguageCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelModelDetailsOutputReference.property.modelType">ModelType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelModelDetailsOutputReference.property.version">Version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelModelDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelModelDetails">DataOciAiLanguageModelModelDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelModelDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelModelDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ClassificationMode`<sup>Required</sup> <a name="ClassificationMode" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelModelDetailsOutputReference.property.classificationMode"></a>

```csharp
public DataOciAiLanguageModelModelDetailsClassificationModeList ClassificationMode { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelModelDetailsClassificationModeList">DataOciAiLanguageModelModelDetailsClassificationModeList</a>

---

##### `LanguageCode`<sup>Required</sup> <a name="LanguageCode" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelModelDetailsOutputReference.property.languageCode"></a>

```csharp
public string LanguageCode { get; }
```

- *Type:* string

---

##### `ModelType`<sup>Required</sup> <a name="ModelType" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelModelDetailsOutputReference.property.modelType"></a>

```csharp
public string ModelType { get; }
```

- *Type:* string

---

##### `Version`<sup>Required</sup> <a name="Version" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelModelDetailsOutputReference.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelModelDetailsOutputReference.property.internalValue"></a>

```csharp
public DataOciAiLanguageModelModelDetails InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelModelDetails">DataOciAiLanguageModelModelDetails</a>

---


### DataOciAiLanguageModelTestStrategyList <a name="DataOciAiLanguageModelTestStrategyList" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciAiLanguageModelTestStrategyList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyList.get"></a>

```csharp
private DataOciAiLanguageModelTestStrategyOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciAiLanguageModelTestStrategyOutputReference <a name="DataOciAiLanguageModelTestStrategyOutputReference" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciAiLanguageModelTestStrategyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyOutputReference.property.strategyType">StrategyType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyOutputReference.property.testingDataset">TestingDataset</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyTestingDatasetList">DataOciAiLanguageModelTestStrategyTestingDatasetList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyOutputReference.property.validationDataset">ValidationDataset</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyValidationDatasetList">DataOciAiLanguageModelTestStrategyValidationDatasetList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategy">DataOciAiLanguageModelTestStrategy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `StrategyType`<sup>Required</sup> <a name="StrategyType" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyOutputReference.property.strategyType"></a>

```csharp
public string StrategyType { get; }
```

- *Type:* string

---

##### `TestingDataset`<sup>Required</sup> <a name="TestingDataset" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyOutputReference.property.testingDataset"></a>

```csharp
public DataOciAiLanguageModelTestStrategyTestingDatasetList TestingDataset { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyTestingDatasetList">DataOciAiLanguageModelTestStrategyTestingDatasetList</a>

---

##### `ValidationDataset`<sup>Required</sup> <a name="ValidationDataset" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyOutputReference.property.validationDataset"></a>

```csharp
public DataOciAiLanguageModelTestStrategyValidationDatasetList ValidationDataset { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyValidationDatasetList">DataOciAiLanguageModelTestStrategyValidationDatasetList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyOutputReference.property.internalValue"></a>

```csharp
public DataOciAiLanguageModelTestStrategy InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategy">DataOciAiLanguageModelTestStrategy</a>

---


### DataOciAiLanguageModelTestStrategyTestingDatasetList <a name="DataOciAiLanguageModelTestStrategyTestingDatasetList" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyTestingDatasetList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyTestingDatasetList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciAiLanguageModelTestStrategyTestingDatasetList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyTestingDatasetList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyTestingDatasetList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyTestingDatasetList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyTestingDatasetList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyTestingDatasetList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyTestingDatasetList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyTestingDatasetList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyTestingDatasetList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyTestingDatasetList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyTestingDatasetList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyTestingDatasetList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyTestingDatasetList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyTestingDatasetList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyTestingDatasetList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyTestingDatasetList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyTestingDatasetList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyTestingDatasetList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyTestingDatasetList.get"></a>

```csharp
private DataOciAiLanguageModelTestStrategyTestingDatasetOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyTestingDatasetList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyTestingDatasetList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyTestingDatasetList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyTestingDatasetList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyTestingDatasetList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciAiLanguageModelTestStrategyTestingDatasetLocationDetailsList <a name="DataOciAiLanguageModelTestStrategyTestingDatasetLocationDetailsList" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyTestingDatasetLocationDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyTestingDatasetLocationDetailsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciAiLanguageModelTestStrategyTestingDatasetLocationDetailsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyTestingDatasetLocationDetailsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyTestingDatasetLocationDetailsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyTestingDatasetLocationDetailsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyTestingDatasetLocationDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyTestingDatasetLocationDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyTestingDatasetLocationDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyTestingDatasetLocationDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyTestingDatasetLocationDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyTestingDatasetLocationDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyTestingDatasetLocationDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyTestingDatasetLocationDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyTestingDatasetLocationDetailsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyTestingDatasetLocationDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyTestingDatasetLocationDetailsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyTestingDatasetLocationDetailsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyTestingDatasetLocationDetailsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyTestingDatasetLocationDetailsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyTestingDatasetLocationDetailsList.get"></a>

```csharp
private DataOciAiLanguageModelTestStrategyTestingDatasetLocationDetailsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyTestingDatasetLocationDetailsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyTestingDatasetLocationDetailsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyTestingDatasetLocationDetailsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyTestingDatasetLocationDetailsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyTestingDatasetLocationDetailsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciAiLanguageModelTestStrategyTestingDatasetLocationDetailsOutputReference <a name="DataOciAiLanguageModelTestStrategyTestingDatasetLocationDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyTestingDatasetLocationDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyTestingDatasetLocationDetailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciAiLanguageModelTestStrategyTestingDatasetLocationDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyTestingDatasetLocationDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyTestingDatasetLocationDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyTestingDatasetLocationDetailsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyTestingDatasetLocationDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyTestingDatasetLocationDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyTestingDatasetLocationDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyTestingDatasetLocationDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyTestingDatasetLocationDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyTestingDatasetLocationDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyTestingDatasetLocationDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyTestingDatasetLocationDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyTestingDatasetLocationDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyTestingDatasetLocationDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyTestingDatasetLocationDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyTestingDatasetLocationDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyTestingDatasetLocationDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyTestingDatasetLocationDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyTestingDatasetLocationDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyTestingDatasetLocationDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyTestingDatasetLocationDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyTestingDatasetLocationDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyTestingDatasetLocationDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyTestingDatasetLocationDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyTestingDatasetLocationDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyTestingDatasetLocationDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyTestingDatasetLocationDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyTestingDatasetLocationDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyTestingDatasetLocationDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyTestingDatasetLocationDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyTestingDatasetLocationDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyTestingDatasetLocationDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyTestingDatasetLocationDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyTestingDatasetLocationDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyTestingDatasetLocationDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyTestingDatasetLocationDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyTestingDatasetLocationDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyTestingDatasetLocationDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyTestingDatasetLocationDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyTestingDatasetLocationDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyTestingDatasetLocationDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyTestingDatasetLocationDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyTestingDatasetLocationDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyTestingDatasetLocationDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyTestingDatasetLocationDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyTestingDatasetLocationDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyTestingDatasetLocationDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyTestingDatasetLocationDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyTestingDatasetLocationDetailsOutputReference.property.bucket">Bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyTestingDatasetLocationDetailsOutputReference.property.locationType">LocationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyTestingDatasetLocationDetailsOutputReference.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyTestingDatasetLocationDetailsOutputReference.property.objectNames">ObjectNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyTestingDatasetLocationDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyTestingDatasetLocationDetails">DataOciAiLanguageModelTestStrategyTestingDatasetLocationDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyTestingDatasetLocationDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyTestingDatasetLocationDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyTestingDatasetLocationDetailsOutputReference.property.bucket"></a>

```csharp
public string Bucket { get; }
```

- *Type:* string

---

##### `LocationType`<sup>Required</sup> <a name="LocationType" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyTestingDatasetLocationDetailsOutputReference.property.locationType"></a>

```csharp
public string LocationType { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyTestingDatasetLocationDetailsOutputReference.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `ObjectNames`<sup>Required</sup> <a name="ObjectNames" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyTestingDatasetLocationDetailsOutputReference.property.objectNames"></a>

```csharp
public string[] ObjectNames { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyTestingDatasetLocationDetailsOutputReference.property.internalValue"></a>

```csharp
public DataOciAiLanguageModelTestStrategyTestingDatasetLocationDetails InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyTestingDatasetLocationDetails">DataOciAiLanguageModelTestStrategyTestingDatasetLocationDetails</a>

---


### DataOciAiLanguageModelTestStrategyTestingDatasetOutputReference <a name="DataOciAiLanguageModelTestStrategyTestingDatasetOutputReference" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyTestingDatasetOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyTestingDatasetOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciAiLanguageModelTestStrategyTestingDatasetOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyTestingDatasetOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyTestingDatasetOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyTestingDatasetOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyTestingDatasetOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyTestingDatasetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyTestingDatasetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyTestingDatasetOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyTestingDatasetOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyTestingDatasetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyTestingDatasetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyTestingDatasetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyTestingDatasetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyTestingDatasetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyTestingDatasetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyTestingDatasetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyTestingDatasetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyTestingDatasetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyTestingDatasetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyTestingDatasetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyTestingDatasetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyTestingDatasetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyTestingDatasetOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyTestingDatasetOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyTestingDatasetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyTestingDatasetOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyTestingDatasetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyTestingDatasetOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyTestingDatasetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyTestingDatasetOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyTestingDatasetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyTestingDatasetOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyTestingDatasetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyTestingDatasetOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyTestingDatasetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyTestingDatasetOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyTestingDatasetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyTestingDatasetOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyTestingDatasetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyTestingDatasetOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyTestingDatasetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyTestingDatasetOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyTestingDatasetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyTestingDatasetOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyTestingDatasetOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyTestingDatasetOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyTestingDatasetOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyTestingDatasetOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyTestingDatasetOutputReference.property.datasetId">DatasetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyTestingDatasetOutputReference.property.datasetType">DatasetType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyTestingDatasetOutputReference.property.locationDetails">LocationDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyTestingDatasetLocationDetailsList">DataOciAiLanguageModelTestStrategyTestingDatasetLocationDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyTestingDatasetOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyTestingDataset">DataOciAiLanguageModelTestStrategyTestingDataset</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyTestingDatasetOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyTestingDatasetOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DatasetId`<sup>Required</sup> <a name="DatasetId" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyTestingDatasetOutputReference.property.datasetId"></a>

```csharp
public string DatasetId { get; }
```

- *Type:* string

---

##### `DatasetType`<sup>Required</sup> <a name="DatasetType" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyTestingDatasetOutputReference.property.datasetType"></a>

```csharp
public string DatasetType { get; }
```

- *Type:* string

---

##### `LocationDetails`<sup>Required</sup> <a name="LocationDetails" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyTestingDatasetOutputReference.property.locationDetails"></a>

```csharp
public DataOciAiLanguageModelTestStrategyTestingDatasetLocationDetailsList LocationDetails { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyTestingDatasetLocationDetailsList">DataOciAiLanguageModelTestStrategyTestingDatasetLocationDetailsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyTestingDatasetOutputReference.property.internalValue"></a>

```csharp
public DataOciAiLanguageModelTestStrategyTestingDataset InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyTestingDataset">DataOciAiLanguageModelTestStrategyTestingDataset</a>

---


### DataOciAiLanguageModelTestStrategyValidationDatasetList <a name="DataOciAiLanguageModelTestStrategyValidationDatasetList" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyValidationDatasetList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyValidationDatasetList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciAiLanguageModelTestStrategyValidationDatasetList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyValidationDatasetList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyValidationDatasetList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyValidationDatasetList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyValidationDatasetList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyValidationDatasetList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyValidationDatasetList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyValidationDatasetList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyValidationDatasetList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyValidationDatasetList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyValidationDatasetList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyValidationDatasetList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyValidationDatasetList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyValidationDatasetList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyValidationDatasetList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyValidationDatasetList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyValidationDatasetList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyValidationDatasetList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyValidationDatasetList.get"></a>

```csharp
private DataOciAiLanguageModelTestStrategyValidationDatasetOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyValidationDatasetList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyValidationDatasetList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyValidationDatasetList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyValidationDatasetList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyValidationDatasetList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciAiLanguageModelTestStrategyValidationDatasetLocationDetailsList <a name="DataOciAiLanguageModelTestStrategyValidationDatasetLocationDetailsList" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyValidationDatasetLocationDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyValidationDatasetLocationDetailsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciAiLanguageModelTestStrategyValidationDatasetLocationDetailsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyValidationDatasetLocationDetailsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyValidationDatasetLocationDetailsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyValidationDatasetLocationDetailsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyValidationDatasetLocationDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyValidationDatasetLocationDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyValidationDatasetLocationDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyValidationDatasetLocationDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyValidationDatasetLocationDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyValidationDatasetLocationDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyValidationDatasetLocationDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyValidationDatasetLocationDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyValidationDatasetLocationDetailsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyValidationDatasetLocationDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyValidationDatasetLocationDetailsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyValidationDatasetLocationDetailsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyValidationDatasetLocationDetailsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyValidationDatasetLocationDetailsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyValidationDatasetLocationDetailsList.get"></a>

```csharp
private DataOciAiLanguageModelTestStrategyValidationDatasetLocationDetailsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyValidationDatasetLocationDetailsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyValidationDatasetLocationDetailsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyValidationDatasetLocationDetailsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyValidationDatasetLocationDetailsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyValidationDatasetLocationDetailsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciAiLanguageModelTestStrategyValidationDatasetLocationDetailsOutputReference <a name="DataOciAiLanguageModelTestStrategyValidationDatasetLocationDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyValidationDatasetLocationDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyValidationDatasetLocationDetailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciAiLanguageModelTestStrategyValidationDatasetLocationDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyValidationDatasetLocationDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyValidationDatasetLocationDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyValidationDatasetLocationDetailsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyValidationDatasetLocationDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyValidationDatasetLocationDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyValidationDatasetLocationDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyValidationDatasetLocationDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyValidationDatasetLocationDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyValidationDatasetLocationDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyValidationDatasetLocationDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyValidationDatasetLocationDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyValidationDatasetLocationDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyValidationDatasetLocationDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyValidationDatasetLocationDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyValidationDatasetLocationDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyValidationDatasetLocationDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyValidationDatasetLocationDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyValidationDatasetLocationDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyValidationDatasetLocationDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyValidationDatasetLocationDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyValidationDatasetLocationDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyValidationDatasetLocationDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyValidationDatasetLocationDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyValidationDatasetLocationDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyValidationDatasetLocationDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyValidationDatasetLocationDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyValidationDatasetLocationDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyValidationDatasetLocationDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyValidationDatasetLocationDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyValidationDatasetLocationDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyValidationDatasetLocationDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyValidationDatasetLocationDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyValidationDatasetLocationDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyValidationDatasetLocationDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyValidationDatasetLocationDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyValidationDatasetLocationDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyValidationDatasetLocationDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyValidationDatasetLocationDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyValidationDatasetLocationDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyValidationDatasetLocationDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyValidationDatasetLocationDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyValidationDatasetLocationDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyValidationDatasetLocationDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyValidationDatasetLocationDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyValidationDatasetLocationDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyValidationDatasetLocationDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyValidationDatasetLocationDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyValidationDatasetLocationDetailsOutputReference.property.bucket">Bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyValidationDatasetLocationDetailsOutputReference.property.locationType">LocationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyValidationDatasetLocationDetailsOutputReference.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyValidationDatasetLocationDetailsOutputReference.property.objectNames">ObjectNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyValidationDatasetLocationDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyValidationDatasetLocationDetails">DataOciAiLanguageModelTestStrategyValidationDatasetLocationDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyValidationDatasetLocationDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyValidationDatasetLocationDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyValidationDatasetLocationDetailsOutputReference.property.bucket"></a>

```csharp
public string Bucket { get; }
```

- *Type:* string

---

##### `LocationType`<sup>Required</sup> <a name="LocationType" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyValidationDatasetLocationDetailsOutputReference.property.locationType"></a>

```csharp
public string LocationType { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyValidationDatasetLocationDetailsOutputReference.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `ObjectNames`<sup>Required</sup> <a name="ObjectNames" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyValidationDatasetLocationDetailsOutputReference.property.objectNames"></a>

```csharp
public string[] ObjectNames { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyValidationDatasetLocationDetailsOutputReference.property.internalValue"></a>

```csharp
public DataOciAiLanguageModelTestStrategyValidationDatasetLocationDetails InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyValidationDatasetLocationDetails">DataOciAiLanguageModelTestStrategyValidationDatasetLocationDetails</a>

---


### DataOciAiLanguageModelTestStrategyValidationDatasetOutputReference <a name="DataOciAiLanguageModelTestStrategyValidationDatasetOutputReference" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyValidationDatasetOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyValidationDatasetOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciAiLanguageModelTestStrategyValidationDatasetOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyValidationDatasetOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyValidationDatasetOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyValidationDatasetOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyValidationDatasetOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyValidationDatasetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyValidationDatasetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyValidationDatasetOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyValidationDatasetOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyValidationDatasetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyValidationDatasetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyValidationDatasetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyValidationDatasetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyValidationDatasetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyValidationDatasetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyValidationDatasetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyValidationDatasetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyValidationDatasetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyValidationDatasetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyValidationDatasetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyValidationDatasetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyValidationDatasetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyValidationDatasetOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyValidationDatasetOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyValidationDatasetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyValidationDatasetOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyValidationDatasetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyValidationDatasetOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyValidationDatasetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyValidationDatasetOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyValidationDatasetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyValidationDatasetOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyValidationDatasetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyValidationDatasetOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyValidationDatasetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyValidationDatasetOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyValidationDatasetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyValidationDatasetOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyValidationDatasetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyValidationDatasetOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyValidationDatasetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyValidationDatasetOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyValidationDatasetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyValidationDatasetOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyValidationDatasetOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyValidationDatasetOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyValidationDatasetOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyValidationDatasetOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyValidationDatasetOutputReference.property.datasetId">DatasetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyValidationDatasetOutputReference.property.datasetType">DatasetType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyValidationDatasetOutputReference.property.locationDetails">LocationDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyValidationDatasetLocationDetailsList">DataOciAiLanguageModelTestStrategyValidationDatasetLocationDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyValidationDatasetOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyValidationDataset">DataOciAiLanguageModelTestStrategyValidationDataset</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyValidationDatasetOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyValidationDatasetOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DatasetId`<sup>Required</sup> <a name="DatasetId" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyValidationDatasetOutputReference.property.datasetId"></a>

```csharp
public string DatasetId { get; }
```

- *Type:* string

---

##### `DatasetType`<sup>Required</sup> <a name="DatasetType" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyValidationDatasetOutputReference.property.datasetType"></a>

```csharp
public string DatasetType { get; }
```

- *Type:* string

---

##### `LocationDetails`<sup>Required</sup> <a name="LocationDetails" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyValidationDatasetOutputReference.property.locationDetails"></a>

```csharp
public DataOciAiLanguageModelTestStrategyValidationDatasetLocationDetailsList LocationDetails { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyValidationDatasetLocationDetailsList">DataOciAiLanguageModelTestStrategyValidationDatasetLocationDetailsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyValidationDatasetOutputReference.property.internalValue"></a>

```csharp
public DataOciAiLanguageModelTestStrategyValidationDataset InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTestStrategyValidationDataset">DataOciAiLanguageModelTestStrategyValidationDataset</a>

---


### DataOciAiLanguageModelTrainingDatasetList <a name="DataOciAiLanguageModelTrainingDatasetList" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTrainingDatasetList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTrainingDatasetList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciAiLanguageModelTrainingDatasetList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTrainingDatasetList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTrainingDatasetList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTrainingDatasetList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTrainingDatasetList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTrainingDatasetList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTrainingDatasetList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTrainingDatasetList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTrainingDatasetList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTrainingDatasetList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTrainingDatasetList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTrainingDatasetList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTrainingDatasetList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTrainingDatasetList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTrainingDatasetList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTrainingDatasetList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTrainingDatasetList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTrainingDatasetList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTrainingDatasetList.get"></a>

```csharp
private DataOciAiLanguageModelTrainingDatasetOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTrainingDatasetList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTrainingDatasetList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTrainingDatasetList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTrainingDatasetList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTrainingDatasetList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciAiLanguageModelTrainingDatasetLocationDetailsList <a name="DataOciAiLanguageModelTrainingDatasetLocationDetailsList" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTrainingDatasetLocationDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTrainingDatasetLocationDetailsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciAiLanguageModelTrainingDatasetLocationDetailsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTrainingDatasetLocationDetailsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTrainingDatasetLocationDetailsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTrainingDatasetLocationDetailsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTrainingDatasetLocationDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTrainingDatasetLocationDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTrainingDatasetLocationDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTrainingDatasetLocationDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTrainingDatasetLocationDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTrainingDatasetLocationDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTrainingDatasetLocationDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTrainingDatasetLocationDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTrainingDatasetLocationDetailsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTrainingDatasetLocationDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTrainingDatasetLocationDetailsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTrainingDatasetLocationDetailsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTrainingDatasetLocationDetailsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTrainingDatasetLocationDetailsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTrainingDatasetLocationDetailsList.get"></a>

```csharp
private DataOciAiLanguageModelTrainingDatasetLocationDetailsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTrainingDatasetLocationDetailsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTrainingDatasetLocationDetailsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTrainingDatasetLocationDetailsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTrainingDatasetLocationDetailsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTrainingDatasetLocationDetailsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciAiLanguageModelTrainingDatasetLocationDetailsOutputReference <a name="DataOciAiLanguageModelTrainingDatasetLocationDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTrainingDatasetLocationDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTrainingDatasetLocationDetailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciAiLanguageModelTrainingDatasetLocationDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTrainingDatasetLocationDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTrainingDatasetLocationDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTrainingDatasetLocationDetailsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTrainingDatasetLocationDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTrainingDatasetLocationDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTrainingDatasetLocationDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTrainingDatasetLocationDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTrainingDatasetLocationDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTrainingDatasetLocationDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTrainingDatasetLocationDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTrainingDatasetLocationDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTrainingDatasetLocationDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTrainingDatasetLocationDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTrainingDatasetLocationDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTrainingDatasetLocationDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTrainingDatasetLocationDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTrainingDatasetLocationDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTrainingDatasetLocationDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTrainingDatasetLocationDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTrainingDatasetLocationDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTrainingDatasetLocationDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTrainingDatasetLocationDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTrainingDatasetLocationDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTrainingDatasetLocationDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTrainingDatasetLocationDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTrainingDatasetLocationDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTrainingDatasetLocationDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTrainingDatasetLocationDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTrainingDatasetLocationDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTrainingDatasetLocationDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTrainingDatasetLocationDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTrainingDatasetLocationDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTrainingDatasetLocationDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTrainingDatasetLocationDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTrainingDatasetLocationDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTrainingDatasetLocationDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTrainingDatasetLocationDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTrainingDatasetLocationDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTrainingDatasetLocationDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTrainingDatasetLocationDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTrainingDatasetLocationDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTrainingDatasetLocationDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTrainingDatasetLocationDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTrainingDatasetLocationDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTrainingDatasetLocationDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTrainingDatasetLocationDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTrainingDatasetLocationDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTrainingDatasetLocationDetailsOutputReference.property.bucket">Bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTrainingDatasetLocationDetailsOutputReference.property.locationType">LocationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTrainingDatasetLocationDetailsOutputReference.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTrainingDatasetLocationDetailsOutputReference.property.objectNames">ObjectNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTrainingDatasetLocationDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTrainingDatasetLocationDetails">DataOciAiLanguageModelTrainingDatasetLocationDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTrainingDatasetLocationDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTrainingDatasetLocationDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTrainingDatasetLocationDetailsOutputReference.property.bucket"></a>

```csharp
public string Bucket { get; }
```

- *Type:* string

---

##### `LocationType`<sup>Required</sup> <a name="LocationType" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTrainingDatasetLocationDetailsOutputReference.property.locationType"></a>

```csharp
public string LocationType { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTrainingDatasetLocationDetailsOutputReference.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `ObjectNames`<sup>Required</sup> <a name="ObjectNames" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTrainingDatasetLocationDetailsOutputReference.property.objectNames"></a>

```csharp
public string[] ObjectNames { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTrainingDatasetLocationDetailsOutputReference.property.internalValue"></a>

```csharp
public DataOciAiLanguageModelTrainingDatasetLocationDetails InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTrainingDatasetLocationDetails">DataOciAiLanguageModelTrainingDatasetLocationDetails</a>

---


### DataOciAiLanguageModelTrainingDatasetOutputReference <a name="DataOciAiLanguageModelTrainingDatasetOutputReference" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTrainingDatasetOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTrainingDatasetOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciAiLanguageModelTrainingDatasetOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTrainingDatasetOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTrainingDatasetOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTrainingDatasetOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTrainingDatasetOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTrainingDatasetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTrainingDatasetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTrainingDatasetOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTrainingDatasetOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTrainingDatasetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTrainingDatasetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTrainingDatasetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTrainingDatasetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTrainingDatasetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTrainingDatasetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTrainingDatasetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTrainingDatasetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTrainingDatasetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTrainingDatasetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTrainingDatasetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTrainingDatasetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTrainingDatasetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTrainingDatasetOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTrainingDatasetOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTrainingDatasetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTrainingDatasetOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTrainingDatasetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTrainingDatasetOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTrainingDatasetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTrainingDatasetOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTrainingDatasetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTrainingDatasetOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTrainingDatasetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTrainingDatasetOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTrainingDatasetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTrainingDatasetOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTrainingDatasetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTrainingDatasetOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTrainingDatasetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTrainingDatasetOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTrainingDatasetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTrainingDatasetOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTrainingDatasetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTrainingDatasetOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTrainingDatasetOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTrainingDatasetOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTrainingDatasetOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTrainingDatasetOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTrainingDatasetOutputReference.property.datasetId">DatasetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTrainingDatasetOutputReference.property.datasetType">DatasetType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTrainingDatasetOutputReference.property.locationDetails">LocationDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTrainingDatasetLocationDetailsList">DataOciAiLanguageModelTrainingDatasetLocationDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTrainingDatasetOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTrainingDataset">DataOciAiLanguageModelTrainingDataset</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTrainingDatasetOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTrainingDatasetOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DatasetId`<sup>Required</sup> <a name="DatasetId" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTrainingDatasetOutputReference.property.datasetId"></a>

```csharp
public string DatasetId { get; }
```

- *Type:* string

---

##### `DatasetType`<sup>Required</sup> <a name="DatasetType" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTrainingDatasetOutputReference.property.datasetType"></a>

```csharp
public string DatasetType { get; }
```

- *Type:* string

---

##### `LocationDetails`<sup>Required</sup> <a name="LocationDetails" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTrainingDatasetOutputReference.property.locationDetails"></a>

```csharp
public DataOciAiLanguageModelTrainingDatasetLocationDetailsList LocationDetails { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTrainingDatasetLocationDetailsList">DataOciAiLanguageModelTrainingDatasetLocationDetailsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTrainingDatasetOutputReference.property.internalValue"></a>

```csharp
public DataOciAiLanguageModelTrainingDataset InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModel.DataOciAiLanguageModelTrainingDataset">DataOciAiLanguageModelTrainingDataset</a>

---


