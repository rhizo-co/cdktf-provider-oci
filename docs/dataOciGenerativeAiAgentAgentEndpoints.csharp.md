# `dataOciGenerativeAiAgentAgentEndpoints` Submodule <a name="`dataOciGenerativeAiAgentAgentEndpoints` Submodule" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciGenerativeAiAgentAgentEndpoints <a name="DataOciGenerativeAiAgentAgentEndpoints" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_agent_agent_endpoints oci_generative_ai_agent_agent_endpoints}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciGenerativeAiAgentAgentEndpoints(Construct Scope, string Id, DataOciGenerativeAiAgentAgentEndpointsConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsConfig">DataOciGenerativeAiAgentAgentEndpointsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsConfig">DataOciGenerativeAiAgentAgentEndpointsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.resetAgentId">ResetAgentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.resetCompartmentId">ResetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.resetState">ResetState</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.putFilter"></a>

```csharp
private void PutFilter(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.putFilter.parameter.value"></a>

- *Type:* object

---

##### `ResetAgentId` <a name="ResetAgentId" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.resetAgentId"></a>

```csharp
private void ResetAgentId()
```

##### `ResetCompartmentId` <a name="ResetCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.resetCompartmentId"></a>

```csharp
private void ResetCompartmentId()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetState` <a name="ResetState" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.resetState"></a>

```csharp
private void ResetState()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciGenerativeAiAgentAgentEndpoints resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciGenerativeAiAgentAgentEndpoints.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciGenerativeAiAgentAgentEndpoints.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciGenerativeAiAgentAgentEndpoints.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciGenerativeAiAgentAgentEndpoints.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciGenerativeAiAgentAgentEndpoints resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciGenerativeAiAgentAgentEndpoints to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciGenerativeAiAgentAgentEndpoints that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_agent_agent_endpoints#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciGenerativeAiAgentAgentEndpoints to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.property.agentEndpointCollection">AgentEndpointCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionList">DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsFilterList">DataOciGenerativeAiAgentAgentEndpointsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.property.agentIdInput">AgentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.property.filterInput">FilterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.property.stateInput">StateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.property.agentId">AgentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.property.state">State</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `AgentEndpointCollection`<sup>Required</sup> <a name="AgentEndpointCollection" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.property.agentEndpointCollection"></a>

