# `dataOciAiAnomalyDetectionModel` Submodule <a name="`dataOciAiAnomalyDetectionModel` Submodule" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciAiAnomalyDetectionModel <a name="DataOciAiAnomalyDetectionModel" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModel"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_anomaly_detection_model oci_ai_anomaly_detection_model}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModel.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciAiAnomalyDetectionModel(Construct Scope, string Id, DataOciAiAnomalyDetectionModelConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModel.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModel.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModel.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelConfig">DataOciAiAnomalyDetectionModelConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModel.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModel.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModel.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelConfig">DataOciAiAnomalyDetectionModelConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModel.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModel.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModel.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModel.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModel.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModel.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModel.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModel.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModel.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModel.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModel.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModel.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModel.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModel.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModel.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModel.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModel.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModel.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModel.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModel.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModel.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModel.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModel.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModel.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModel.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModel.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModel.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModel.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModel.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModel.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModel.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModel.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModel.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModel.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModel.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModel.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModel.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModel.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModel.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModel.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModel.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModel.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModel.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModel.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModel.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModel.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModel.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModel.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModel.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModel.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModel.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciAiAnomalyDetectionModel resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModel.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciAiAnomalyDetectionModel.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModel.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModel.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciAiAnomalyDetectionModel.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModel.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModel.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciAiAnomalyDetectionModel.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModel.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModel.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciAiAnomalyDetectionModel.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciAiAnomalyDetectionModel resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModel.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModel.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciAiAnomalyDetectionModel to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModel.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciAiAnomalyDetectionModel that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_anomaly_detection_model#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModel.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciAiAnomalyDetectionModel to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModel.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModel.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModel.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModel.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModel.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModel.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModel.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModel.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModel.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModel.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModel.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModel.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModel.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModel.property.definedTags">DefinedTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModel.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModel.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModel.property.freeformTags">FreeformTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModel.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModel.property.lifecycleDetails">LifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModel.property.modelTrainingDetails">ModelTrainingDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingDetailsList">DataOciAiAnomalyDetectionModelModelTrainingDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModel.property.modelTrainingResults">ModelTrainingResults</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsList">DataOciAiAnomalyDetectionModelModelTrainingResultsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModel.property.projectId">ProjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModel.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModel.property.systemTags">SystemTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModel.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModel.property.timeUpdated">TimeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModel.property.modelIdInput">ModelIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModel.property.modelId">ModelId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModel.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModel.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModel.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModel.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModel.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModel.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModel.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModel.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModel.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModel.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModel.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModel.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModel.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModel.property.definedTags"></a>

```csharp
public StringMap DefinedTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModel.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModel.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModel.property.freeformTags"></a>

```csharp
public StringMap FreeformTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModel.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModel.property.lifecycleDetails"></a>

```csharp
public string LifecycleDetails { get; }
```

- *Type:* string

---

##### `ModelTrainingDetails`<sup>Required</sup> <a name="ModelTrainingDetails" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModel.property.modelTrainingDetails"></a>

