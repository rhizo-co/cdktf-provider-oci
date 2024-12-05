# `dataOciGenerativeAiDedicatedAiClusters` Submodule <a name="`dataOciGenerativeAiDedicatedAiClusters` Submodule" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciGenerativeAiDedicatedAiClusters <a name="DataOciGenerativeAiDedicatedAiClusters" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_dedicated_ai_clusters oci_generative_ai_dedicated_ai_clusters}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciGenerativeAiDedicatedAiClusters(Construct Scope, string Id, DataOciGenerativeAiDedicatedAiClustersConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersConfig">DataOciGenerativeAiDedicatedAiClustersConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersConfig">DataOciGenerativeAiDedicatedAiClustersConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.resetState">ResetState</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.putFilter"></a>

```csharp
private void PutFilter(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.putFilter.parameter.value"></a>

- *Type:* object

---

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetState` <a name="ResetState" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.resetState"></a>

```csharp
private void ResetState()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciGenerativeAiDedicatedAiClusters resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciGenerativeAiDedicatedAiClusters.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciGenerativeAiDedicatedAiClusters.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciGenerativeAiDedicatedAiClusters.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciGenerativeAiDedicatedAiClusters.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciGenerativeAiDedicatedAiClusters resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciGenerativeAiDedicatedAiClusters to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciGenerativeAiDedicatedAiClusters that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_dedicated_ai_clusters#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciGenerativeAiDedicatedAiClusters to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.property.dedicatedAiClusterCollection">DedicatedAiClusterCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionList">DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilterList">DataOciGenerativeAiDedicatedAiClustersFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.property.filterInput">FilterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.property.stateInput">StateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.property.state">State</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `DedicatedAiClusterCollection`<sup>Required</sup> <a name="DedicatedAiClusterCollection" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.property.dedicatedAiClusterCollection"></a>

```csharp
public DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionList DedicatedAiClusterCollection { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionList">DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionList</a>

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.property.filter"></a>

```csharp
public DataOciGenerativeAiDedicatedAiClustersFilterList Filter { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilterList">DataOciGenerativeAiDedicatedAiClustersFilterList</a>

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.property.filterInput"></a>

```csharp
public object FilterInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.property.stateInput"></a>

```csharp
public string StateInput { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciGenerativeAiDedicatedAiClustersConfig <a name="DataOciGenerativeAiDedicatedAiClustersConfig" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciGenerativeAiDedicatedAiClustersConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string CompartmentId,
    string DisplayName = null,
    object Filter = null,
    string Id = null,
    string State = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_dedicated_ai_clusters#compartment_id DataOciGenerativeAiDedicatedAiClusters#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_dedicated_ai_clusters#display_name DataOciGenerativeAiDedicatedAiClusters#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersConfig.property.filter">Filter</a></code> | <code>object</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_dedicated_ai_clusters#id DataOciGenerativeAiDedicatedAiClusters#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersConfig.property.state">State</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_dedicated_ai_clusters#state DataOciGenerativeAiDedicatedAiClusters#state}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_dedicated_ai_clusters#compartment_id DataOciGenerativeAiDedicatedAiClusters#compartment_id}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_dedicated_ai_clusters#display_name DataOciGenerativeAiDedicatedAiClusters#display_name}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersConfig.property.filter"></a>

```csharp
public object Filter { get; set; }
```

- *Type:* object

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_dedicated_ai_clusters#filter DataOciGenerativeAiDedicatedAiClusters#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_dedicated_ai_clusters#id DataOciGenerativeAiDedicatedAiClusters#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `State`<sup>Optional</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersConfig.property.state"></a>

```csharp
public string State { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_dedicated_ai_clusters#state DataOciGenerativeAiDedicatedAiClusters#state}.

---

### DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollection <a name="DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollection" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollection.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollection {

};
```


### DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItems <a name="DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItems.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItems {

};
```


### DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacity <a name="DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacity" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacity"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacity.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacity {

};
```


### DataOciGenerativeAiDedicatedAiClustersFilter <a name="DataOciGenerativeAiDedicatedAiClustersFilter" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciGenerativeAiDedicatedAiClustersFilter {
    string Name,
    string[] Values,
    object Regex = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilter.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_dedicated_ai_clusters#name DataOciGenerativeAiDedicatedAiClusters#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilter.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_dedicated_ai_clusters#values DataOciGenerativeAiDedicatedAiClusters#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilter.property.regex">Regex</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_dedicated_ai_clusters#regex DataOciGenerativeAiDedicatedAiClusters#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilter.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_dedicated_ai_clusters#name DataOciGenerativeAiDedicatedAiClusters#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilter.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_dedicated_ai_clusters#values DataOciGenerativeAiDedicatedAiClusters#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilter.property.regex"></a>

```csharp
public object Regex { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_dedicated_ai_clusters#regex DataOciGenerativeAiDedicatedAiClusters#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacityList <a name="DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacityList" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacityList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacityList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacityList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacityList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacityList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacityList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacityList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacityList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacityList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacityList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacityList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacityList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacityList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacityList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacityList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacityList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacityList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacityList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacityList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacityList.get"></a>

```csharp
private DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacityOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacityList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacityList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacityList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacityList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacityList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacityOutputReference <a name="DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacityOutputReference" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacityOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacityOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacityOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacityOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacityOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacityOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacityOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacityOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacityOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacityOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacityOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacityOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacityOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacityOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacityOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacityOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacityOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacityOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacityOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacityOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacityOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacityOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacityOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacityOutputReference.property.capacityType">CapacityType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacityOutputReference.property.totalEndpointCapacity">TotalEndpointCapacity</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacityOutputReference.property.usedEndpointCapacity">UsedEndpointCapacity</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacity">DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacityOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacityOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CapacityType`<sup>Required</sup> <a name="CapacityType" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacityOutputReference.property.capacityType"></a>

```csharp
public string CapacityType { get; }
```

- *Type:* string

---

##### `TotalEndpointCapacity`<sup>Required</sup> <a name="TotalEndpointCapacity" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacityOutputReference.property.totalEndpointCapacity"></a>

```csharp
public double TotalEndpointCapacity { get; }
```

- *Type:* double

---

##### `UsedEndpointCapacity`<sup>Required</sup> <a name="UsedEndpointCapacity" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacityOutputReference.property.usedEndpointCapacity"></a>

```csharp
public double UsedEndpointCapacity { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacityOutputReference.property.internalValue"></a>

```csharp
public DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacity InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacity">DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacity</a>

---


### DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsList <a name="DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsList.get"></a>

```csharp
private DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsOutputReference <a name="DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsOutputReference.property.capacity">Capacity</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacityList">DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacityList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsOutputReference.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsOutputReference.property.definedTags">DefinedTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsOutputReference.property.freeformTags">FreeformTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsOutputReference.property.lifecycleDetails">LifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsOutputReference.property.systemTags">SystemTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsOutputReference.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsOutputReference.property.timeUpdated">TimeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsOutputReference.property.unitCount">UnitCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsOutputReference.property.unitShape">UnitShape</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItems">DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Capacity`<sup>Required</sup> <a name="Capacity" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsOutputReference.property.capacity"></a>

```csharp
public DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacityList Capacity { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacityList">DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacityList</a>

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsOutputReference.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsOutputReference.property.definedTags"></a>

```csharp
public StringMap DefinedTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsOutputReference.property.freeformTags"></a>

```csharp
public StringMap FreeformTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsOutputReference.property.lifecycleDetails"></a>

```csharp
public string LifecycleDetails { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsOutputReference.property.systemTags"></a>

```csharp
public StringMap SystemTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsOutputReference.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsOutputReference.property.timeUpdated"></a>

```csharp
public string TimeUpdated { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `UnitCount`<sup>Required</sup> <a name="UnitCount" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsOutputReference.property.unitCount"></a>

```csharp
public double UnitCount { get; }
```

- *Type:* double

---

##### `UnitShape`<sup>Required</sup> <a name="UnitShape" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsOutputReference.property.unitShape"></a>

```csharp
public string UnitShape { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsOutputReference.property.internalValue"></a>

```csharp
public DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItems InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItems">DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItems</a>

---


### DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionList <a name="DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionList" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionList.get"></a>

```csharp
private DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionOutputReference <a name="DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsList">DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollection">DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionOutputReference.property.items"></a>

```csharp
public DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsList Items { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsList">DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionOutputReference.property.internalValue"></a>

```csharp
public DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollection InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollection">DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollection</a>

---


### DataOciGenerativeAiDedicatedAiClustersFilterList <a name="DataOciGenerativeAiDedicatedAiClustersFilterList" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciGenerativeAiDedicatedAiClustersFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilterList.get"></a>

```csharp
private DataOciGenerativeAiDedicatedAiClustersFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilterList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilterList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciGenerativeAiDedicatedAiClustersFilterOutputReference <a name="DataOciGenerativeAiDedicatedAiClustersFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciGenerativeAiDedicatedAiClustersFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilterOutputReference.resetRegex"></a>

```csharp
private void ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilterOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilterOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilterOutputReference.property.regex">Regex</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilterOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilterOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilterOutputReference.property.regexInput"></a>

```csharp
public object RegexInput { get; }
```

- *Type:* object

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilterOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilterOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilterOutputReference.property.regex"></a>

```csharp
public object Regex { get; }
```

- *Type:* object

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilterOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilterOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