```csharp
public DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionList AgentEndpointCollection { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionList">DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionList</a>

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.property.filter"></a>

```csharp
public DataOciGenerativeAiAgentAgentEndpointsFilterList Filter { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsFilterList">DataOciGenerativeAiAgentAgentEndpointsFilterList</a>

---

##### `AgentIdInput`<sup>Optional</sup> <a name="AgentIdInput" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.property.agentIdInput"></a>

```csharp
public string AgentIdInput { get; }
```

- *Type:* string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.property.filterInput"></a>

```csharp
public object FilterInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.property.stateInput"></a>

```csharp
public string StateInput { get; }
```

- *Type:* string

---

##### `AgentId`<sup>Required</sup> <a name="AgentId" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.property.agentId"></a>

```csharp
public string AgentId { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollection <a name="DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollection" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollection.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollection {

};
```


### DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItems <a name="DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItems.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItems {

};
```


### DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsContentModerationConfig <a name="DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsContentModerationConfig" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsContentModerationConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsContentModerationConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsContentModerationConfig {

};
```


### DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsSessionConfig <a name="DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsSessionConfig" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsSessionConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsSessionConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsSessionConfig {

};
```


### DataOciGenerativeAiAgentAgentEndpointsConfig <a name="DataOciGenerativeAiAgentAgentEndpointsConfig" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciGenerativeAiAgentAgentEndpointsConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string AgentId = null,
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
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsConfig.property.agentId">AgentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_agent_agent_endpoints#agent_id DataOciGenerativeAiAgentAgentEndpoints#agent_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_agent_agent_endpoints#compartment_id DataOciGenerativeAiAgentAgentEndpoints#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_agent_agent_endpoints#display_name DataOciGenerativeAiAgentAgentEndpoints#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsConfig.property.filter">Filter</a></code> | <code>object</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_agent_agent_endpoints#id DataOciGenerativeAiAgentAgentEndpoints#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsConfig.property.state">State</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_agent_agent_endpoints#state DataOciGenerativeAiAgentAgentEndpoints#state}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AgentId`<sup>Optional</sup> <a name="AgentId" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsConfig.property.agentId"></a>

```csharp
public string AgentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_agent_agent_endpoints#agent_id DataOciGenerativeAiAgentAgentEndpoints#agent_id}.

---

##### `CompartmentId`<sup>Optional</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_agent_agent_endpoints#compartment_id DataOciGenerativeAiAgentAgentEndpoints#compartment_id}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_agent_agent_endpoints#display_name DataOciGenerativeAiAgentAgentEndpoints#display_name}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsConfig.property.filter"></a>

```csharp
public object Filter { get; set; }
```

- *Type:* object

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_agent_agent_endpoints#filter DataOciGenerativeAiAgentAgentEndpoints#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_agent_agent_endpoints#id DataOciGenerativeAiAgentAgentEndpoints#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `State`<sup>Optional</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsConfig.property.state"></a>

```csharp
public string State { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_agent_agent_endpoints#state DataOciGenerativeAiAgentAgentEndpoints#state}.

---

### DataOciGenerativeAiAgentAgentEndpointsFilter <a name="DataOciGenerativeAiAgentAgentEndpointsFilter" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciGenerativeAiAgentAgentEndpointsFilter {
    string Name,
    string[] Values,
    object Regex = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsFilter.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_agent_agent_endpoints#name DataOciGenerativeAiAgentAgentEndpoints#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsFilter.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_agent_agent_endpoints#values DataOciGenerativeAiAgentAgentEndpoints#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsFilter.property.regex">Regex</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_agent_agent_endpoints#regex DataOciGenerativeAiAgentAgentEndpoints#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsFilter.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_agent_agent_endpoints#name DataOciGenerativeAiAgentAgentEndpoints#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsFilter.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_agent_agent_endpoints#values DataOciGenerativeAiAgentAgentEndpoints#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsFilter.property.regex"></a>

```csharp
public object Regex { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_agent_agent_endpoints#regex DataOciGenerativeAiAgentAgentEndpoints#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsContentModerationConfigList <a name="DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsContentModerationConfigList" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsContentModerationConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsContentModerationConfigList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsContentModerationConfigList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsContentModerationConfigList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsContentModerationConfigList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsContentModerationConfigList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsContentModerationConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsContentModerationConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsContentModerationConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsContentModerationConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsContentModerationConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsContentModerationConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsContentModerationConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsContentModerationConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsContentModerationConfigList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsContentModerationConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsContentModerationConfigList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsContentModerationConfigList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsContentModerationConfigList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsContentModerationConfigList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsContentModerationConfigList.get"></a>

```csharp
private DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsContentModerationConfigOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsContentModerationConfigList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsContentModerationConfigList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsContentModerationConfigList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsContentModerationConfigList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsContentModerationConfigList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsContentModerationConfigOutputReference <a name="DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsContentModerationConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsContentModerationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsContentModerationConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsContentModerationConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsContentModerationConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsContentModerationConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsContentModerationConfigOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsContentModerationConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsContentModerationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsContentModerationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsContentModerationConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsContentModerationConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsContentModerationConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsContentModerationConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsContentModerationConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsContentModerationConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsContentModerationConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsContentModerationConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsContentModerationConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsContentModerationConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsContentModerationConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsContentModerationConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsContentModerationConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsContentModerationConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsContentModerationConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsContentModerationConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsContentModerationConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsContentModerationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsContentModerationConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsContentModerationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsContentModerationConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsContentModerationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsContentModerationConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsContentModerationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsContentModerationConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsContentModerationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsContentModerationConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsContentModerationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsContentModerationConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsContentModerationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsContentModerationConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsContentModerationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsContentModerationConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsContentModerationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsContentModerationConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsContentModerationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsContentModerationConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsContentModerationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsContentModerationConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsContentModerationConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsContentModerationConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsContentModerationConfigOutputReference.property.shouldEnableOnInput">ShouldEnableOnInput</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsContentModerationConfigOutputReference.property.shouldEnableOnOutput">ShouldEnableOnOutput</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsContentModerationConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsContentModerationConfig">DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsContentModerationConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsContentModerationConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsContentModerationConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ShouldEnableOnInput`<sup>Required</sup> <a name="ShouldEnableOnInput" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsContentModerationConfigOutputReference.property.shouldEnableOnInput"></a>

```csharp
public IResolvable ShouldEnableOnInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `ShouldEnableOnOutput`<sup>Required</sup> <a name="ShouldEnableOnOutput" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsContentModerationConfigOutputReference.property.shouldEnableOnOutput"></a>

```csharp
public IResolvable ShouldEnableOnOutput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsContentModerationConfigOutputReference.property.internalValue"></a>

```csharp
public DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsContentModerationConfig InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsContentModerationConfig">DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsContentModerationConfig</a>

---


### DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsList <a name="DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsList.get"></a>

```csharp
private DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsOutputReference <a name="DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsOutputReference.property.agentId">AgentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsOutputReference.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsOutputReference.property.contentModerationConfig">ContentModerationConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsContentModerationConfigList">DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsContentModerationConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsOutputReference.property.definedTags">DefinedTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsOutputReference.property.freeformTags">FreeformTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsOutputReference.property.lifecycleDetails">LifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsOutputReference.property.sessionConfig">SessionConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsSessionConfigList">DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsSessionConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsOutputReference.property.shouldEnableCitation">ShouldEnableCitation</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsOutputReference.property.shouldEnableSession">ShouldEnableSession</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsOutputReference.property.shouldEnableTrace">ShouldEnableTrace</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsOutputReference.property.systemTags">SystemTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsOutputReference.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsOutputReference.property.timeUpdated">TimeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItems">DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AgentId`<sup>Required</sup> <a name="AgentId" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsOutputReference.property.agentId"></a>

```csharp
public string AgentId { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsOutputReference.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `ContentModerationConfig`<sup>Required</sup> <a name="ContentModerationConfig" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsOutputReference.property.contentModerationConfig"></a>

```csharp
public DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsContentModerationConfigList ContentModerationConfig { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsContentModerationConfigList">DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsContentModerationConfigList</a>

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsOutputReference.property.definedTags"></a>

```csharp
public StringMap DefinedTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsOutputReference.property.freeformTags"></a>

```csharp
public StringMap FreeformTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsOutputReference.property.lifecycleDetails"></a>

```csharp
public string LifecycleDetails { get; }
```

- *Type:* string

---

##### `SessionConfig`<sup>Required</sup> <a name="SessionConfig" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsOutputReference.property.sessionConfig"></a>

```csharp
public DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsSessionConfigList SessionConfig { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsSessionConfigList">DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsSessionConfigList</a>

---

##### `ShouldEnableCitation`<sup>Required</sup> <a name="ShouldEnableCitation" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsOutputReference.property.shouldEnableCitation"></a>

```csharp
public IResolvable ShouldEnableCitation { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `ShouldEnableSession`<sup>Required</sup> <a name="ShouldEnableSession" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsOutputReference.property.shouldEnableSession"></a>

```csharp
public IResolvable ShouldEnableSession { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `ShouldEnableTrace`<sup>Required</sup> <a name="ShouldEnableTrace" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsOutputReference.property.shouldEnableTrace"></a>

```csharp
public IResolvable ShouldEnableTrace { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsOutputReference.property.systemTags"></a>

```csharp
public StringMap SystemTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsOutputReference.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsOutputReference.property.timeUpdated"></a>

```csharp
public string TimeUpdated { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsOutputReference.property.internalValue"></a>

```csharp
public DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItems InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItems">DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItems</a>

---


### DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsSessionConfigList <a name="DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsSessionConfigList" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsSessionConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsSessionConfigList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsSessionConfigList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsSessionConfigList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsSessionConfigList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsSessionConfigList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsSessionConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsSessionConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsSessionConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsSessionConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsSessionConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsSessionConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsSessionConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsSessionConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsSessionConfigList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsSessionConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsSessionConfigList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsSessionConfigList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsSessionConfigList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsSessionConfigList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsSessionConfigList.get"></a>

```csharp
private DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsSessionConfigOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsSessionConfigList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsSessionConfigList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsSessionConfigList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsSessionConfigList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsSessionConfigList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsSessionConfigOutputReference <a name="DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsSessionConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsSessionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsSessionConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsSessionConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsSessionConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsSessionConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsSessionConfigOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsSessionConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsSessionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsSessionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsSessionConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsSessionConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsSessionConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsSessionConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsSessionConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsSessionConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsSessionConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsSessionConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsSessionConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsSessionConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsSessionConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsSessionConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsSessionConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsSessionConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsSessionConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsSessionConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsSessionConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsSessionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsSessionConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsSessionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsSessionConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsSessionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsSessionConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsSessionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsSessionConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsSessionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsSessionConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsSessionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsSessionConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsSessionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsSessionConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsSessionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsSessionConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsSessionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsSessionConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsSessionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsSessionConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsSessionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsSessionConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsSessionConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsSessionConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsSessionConfigOutputReference.property.idleTimeoutInSeconds">IdleTimeoutInSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsSessionConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsSessionConfig">DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsSessionConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsSessionConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsSessionConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IdleTimeoutInSeconds`<sup>Required</sup> <a name="IdleTimeoutInSeconds" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsSessionConfigOutputReference.property.idleTimeoutInSeconds"></a>

```csharp
public double IdleTimeoutInSeconds { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsSessionConfigOutputReference.property.internalValue"></a>

```csharp
public DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsSessionConfig InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsSessionConfig">DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsSessionConfig</a>

---


### DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionList <a name="DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionList" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionList.get"></a>

```csharp
private DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionOutputReference <a name="DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsList">DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollection">DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionOutputReference.property.items"></a>

```csharp
public DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsList Items { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsList">DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionOutputReference.property.internalValue"></a>

```csharp
public DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollection InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollection">DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollection</a>

---


### DataOciGenerativeAiAgentAgentEndpointsFilterList <a name="DataOciGenerativeAiAgentAgentEndpointsFilterList" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsFilterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciGenerativeAiAgentAgentEndpointsFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsFilterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsFilterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsFilterList.get"></a>

```csharp
private DataOciGenerativeAiAgentAgentEndpointsFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsFilterList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsFilterList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciGenerativeAiAgentAgentEndpointsFilterOutputReference <a name="DataOciGenerativeAiAgentAgentEndpointsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciGenerativeAiAgentAgentEndpointsFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsFilterOutputReference.resetRegex"></a>

```csharp
private void ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsFilterOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsFilterOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsFilterOutputReference.property.regex">Regex</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsFilterOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsFilterOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsFilterOutputReference.property.regexInput"></a>

```csharp
public object RegexInput { get; }
```

- *Type:* object

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsFilterOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsFilterOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsFilterOutputReference.property.regex"></a>

```csharp
public object Regex { get; }
```

- *Type:* object

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsFilterOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsFilterOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



