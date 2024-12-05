# `dataOciAiAnomalyDetectionModels` Submodule <a name="`dataOciAiAnomalyDetectionModels` Submodule" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciAiAnomalyDetectionModels <a name="DataOciAiAnomalyDetectionModels" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_anomaly_detection_models oci_ai_anomaly_detection_models}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciAiAnomalyDetectionModels(Construct Scope, string Id, DataOciAiAnomalyDetectionModelsConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsConfig">DataOciAiAnomalyDetectionModelsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsConfig">DataOciAiAnomalyDetectionModelsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.resetProjectId">ResetProjectId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.resetState">ResetState</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.putFilter"></a>

```csharp
private void PutFilter(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.putFilter.parameter.value"></a>

- *Type:* object

---

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetProjectId` <a name="ResetProjectId" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.resetProjectId"></a>

```csharp
private void ResetProjectId()
```

##### `ResetState` <a name="ResetState" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.resetState"></a>

```csharp
private void ResetState()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciAiAnomalyDetectionModels resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciAiAnomalyDetectionModels.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciAiAnomalyDetectionModels.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciAiAnomalyDetectionModels.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciAiAnomalyDetectionModels.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciAiAnomalyDetectionModels resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciAiAnomalyDetectionModels to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciAiAnomalyDetectionModels that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_anomaly_detection_models#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciAiAnomalyDetectionModels to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilterList">DataOciAiAnomalyDetectionModelsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.property.modelCollection">ModelCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionList">DataOciAiAnomalyDetectionModelsModelCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.property.filterInput">FilterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.property.projectIdInput">ProjectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.property.stateInput">StateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.property.projectId">ProjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.property.state">State</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.property.filter"></a>

```csharp
public DataOciAiAnomalyDetectionModelsFilterList Filter { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilterList">DataOciAiAnomalyDetectionModelsFilterList</a>

---

##### `ModelCollection`<sup>Required</sup> <a name="ModelCollection" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.property.modelCollection"></a>

```csharp
public DataOciAiAnomalyDetectionModelsModelCollectionList ModelCollection { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionList">DataOciAiAnomalyDetectionModelsModelCollectionList</a>

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.property.filterInput"></a>

```csharp
public object FilterInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.property.projectIdInput"></a>

```csharp
public string ProjectIdInput { get; }
```

- *Type:* string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.property.stateInput"></a>

```csharp
public string StateInput { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.property.projectId"></a>

```csharp
public string ProjectId { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciAiAnomalyDetectionModelsConfig <a name="DataOciAiAnomalyDetectionModelsConfig" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciAiAnomalyDetectionModelsConfig {
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
    string ProjectId = null,
    string State = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_anomaly_detection_models#compartment_id DataOciAiAnomalyDetectionModels#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_anomaly_detection_models#display_name DataOciAiAnomalyDetectionModels#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsConfig.property.filter">Filter</a></code> | <code>object</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_anomaly_detection_models#id DataOciAiAnomalyDetectionModels#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsConfig.property.projectId">ProjectId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_anomaly_detection_models#project_id DataOciAiAnomalyDetectionModels#project_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsConfig.property.state">State</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_anomaly_detection_models#state DataOciAiAnomalyDetectionModels#state}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_anomaly_detection_models#compartment_id DataOciAiAnomalyDetectionModels#compartment_id}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_anomaly_detection_models#display_name DataOciAiAnomalyDetectionModels#display_name}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsConfig.property.filter"></a>

```csharp
public object Filter { get; set; }
```

- *Type:* object

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_anomaly_detection_models#filter DataOciAiAnomalyDetectionModels#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_anomaly_detection_models#id DataOciAiAnomalyDetectionModels#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ProjectId`<sup>Optional</sup> <a name="ProjectId" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsConfig.property.projectId"></a>

```csharp
public string ProjectId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_anomaly_detection_models#project_id DataOciAiAnomalyDetectionModels#project_id}.

---

##### `State`<sup>Optional</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsConfig.property.state"></a>

```csharp
public string State { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_anomaly_detection_models#state DataOciAiAnomalyDetectionModels#state}.

---

### DataOciAiAnomalyDetectionModelsFilter <a name="DataOciAiAnomalyDetectionModelsFilter" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciAiAnomalyDetectionModelsFilter {
    string Name,
    string[] Values,
    object Regex = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilter.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_anomaly_detection_models#name DataOciAiAnomalyDetectionModels#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilter.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_anomaly_detection_models#values DataOciAiAnomalyDetectionModels#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilter.property.regex">Regex</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_anomaly_detection_models#regex DataOciAiAnomalyDetectionModels#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilter.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_anomaly_detection_models#name DataOciAiAnomalyDetectionModels#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilter.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_anomaly_detection_models#values DataOciAiAnomalyDetectionModels#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilter.property.regex"></a>

```csharp
public object Regex { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_anomaly_detection_models#regex DataOciAiAnomalyDetectionModels#regex}.

---

### DataOciAiAnomalyDetectionModelsModelCollection <a name="DataOciAiAnomalyDetectionModelsModelCollection" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollection.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciAiAnomalyDetectionModelsModelCollection {

};
```


### DataOciAiAnomalyDetectionModelsModelCollectionItems <a name="DataOciAiAnomalyDetectionModelsModelCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItems.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciAiAnomalyDetectionModelsModelCollectionItems {

};
```


### DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetails <a name="DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetails" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetails {

};
```


### DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResults <a name="DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResults" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResults"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResults.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResults {

};
```


### DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetails <a name="DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetails" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetails {

};
```


### DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetails <a name="DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetails" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetails {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciAiAnomalyDetectionModelsFilterList <a name="DataOciAiAnomalyDetectionModelsFilterList" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciAiAnomalyDetectionModelsFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilterList.get"></a>

```csharp
private DataOciAiAnomalyDetectionModelsFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilterList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilterList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciAiAnomalyDetectionModelsFilterOutputReference <a name="DataOciAiAnomalyDetectionModelsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciAiAnomalyDetectionModelsFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilterOutputReference.resetRegex"></a>

```csharp
private void ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilterOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilterOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilterOutputReference.property.regex">Regex</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilterOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilterOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilterOutputReference.property.regexInput"></a>

```csharp
public object RegexInput { get; }
```

- *Type:* object

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilterOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilterOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilterOutputReference.property.regex"></a>

```csharp
public object Regex { get; }
```

- *Type:* object

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilterOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilterOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciAiAnomalyDetectionModelsModelCollectionItemsList <a name="DataOciAiAnomalyDetectionModelsModelCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciAiAnomalyDetectionModelsModelCollectionItemsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsList.get"></a>

```csharp
private DataOciAiAnomalyDetectionModelsModelCollectionItemsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsList <a name="DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsList" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsList.get"></a>

```csharp
private DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsOutputReference <a name="DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsOutputReference.property.algorithmHint">AlgorithmHint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsOutputReference.property.dataAssetIds">DataAssetIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsOutputReference.property.targetFap">TargetFap</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsOutputReference.property.trainingFraction">TrainingFraction</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsOutputReference.property.windowSize">WindowSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetails">DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AlgorithmHint`<sup>Required</sup> <a name="AlgorithmHint" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsOutputReference.property.algorithmHint"></a>

```csharp
public string AlgorithmHint { get; }
```

- *Type:* string

---

##### `DataAssetIds`<sup>Required</sup> <a name="DataAssetIds" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsOutputReference.property.dataAssetIds"></a>

```csharp
public string[] DataAssetIds { get; }
```

- *Type:* string[]

---

##### `TargetFap`<sup>Required</sup> <a name="TargetFap" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsOutputReference.property.targetFap"></a>

```csharp
public double TargetFap { get; }
```

- *Type:* double

---

##### `TrainingFraction`<sup>Required</sup> <a name="TrainingFraction" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsOutputReference.property.trainingFraction"></a>

```csharp
public double TrainingFraction { get; }
```

- *Type:* double

---

##### `WindowSize`<sup>Required</sup> <a name="WindowSize" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsOutputReference.property.windowSize"></a>

```csharp
public double WindowSize { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsOutputReference.property.internalValue"></a>

```csharp
public DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetails InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetails">DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetails</a>

---


### DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsList <a name="DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsList" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsList.get"></a>

```csharp
private DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsOutputReference <a name="DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsOutputReference.property.fap">Fap</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsOutputReference.property.isTrainingGoalAchieved">IsTrainingGoalAchieved</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsOutputReference.property.mae">Mae</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsOutputReference.property.maxInferenceSyncRows">MaxInferenceSyncRows</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsOutputReference.property.multivariateFap">MultivariateFap</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsOutputReference.property.rmse">Rmse</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsOutputReference.property.rowReductionDetails">RowReductionDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetailsList">DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsOutputReference.property.signalDetails">SignalDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsList">DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsOutputReference.property.warning">Warning</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsOutputReference.property.windowSize">WindowSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResults">DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResults</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Fap`<sup>Required</sup> <a name="Fap" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsOutputReference.property.fap"></a>

```csharp
public double Fap { get; }
```

- *Type:* double

---

##### `IsTrainingGoalAchieved`<sup>Required</sup> <a name="IsTrainingGoalAchieved" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsOutputReference.property.isTrainingGoalAchieved"></a>

```csharp
public IResolvable IsTrainingGoalAchieved { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Mae`<sup>Required</sup> <a name="Mae" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsOutputReference.property.mae"></a>

```csharp
public double Mae { get; }
```

- *Type:* double

---

##### `MaxInferenceSyncRows`<sup>Required</sup> <a name="MaxInferenceSyncRows" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsOutputReference.property.maxInferenceSyncRows"></a>

```csharp
public double MaxInferenceSyncRows { get; }
```

- *Type:* double

---

##### `MultivariateFap`<sup>Required</sup> <a name="MultivariateFap" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsOutputReference.property.multivariateFap"></a>

```csharp
public double MultivariateFap { get; }
```

- *Type:* double

---

##### `Rmse`<sup>Required</sup> <a name="Rmse" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsOutputReference.property.rmse"></a>

```csharp
public double Rmse { get; }
```

- *Type:* double

---

##### `RowReductionDetails`<sup>Required</sup> <a name="RowReductionDetails" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsOutputReference.property.rowReductionDetails"></a>

```csharp
public DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetailsList RowReductionDetails { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetailsList">DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetailsList</a>

---

##### `SignalDetails`<sup>Required</sup> <a name="SignalDetails" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsOutputReference.property.signalDetails"></a>

```csharp
public DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsList SignalDetails { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsList">DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsList</a>

---

##### `Warning`<sup>Required</sup> <a name="Warning" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsOutputReference.property.warning"></a>

```csharp
public string Warning { get; }
```

- *Type:* string

---

##### `WindowSize`<sup>Required</sup> <a name="WindowSize" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsOutputReference.property.windowSize"></a>

```csharp
public double WindowSize { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsOutputReference.property.internalValue"></a>

```csharp
public DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResults InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResults">DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResults</a>

---


### DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetailsList <a name="DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetailsList" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetailsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetailsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetailsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetailsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetailsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetailsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetailsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetailsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetailsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetailsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetailsList.get"></a>

```csharp
private DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetailsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetailsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetailsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetailsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetailsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetailsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetailsOutputReference <a name="DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetailsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetailsOutputReference.property.isReductionEnabled">IsReductionEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetailsOutputReference.property.reductionMethod">ReductionMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetailsOutputReference.property.reductionPercentage">ReductionPercentage</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetails">DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IsReductionEnabled`<sup>Required</sup> <a name="IsReductionEnabled" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetailsOutputReference.property.isReductionEnabled"></a>

```csharp
public IResolvable IsReductionEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `ReductionMethod`<sup>Required</sup> <a name="ReductionMethod" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetailsOutputReference.property.reductionMethod"></a>

```csharp
public string ReductionMethod { get; }
```

- *Type:* string

---

##### `ReductionPercentage`<sup>Required</sup> <a name="ReductionPercentage" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetailsOutputReference.property.reductionPercentage"></a>

```csharp
public double ReductionPercentage { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetailsOutputReference.property.internalValue"></a>

```csharp
public DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetails InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetails">DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetails</a>

---


### DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsList <a name="DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsList" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsList.get"></a>

```csharp
private DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsOutputReference <a name="DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsOutputReference.property.details">Details</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsOutputReference.property.fap">Fap</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsOutputReference.property.isQuantized">IsQuantized</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsOutputReference.property.max">Max</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsOutputReference.property.min">Min</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsOutputReference.property.mviRatio">MviRatio</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsOutputReference.property.signalName">SignalName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsOutputReference.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsOutputReference.property.std">Std</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetails">DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Details`<sup>Required</sup> <a name="Details" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsOutputReference.property.details"></a>

```csharp
public string Details { get; }
```

- *Type:* string

---

##### `Fap`<sup>Required</sup> <a name="Fap" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsOutputReference.property.fap"></a>

```csharp
public double Fap { get; }
```

- *Type:* double

---

##### `IsQuantized`<sup>Required</sup> <a name="IsQuantized" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsOutputReference.property.isQuantized"></a>

```csharp
public IResolvable IsQuantized { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Max`<sup>Required</sup> <a name="Max" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsOutputReference.property.max"></a>

```csharp
public double Max { get; }
```

- *Type:* double

---

##### `Min`<sup>Required</sup> <a name="Min" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsOutputReference.property.min"></a>

```csharp
public double Min { get; }
```

- *Type:* double

---

##### `MviRatio`<sup>Required</sup> <a name="MviRatio" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsOutputReference.property.mviRatio"></a>

```csharp
public double MviRatio { get; }
```

- *Type:* double

---

##### `SignalName`<sup>Required</sup> <a name="SignalName" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsOutputReference.property.signalName"></a>

```csharp
public string SignalName { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsOutputReference.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `Std`<sup>Required</sup> <a name="Std" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsOutputReference.property.std"></a>

```csharp
public double Std { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsOutputReference.property.internalValue"></a>

```csharp
public DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetails InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetails">DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetails</a>

---


### DataOciAiAnomalyDetectionModelsModelCollectionItemsOutputReference <a name="DataOciAiAnomalyDetectionModelsModelCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciAiAnomalyDetectionModelsModelCollectionItemsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsOutputReference.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsOutputReference.property.definedTags">DefinedTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsOutputReference.property.freeformTags">FreeformTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsOutputReference.property.lifecycleDetails">LifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsOutputReference.property.modelTrainingDetails">ModelTrainingDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsList">DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsOutputReference.property.modelTrainingResults">ModelTrainingResults</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsList">DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsOutputReference.property.projectId">ProjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsOutputReference.property.systemTags">SystemTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsOutputReference.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsOutputReference.property.timeUpdated">TimeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItems">DataOciAiAnomalyDetectionModelsModelCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsOutputReference.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsOutputReference.property.definedTags"></a>

```csharp
public StringMap DefinedTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsOutputReference.property.freeformTags"></a>

```csharp
public StringMap FreeformTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsOutputReference.property.lifecycleDetails"></a>

```csharp
public string LifecycleDetails { get; }
```

- *Type:* string

---

##### `ModelTrainingDetails`<sup>Required</sup> <a name="ModelTrainingDetails" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsOutputReference.property.modelTrainingDetails"></a>

```csharp
public DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsList ModelTrainingDetails { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsList">DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsList</a>

---

##### `ModelTrainingResults`<sup>Required</sup> <a name="ModelTrainingResults" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsOutputReference.property.modelTrainingResults"></a>

```csharp
public DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsList ModelTrainingResults { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsList">DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsList</a>

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsOutputReference.property.projectId"></a>

```csharp
public string ProjectId { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsOutputReference.property.systemTags"></a>

```csharp
public StringMap SystemTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsOutputReference.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsOutputReference.property.timeUpdated"></a>

```csharp
public string TimeUpdated { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsOutputReference.property.internalValue"></a>

```csharp
public DataOciAiAnomalyDetectionModelsModelCollectionItems InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItems">DataOciAiAnomalyDetectionModelsModelCollectionItems</a>

---


### DataOciAiAnomalyDetectionModelsModelCollectionList <a name="DataOciAiAnomalyDetectionModelsModelCollectionList" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciAiAnomalyDetectionModelsModelCollectionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionList.get"></a>

```csharp
private DataOciAiAnomalyDetectionModelsModelCollectionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciAiAnomalyDetectionModelsModelCollectionOutputReference <a name="DataOciAiAnomalyDetectionModelsModelCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciAiAnomalyDetectionModelsModelCollectionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsList">DataOciAiAnomalyDetectionModelsModelCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollection">DataOciAiAnomalyDetectionModelsModelCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionOutputReference.property.items"></a>

```csharp
public DataOciAiAnomalyDetectionModelsModelCollectionItemsList Items { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsList">DataOciAiAnomalyDetectionModelsModelCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionOutputReference.property.internalValue"></a>

```csharp
public DataOciAiAnomalyDetectionModelsModelCollection InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollection">DataOciAiAnomalyDetectionModelsModelCollection</a>

---