```csharp
public DataOciAiAnomalyDetectionModelModelTrainingDetailsList ModelTrainingDetails { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingDetailsList">DataOciAiAnomalyDetectionModelModelTrainingDetailsList</a>

---

##### `ModelTrainingResults`<sup>Required</sup> <a name="ModelTrainingResults" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModel.property.modelTrainingResults"></a>

```csharp
public DataOciAiAnomalyDetectionModelModelTrainingResultsList ModelTrainingResults { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsList">DataOciAiAnomalyDetectionModelModelTrainingResultsList</a>

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModel.property.projectId"></a>

```csharp
public string ProjectId { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModel.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModel.property.systemTags"></a>

```csharp
public StringMap SystemTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModel.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModel.property.timeUpdated"></a>

```csharp
public string TimeUpdated { get; }
```

- *Type:* string

---

##### `ModelIdInput`<sup>Optional</sup> <a name="ModelIdInput" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModel.property.modelIdInput"></a>

```csharp
public string ModelIdInput { get; }
```

- *Type:* string

---

##### `ModelId`<sup>Required</sup> <a name="ModelId" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModel.property.modelId"></a>

```csharp
public string ModelId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModel.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModel.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciAiAnomalyDetectionModelConfig <a name="DataOciAiAnomalyDetectionModelConfig" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciAiAnomalyDetectionModelConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ModelId
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelConfig.property.modelId">ModelId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_anomaly_detection_model#model_id DataOciAiAnomalyDetectionModel#model_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ModelId`<sup>Required</sup> <a name="ModelId" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelConfig.property.modelId"></a>

```csharp
public string ModelId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_anomaly_detection_model#model_id DataOciAiAnomalyDetectionModel#model_id}.

---

### DataOciAiAnomalyDetectionModelModelTrainingDetails <a name="DataOciAiAnomalyDetectionModelModelTrainingDetails" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingDetails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciAiAnomalyDetectionModelModelTrainingDetails {

};
```


### DataOciAiAnomalyDetectionModelModelTrainingResults <a name="DataOciAiAnomalyDetectionModelModelTrainingResults" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResults"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResults.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciAiAnomalyDetectionModelModelTrainingResults {

};
```


### DataOciAiAnomalyDetectionModelModelTrainingResultsRowReductionDetails <a name="DataOciAiAnomalyDetectionModelModelTrainingResultsRowReductionDetails" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsRowReductionDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsRowReductionDetails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciAiAnomalyDetectionModelModelTrainingResultsRowReductionDetails {

};
```


### DataOciAiAnomalyDetectionModelModelTrainingResultsSignalDetails <a name="DataOciAiAnomalyDetectionModelModelTrainingResultsSignalDetails" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsSignalDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsSignalDetails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciAiAnomalyDetectionModelModelTrainingResultsSignalDetails {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciAiAnomalyDetectionModelModelTrainingDetailsList <a name="DataOciAiAnomalyDetectionModelModelTrainingDetailsList" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingDetailsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciAiAnomalyDetectionModelModelTrainingDetailsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingDetailsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingDetailsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingDetailsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingDetailsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingDetailsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingDetailsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingDetailsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingDetailsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingDetailsList.get"></a>

```csharp
private DataOciAiAnomalyDetectionModelModelTrainingDetailsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingDetailsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingDetailsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingDetailsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingDetailsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingDetailsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciAiAnomalyDetectionModelModelTrainingDetailsOutputReference <a name="DataOciAiAnomalyDetectionModelModelTrainingDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingDetailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciAiAnomalyDetectionModelModelTrainingDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingDetailsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingDetailsOutputReference.property.algorithmHint">AlgorithmHint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingDetailsOutputReference.property.dataAssetIds">DataAssetIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingDetailsOutputReference.property.targetFap">TargetFap</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingDetailsOutputReference.property.trainingFraction">TrainingFraction</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingDetailsOutputReference.property.windowSize">WindowSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingDetails">DataOciAiAnomalyDetectionModelModelTrainingDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AlgorithmHint`<sup>Required</sup> <a name="AlgorithmHint" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingDetailsOutputReference.property.algorithmHint"></a>

```csharp
public string AlgorithmHint { get; }
```

- *Type:* string

---

##### `DataAssetIds`<sup>Required</sup> <a name="DataAssetIds" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingDetailsOutputReference.property.dataAssetIds"></a>

```csharp
public string[] DataAssetIds { get; }
```

- *Type:* string[]

---

##### `TargetFap`<sup>Required</sup> <a name="TargetFap" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingDetailsOutputReference.property.targetFap"></a>

```csharp
public double TargetFap { get; }
```

- *Type:* double

---

##### `TrainingFraction`<sup>Required</sup> <a name="TrainingFraction" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingDetailsOutputReference.property.trainingFraction"></a>

```csharp
public double TrainingFraction { get; }
```

- *Type:* double

---

##### `WindowSize`<sup>Required</sup> <a name="WindowSize" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingDetailsOutputReference.property.windowSize"></a>

