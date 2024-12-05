# `dataOciAiAnomalyDetectionDataAssets` Submodule <a name="`dataOciAiAnomalyDetectionDataAssets` Submodule" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciAiAnomalyDetectionDataAssets <a name="DataOciAiAnomalyDetectionDataAssets" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_anomaly_detection_data_assets oci_ai_anomaly_detection_data_assets}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciAiAnomalyDetectionDataAssets(Construct Scope, string Id, DataOciAiAnomalyDetectionDataAssetsConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsConfig">DataOciAiAnomalyDetectionDataAssetsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsConfig">DataOciAiAnomalyDetectionDataAssetsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets.resetProjectId">ResetProjectId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets.resetState">ResetState</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets.putFilter"></a>

```csharp
private void PutFilter(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets.putFilter.parameter.value"></a>

- *Type:* object

---

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetProjectId` <a name="ResetProjectId" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets.resetProjectId"></a>

```csharp
private void ResetProjectId()
```

##### `ResetState` <a name="ResetState" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets.resetState"></a>

```csharp
private void ResetState()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciAiAnomalyDetectionDataAssets resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciAiAnomalyDetectionDataAssets.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciAiAnomalyDetectionDataAssets.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciAiAnomalyDetectionDataAssets.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciAiAnomalyDetectionDataAssets.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciAiAnomalyDetectionDataAssets resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciAiAnomalyDetectionDataAssets to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciAiAnomalyDetectionDataAssets that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_anomaly_detection_data_assets#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciAiAnomalyDetectionDataAssets to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets.property.dataAssetCollection">DataAssetCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionList">DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsFilterList">DataOciAiAnomalyDetectionDataAssetsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets.property.filterInput">FilterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets.property.projectIdInput">ProjectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets.property.stateInput">StateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets.property.projectId">ProjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets.property.state">State</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `DataAssetCollection`<sup>Required</sup> <a name="DataAssetCollection" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets.property.dataAssetCollection"></a>

```csharp
public DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionList DataAssetCollection { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionList">DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionList</a>

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets.property.filter"></a>

```csharp
public DataOciAiAnomalyDetectionDataAssetsFilterList Filter { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsFilterList">DataOciAiAnomalyDetectionDataAssetsFilterList</a>

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets.property.filterInput"></a>

```csharp
public object FilterInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets.property.projectIdInput"></a>

```csharp
public string ProjectIdInput { get; }
```

- *Type:* string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets.property.stateInput"></a>

```csharp
public string StateInput { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets.property.projectId"></a>

```csharp
public string ProjectId { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciAiAnomalyDetectionDataAssetsConfig <a name="DataOciAiAnomalyDetectionDataAssetsConfig" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciAiAnomalyDetectionDataAssetsConfig {
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
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_anomaly_detection_data_assets#compartment_id DataOciAiAnomalyDetectionDataAssets#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_anomaly_detection_data_assets#display_name DataOciAiAnomalyDetectionDataAssets#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsConfig.property.filter">Filter</a></code> | <code>object</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_anomaly_detection_data_assets#id DataOciAiAnomalyDetectionDataAssets#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsConfig.property.projectId">ProjectId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_anomaly_detection_data_assets#project_id DataOciAiAnomalyDetectionDataAssets#project_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsConfig.property.state">State</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_anomaly_detection_data_assets#state DataOciAiAnomalyDetectionDataAssets#state}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_anomaly_detection_data_assets#compartment_id DataOciAiAnomalyDetectionDataAssets#compartment_id}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_anomaly_detection_data_assets#display_name DataOciAiAnomalyDetectionDataAssets#display_name}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsConfig.property.filter"></a>

```csharp
public object Filter { get; set; }
```

- *Type:* object

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_anomaly_detection_data_assets#filter DataOciAiAnomalyDetectionDataAssets#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_anomaly_detection_data_assets#id DataOciAiAnomalyDetectionDataAssets#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ProjectId`<sup>Optional</sup> <a name="ProjectId" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsConfig.property.projectId"></a>

```csharp
public string ProjectId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_anomaly_detection_data_assets#project_id DataOciAiAnomalyDetectionDataAssets#project_id}.

---

##### `State`<sup>Optional</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsConfig.property.state"></a>

```csharp
public string State { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_anomaly_detection_data_assets#state DataOciAiAnomalyDetectionDataAssets#state}.

---

### DataOciAiAnomalyDetectionDataAssetsDataAssetCollection <a name="DataOciAiAnomalyDetectionDataAssetsDataAssetCollection" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollection.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciAiAnomalyDetectionDataAssetsDataAssetCollection {

};
```


### DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItems <a name="DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItems.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItems {

};
```


### DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetails <a name="DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetails" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetails {

};
```


### DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsVersionSpecificDetails <a name="DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsVersionSpecificDetails" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsVersionSpecificDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsVersionSpecificDetails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsVersionSpecificDetails {

};
```


### DataOciAiAnomalyDetectionDataAssetsFilter <a name="DataOciAiAnomalyDetectionDataAssetsFilter" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciAiAnomalyDetectionDataAssetsFilter {
    string Name,
    string[] Values,
    object Regex = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsFilter.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_anomaly_detection_data_assets#name DataOciAiAnomalyDetectionDataAssets#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsFilter.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_anomaly_detection_data_assets#values DataOciAiAnomalyDetectionDataAssets#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsFilter.property.regex">Regex</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_anomaly_detection_data_assets#regex DataOciAiAnomalyDetectionDataAssets#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsFilter.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_anomaly_detection_data_assets#name DataOciAiAnomalyDetectionDataAssets#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsFilter.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_anomaly_detection_data_assets#values DataOciAiAnomalyDetectionDataAssets#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsFilter.property.regex"></a>

```csharp
public object Regex { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_anomaly_detection_data_assets#regex DataOciAiAnomalyDetectionDataAssets#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsList <a name="DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsList" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsList.get"></a>

```csharp
private DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsOutputReference <a name="DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsOutputReference.property.atpPasswordSecretId">AtpPasswordSecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsOutputReference.property.atpUserName">AtpUserName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsOutputReference.property.bucket">Bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsOutputReference.property.cwalletFileSecretId">CwalletFileSecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsOutputReference.property.databaseName">DatabaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsOutputReference.property.dataSourceType">DataSourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsOutputReference.property.ewalletFileSecretId">EwalletFileSecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsOutputReference.property.keyStoreFileSecretId">KeyStoreFileSecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsOutputReference.property.measurementName">MeasurementName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsOutputReference.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsOutputReference.property.object">Object</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsOutputReference.property.ojdbcFileSecretId">OjdbcFileSecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsOutputReference.property.passwordSecretId">PasswordSecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsOutputReference.property.tableName">TableName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsOutputReference.property.tnsnamesFileSecretId">TnsnamesFileSecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsOutputReference.property.truststoreFileSecretId">TruststoreFileSecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsOutputReference.property.url">Url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsOutputReference.property.userName">UserName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsOutputReference.property.versionSpecificDetails">VersionSpecificDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsVersionSpecificDetailsList">DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsVersionSpecificDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsOutputReference.property.walletPasswordSecretId">WalletPasswordSecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetails">DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AtpPasswordSecretId`<sup>Required</sup> <a name="AtpPasswordSecretId" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsOutputReference.property.atpPasswordSecretId"></a>

```csharp
public string AtpPasswordSecretId { get; }
```

- *Type:* string

---

##### `AtpUserName`<sup>Required</sup> <a name="AtpUserName" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsOutputReference.property.atpUserName"></a>

```csharp
public string AtpUserName { get; }
```

- *Type:* string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsOutputReference.property.bucket"></a>

```csharp
public string Bucket { get; }
```

- *Type:* string

---

##### `CwalletFileSecretId`<sup>Required</sup> <a name="CwalletFileSecretId" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsOutputReference.property.cwalletFileSecretId"></a>

```csharp
public string CwalletFileSecretId { get; }
```

- *Type:* string

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsOutputReference.property.databaseName"></a>

```csharp
public string DatabaseName { get; }
```

- *Type:* string

---

##### `DataSourceType`<sup>Required</sup> <a name="DataSourceType" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsOutputReference.property.dataSourceType"></a>

```csharp
public string DataSourceType { get; }
```

- *Type:* string

---

##### `EwalletFileSecretId`<sup>Required</sup> <a name="EwalletFileSecretId" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsOutputReference.property.ewalletFileSecretId"></a>

```csharp
public string EwalletFileSecretId { get; }
```

- *Type:* string

---

##### `KeyStoreFileSecretId`<sup>Required</sup> <a name="KeyStoreFileSecretId" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsOutputReference.property.keyStoreFileSecretId"></a>

```csharp
public string KeyStoreFileSecretId { get; }
```

- *Type:* string

---

##### `MeasurementName`<sup>Required</sup> <a name="MeasurementName" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsOutputReference.property.measurementName"></a>

```csharp
public string MeasurementName { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsOutputReference.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `Object`<sup>Required</sup> <a name="Object" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsOutputReference.property.object"></a>

```csharp
public string Object { get; }
```

- *Type:* string

---

##### `OjdbcFileSecretId`<sup>Required</sup> <a name="OjdbcFileSecretId" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsOutputReference.property.ojdbcFileSecretId"></a>

```csharp
public string OjdbcFileSecretId { get; }
```

- *Type:* string

---

##### `PasswordSecretId`<sup>Required</sup> <a name="PasswordSecretId" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsOutputReference.property.passwordSecretId"></a>

```csharp
public string PasswordSecretId { get; }
```

- *Type:* string

---

##### `TableName`<sup>Required</sup> <a name="TableName" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsOutputReference.property.tableName"></a>

```csharp
public string TableName { get; }
```

- *Type:* string

---

##### `TnsnamesFileSecretId`<sup>Required</sup> <a name="TnsnamesFileSecretId" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsOutputReference.property.tnsnamesFileSecretId"></a>

```csharp
public string TnsnamesFileSecretId { get; }
```

- *Type:* string

---

##### `TruststoreFileSecretId`<sup>Required</sup> <a name="TruststoreFileSecretId" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsOutputReference.property.truststoreFileSecretId"></a>

```csharp
public string TruststoreFileSecretId { get; }
```

- *Type:* string

---

##### `Url`<sup>Required</sup> <a name="Url" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsOutputReference.property.url"></a>

```csharp
public string Url { get; }
```

- *Type:* string

---

##### `UserName`<sup>Required</sup> <a name="UserName" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsOutputReference.property.userName"></a>

```csharp
public string UserName { get; }
```

- *Type:* string

---

##### `VersionSpecificDetails`<sup>Required</sup> <a name="VersionSpecificDetails" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsOutputReference.property.versionSpecificDetails"></a>

```csharp
public DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsVersionSpecificDetailsList VersionSpecificDetails { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsVersionSpecificDetailsList">DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsVersionSpecificDetailsList</a>

---

##### `WalletPasswordSecretId`<sup>Required</sup> <a name="WalletPasswordSecretId" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsOutputReference.property.walletPasswordSecretId"></a>

```csharp
public string WalletPasswordSecretId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsOutputReference.property.internalValue"></a>

```csharp
public DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetails InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetails">DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetails</a>

---


### DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsVersionSpecificDetailsList <a name="DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsVersionSpecificDetailsList" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsVersionSpecificDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsVersionSpecificDetailsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsVersionSpecificDetailsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsVersionSpecificDetailsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsVersionSpecificDetailsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsVersionSpecificDetailsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsVersionSpecificDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsVersionSpecificDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsVersionSpecificDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsVersionSpecificDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsVersionSpecificDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsVersionSpecificDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsVersionSpecificDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsVersionSpecificDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsVersionSpecificDetailsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsVersionSpecificDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsVersionSpecificDetailsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsVersionSpecificDetailsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsVersionSpecificDetailsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsVersionSpecificDetailsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsVersionSpecificDetailsList.get"></a>

```csharp
private DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsVersionSpecificDetailsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsVersionSpecificDetailsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsVersionSpecificDetailsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsVersionSpecificDetailsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsVersionSpecificDetailsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsVersionSpecificDetailsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsVersionSpecificDetailsOutputReference <a name="DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsVersionSpecificDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsVersionSpecificDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsVersionSpecificDetailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsVersionSpecificDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsVersionSpecificDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsVersionSpecificDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsVersionSpecificDetailsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsVersionSpecificDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsVersionSpecificDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsVersionSpecificDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsVersionSpecificDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsVersionSpecificDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsVersionSpecificDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsVersionSpecificDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsVersionSpecificDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsVersionSpecificDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsVersionSpecificDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsVersionSpecificDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsVersionSpecificDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsVersionSpecificDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsVersionSpecificDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsVersionSpecificDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsVersionSpecificDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsVersionSpecificDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsVersionSpecificDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsVersionSpecificDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsVersionSpecificDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsVersionSpecificDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsVersionSpecificDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsVersionSpecificDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsVersionSpecificDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsVersionSpecificDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsVersionSpecificDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsVersionSpecificDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsVersionSpecificDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsVersionSpecificDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsVersionSpecificDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsVersionSpecificDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsVersionSpecificDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsVersionSpecificDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsVersionSpecificDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsVersionSpecificDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsVersionSpecificDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsVersionSpecificDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsVersionSpecificDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsVersionSpecificDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsVersionSpecificDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsVersionSpecificDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsVersionSpecificDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsVersionSpecificDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsVersionSpecificDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsVersionSpecificDetailsOutputReference.property.bucket">Bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsVersionSpecificDetailsOutputReference.property.databaseName">DatabaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsVersionSpecificDetailsOutputReference.property.influxVersion">InfluxVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsVersionSpecificDetailsOutputReference.property.organizationName">OrganizationName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsVersionSpecificDetailsOutputReference.property.retentionPolicyName">RetentionPolicyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsVersionSpecificDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsVersionSpecificDetails">DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsVersionSpecificDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsVersionSpecificDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsVersionSpecificDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsVersionSpecificDetailsOutputReference.property.bucket"></a>

```csharp
public string Bucket { get; }
```

- *Type:* string

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsVersionSpecificDetailsOutputReference.property.databaseName"></a>

```csharp
public string DatabaseName { get; }
```

- *Type:* string

---

##### `InfluxVersion`<sup>Required</sup> <a name="InfluxVersion" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsVersionSpecificDetailsOutputReference.property.influxVersion"></a>

```csharp
public string InfluxVersion { get; }
```

- *Type:* string

---

##### `OrganizationName`<sup>Required</sup> <a name="OrganizationName" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsVersionSpecificDetailsOutputReference.property.organizationName"></a>

```csharp
public string OrganizationName { get; }
```

- *Type:* string

---

##### `RetentionPolicyName`<sup>Required</sup> <a name="RetentionPolicyName" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsVersionSpecificDetailsOutputReference.property.retentionPolicyName"></a>

```csharp
public string RetentionPolicyName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsVersionSpecificDetailsOutputReference.property.internalValue"></a>

```csharp
public DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsVersionSpecificDetails InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsVersionSpecificDetails">DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsVersionSpecificDetails</a>

---


### DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsList <a name="DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsList.get"></a>

```csharp
private DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsOutputReference <a name="DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsOutputReference.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsOutputReference.property.dataSourceDetails">DataSourceDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsList">DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsOutputReference.property.definedTags">DefinedTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsOutputReference.property.freeformTags">FreeformTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsOutputReference.property.privateEndpointId">PrivateEndpointId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsOutputReference.property.projectId">ProjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsOutputReference.property.systemTags">SystemTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsOutputReference.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsOutputReference.property.timeUpdated">TimeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItems">DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsOutputReference.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `DataSourceDetails`<sup>Required</sup> <a name="DataSourceDetails" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsOutputReference.property.dataSourceDetails"></a>

```csharp
public DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsList DataSourceDetails { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsList">DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsList</a>

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsOutputReference.property.definedTags"></a>

```csharp
public StringMap DefinedTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsOutputReference.property.freeformTags"></a>

```csharp
public StringMap FreeformTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `PrivateEndpointId`<sup>Required</sup> <a name="PrivateEndpointId" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsOutputReference.property.privateEndpointId"></a>

```csharp
public string PrivateEndpointId { get; }
```

- *Type:* string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsOutputReference.property.projectId"></a>

```csharp
public string ProjectId { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsOutputReference.property.systemTags"></a>

```csharp
public StringMap SystemTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsOutputReference.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsOutputReference.property.timeUpdated"></a>

```csharp
public string TimeUpdated { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsOutputReference.property.internalValue"></a>

```csharp
public DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItems InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItems">DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItems</a>

---


### DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionList <a name="DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionList" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionList.get"></a>

```csharp
private DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionOutputReference <a name="DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsList">DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollection">DataOciAiAnomalyDetectionDataAssetsDataAssetCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionOutputReference.property.items"></a>

```csharp
public DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsList Items { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsList">DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionOutputReference.property.internalValue"></a>

```csharp
public DataOciAiAnomalyDetectionDataAssetsDataAssetCollection InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollection">DataOciAiAnomalyDetectionDataAssetsDataAssetCollection</a>

---


### DataOciAiAnomalyDetectionDataAssetsFilterList <a name="DataOciAiAnomalyDetectionDataAssetsFilterList" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsFilterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciAiAnomalyDetectionDataAssetsFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsFilterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsFilterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsFilterList.get"></a>

```csharp
private DataOciAiAnomalyDetectionDataAssetsFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsFilterList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsFilterList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciAiAnomalyDetectionDataAssetsFilterOutputReference <a name="DataOciAiAnomalyDetectionDataAssetsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciAiAnomalyDetectionDataAssetsFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsFilterOutputReference.resetRegex"></a>

```csharp
private void ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsFilterOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsFilterOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsFilterOutputReference.property.regex">Regex</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsFilterOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsFilterOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsFilterOutputReference.property.regexInput"></a>

```csharp
public object RegexInput { get; }
```

- *Type:* object

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsFilterOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsFilterOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsFilterOutputReference.property.regex"></a>

```csharp
public object Regex { get; }
```

- *Type:* object

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsFilterOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsFilterOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