```csharp
public double WindowSize { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingDetailsOutputReference.property.internalValue"></a>

```csharp
public DataOciAiAnomalyDetectionModelModelTrainingDetails InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingDetails">DataOciAiAnomalyDetectionModelModelTrainingDetails</a>

---


### DataOciAiAnomalyDetectionModelModelTrainingResultsList <a name="DataOciAiAnomalyDetectionModelModelTrainingResultsList" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciAiAnomalyDetectionModelModelTrainingResultsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsList.get"></a>

```csharp
private DataOciAiAnomalyDetectionModelModelTrainingResultsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciAiAnomalyDetectionModelModelTrainingResultsOutputReference <a name="DataOciAiAnomalyDetectionModelModelTrainingResultsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciAiAnomalyDetectionModelModelTrainingResultsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsOutputReference.property.fap">Fap</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsOutputReference.property.isTrainingGoalAchieved">IsTrainingGoalAchieved</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsOutputReference.property.mae">Mae</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsOutputReference.property.maxInferenceSyncRows">MaxInferenceSyncRows</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsOutputReference.property.multivariateFap">MultivariateFap</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsOutputReference.property.rmse">Rmse</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsOutputReference.property.rowReductionDetails">RowReductionDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsList">DataOciAiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsOutputReference.property.signalDetails">SignalDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsSignalDetailsList">DataOciAiAnomalyDetectionModelModelTrainingResultsSignalDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsOutputReference.property.warning">Warning</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsOutputReference.property.windowSize">WindowSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResults">DataOciAiAnomalyDetectionModelModelTrainingResults</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Fap`<sup>Required</sup> <a name="Fap" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsOutputReference.property.fap"></a>

```csharp
public double Fap { get; }
```

- *Type:* double

---

##### `IsTrainingGoalAchieved`<sup>Required</sup> <a name="IsTrainingGoalAchieved" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsOutputReference.property.isTrainingGoalAchieved"></a>

```csharp
public IResolvable IsTrainingGoalAchieved { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Mae`<sup>Required</sup> <a name="Mae" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsOutputReference.property.mae"></a>

```csharp
public double Mae { get; }
```

- *Type:* double

---

##### `MaxInferenceSyncRows`<sup>Required</sup> <a name="MaxInferenceSyncRows" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsOutputReference.property.maxInferenceSyncRows"></a>

```csharp
public double MaxInferenceSyncRows { get; }
```

- *Type:* double

---

##### `MultivariateFap`<sup>Required</sup> <a name="MultivariateFap" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsOutputReference.property.multivariateFap"></a>

```csharp
public double MultivariateFap { get; }
```

- *Type:* double

---

##### `Rmse`<sup>Required</sup> <a name="Rmse" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsOutputReference.property.rmse"></a>

```csharp
public double Rmse { get; }
```

- *Type:* double

---

##### `RowReductionDetails`<sup>Required</sup> <a name="RowReductionDetails" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsOutputReference.property.rowReductionDetails"></a>

```csharp
public DataOciAiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsList RowReductionDetails { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsList">DataOciAiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsList</a>

---

##### `SignalDetails`<sup>Required</sup> <a name="SignalDetails" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsOutputReference.property.signalDetails"></a>

```csharp
public DataOciAiAnomalyDetectionModelModelTrainingResultsSignalDetailsList SignalDetails { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsSignalDetailsList">DataOciAiAnomalyDetectionModelModelTrainingResultsSignalDetailsList</a>

---

##### `Warning`<sup>Required</sup> <a name="Warning" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsOutputReference.property.warning"></a>

```csharp
public string Warning { get; }
```

- *Type:* string

---

##### `WindowSize`<sup>Required</sup> <a name="WindowSize" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsOutputReference.property.windowSize"></a>

```csharp
public double WindowSize { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsOutputReference.property.internalValue"></a>

```csharp
public DataOciAiAnomalyDetectionModelModelTrainingResults InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResults">DataOciAiAnomalyDetectionModelModelTrainingResults</a>

---


### DataOciAiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsList <a name="DataOciAiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsList" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciAiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsList.get"></a>

```csharp
private DataOciAiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciAiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsOutputReference <a name="DataOciAiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciAiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsOutputReference.property.isReductionEnabled">IsReductionEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsOutputReference.property.reductionMethod">ReductionMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsOutputReference.property.reductionPercentage">ReductionPercentage</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsRowReductionDetails">DataOciAiAnomalyDetectionModelModelTrainingResultsRowReductionDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IsReductionEnabled`<sup>Required</sup> <a name="IsReductionEnabled" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsOutputReference.property.isReductionEnabled"></a>

```csharp
public IResolvable IsReductionEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `ReductionMethod`<sup>Required</sup> <a name="ReductionMethod" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsOutputReference.property.reductionMethod"></a>

```csharp
public string ReductionMethod { get; }
```

- *Type:* string

---

##### `ReductionPercentage`<sup>Required</sup> <a name="ReductionPercentage" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsOutputReference.property.reductionPercentage"></a>

```csharp
public double ReductionPercentage { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsOutputReference.property.internalValue"></a>

```csharp
public DataOciAiAnomalyDetectionModelModelTrainingResultsRowReductionDetails InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsRowReductionDetails">DataOciAiAnomalyDetectionModelModelTrainingResultsRowReductionDetails</a>

---


### DataOciAiAnomalyDetectionModelModelTrainingResultsSignalDetailsList <a name="DataOciAiAnomalyDetectionModelModelTrainingResultsSignalDetailsList" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsSignalDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsSignalDetailsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciAiAnomalyDetectionModelModelTrainingResultsSignalDetailsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsSignalDetailsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsSignalDetailsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsSignalDetailsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsSignalDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsSignalDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsSignalDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsSignalDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsSignalDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsSignalDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsSignalDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsSignalDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsSignalDetailsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsSignalDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsSignalDetailsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsSignalDetailsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsSignalDetailsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsSignalDetailsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsSignalDetailsList.get"></a>

```csharp
private DataOciAiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsSignalDetailsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsSignalDetailsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsSignalDetailsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsSignalDetailsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsSignalDetailsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciAiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference <a name="DataOciAiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciAiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference.property.details">Details</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference.property.fap">Fap</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference.property.isQuantized">IsQuantized</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference.property.max">Max</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference.property.min">Min</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference.property.mviRatio">MviRatio</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference.property.signalName">SignalName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference.property.std">Std</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsSignalDetails">DataOciAiAnomalyDetectionModelModelTrainingResultsSignalDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Details`<sup>Required</sup> <a name="Details" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference.property.details"></a>

```csharp
public string Details { get; }
```

- *Type:* string

---

##### `Fap`<sup>Required</sup> <a name="Fap" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference.property.fap"></a>

```csharp
public double Fap { get; }
```

- *Type:* double

---

##### `IsQuantized`<sup>Required</sup> <a name="IsQuantized" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference.property.isQuantized"></a>

```csharp
public IResolvable IsQuantized { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Max`<sup>Required</sup> <a name="Max" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference.property.max"></a>

```csharp
public double Max { get; }
```

- *Type:* double

---

##### `Min`<sup>Required</sup> <a name="Min" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference.property.min"></a>

```csharp
public double Min { get; }
```

- *Type:* double

---

##### `MviRatio`<sup>Required</sup> <a name="MviRatio" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference.property.mviRatio"></a>

```csharp
public double MviRatio { get; }
```

- *Type:* double

---

##### `SignalName`<sup>Required</sup> <a name="SignalName" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference.property.signalName"></a>

```csharp
public string SignalName { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `Std`<sup>Required</sup> <a name="Std" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference.property.std"></a>

```csharp
public double Std { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference.property.internalValue"></a>

```csharp
public DataOciAiAnomalyDetectionModelModelTrainingResultsSignalDetails InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsSignalDetails">DataOciAiAnomalyDetectionModelModelTrainingResultsSignalDetails</a>

---



