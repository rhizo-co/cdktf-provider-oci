# `dataOciAiAnomalyDetectionDetectAnomalyJob` Submodule <a name="`dataOciAiAnomalyDetectionDetectAnomalyJob` Submodule" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciAiAnomalyDetectionDetectAnomalyJob <a name="DataOciAiAnomalyDetectionDetectAnomalyJob" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJob"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_anomaly_detection_detect_anomaly_job oci_ai_anomaly_detection_detect_anomaly_job}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJob.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciAiAnomalyDetectionDetectAnomalyJob(Construct Scope, string Id, DataOciAiAnomalyDetectionDetectAnomalyJobConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJob.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJob.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJob.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobConfig">DataOciAiAnomalyDetectionDetectAnomalyJobConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJob.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJob.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJob.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobConfig">DataOciAiAnomalyDetectionDetectAnomalyJobConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJob.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJob.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJob.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJob.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJob.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJob.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJob.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJob.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJob.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJob.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJob.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJob.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJob.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJob.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJob.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJob.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJob.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJob.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJob.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJob.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJob.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJob.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJob.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJob.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJob.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJob.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJob.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJob.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJob.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJob.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJob.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJob.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJob.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJob.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJob.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJob.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJob.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJob.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJob.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJob.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJob.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJob.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJob.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJob.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJob.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJob.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJob.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJob.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJob.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJob.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJob.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciAiAnomalyDetectionDetectAnomalyJob resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJob.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciAiAnomalyDetectionDetectAnomalyJob.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJob.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJob.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciAiAnomalyDetectionDetectAnomalyJob.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJob.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJob.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciAiAnomalyDetectionDetectAnomalyJob.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJob.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJob.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciAiAnomalyDetectionDetectAnomalyJob.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciAiAnomalyDetectionDetectAnomalyJob resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJob.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJob.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciAiAnomalyDetectionDetectAnomalyJob to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJob.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciAiAnomalyDetectionDetectAnomalyJob that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_anomaly_detection_detect_anomaly_job#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJob.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciAiAnomalyDetectionDetectAnomalyJob to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJob.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJob.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJob.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJob.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJob.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJob.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJob.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJob.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJob.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJob.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJob.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJob.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJob.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJob.property.definedTags">DefinedTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJob.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJob.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJob.property.freeformTags">FreeformTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJob.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJob.property.inputDetails">InputDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsList">DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJob.property.lifecycleStateDetails">LifecycleStateDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJob.property.modelId">ModelId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJob.property.outputDetails">OutputDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobOutputDetailsList">DataOciAiAnomalyDetectionDetectAnomalyJobOutputDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJob.property.projectId">ProjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJob.property.sensitivity">Sensitivity</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJob.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJob.property.systemTags">SystemTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJob.property.timeAccepted">TimeAccepted</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJob.property.timeFinished">TimeFinished</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJob.property.timeStarted">TimeStarted</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJob.property.detectAnomalyJobIdInput">DetectAnomalyJobIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJob.property.detectAnomalyJobId">DetectAnomalyJobId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJob.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJob.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJob.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJob.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJob.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJob.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJob.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJob.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJob.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJob.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJob.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJob.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJob.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJob.property.definedTags"></a>

```csharp
public StringMap DefinedTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJob.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJob.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJob.property.freeformTags"></a>

```csharp
public StringMap FreeformTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJob.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InputDetails`<sup>Required</sup> <a name="InputDetails" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJob.property.inputDetails"></a>

```csharp
public DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsList InputDetails { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsList">DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsList</a>

---

##### `LifecycleStateDetails`<sup>Required</sup> <a name="LifecycleStateDetails" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJob.property.lifecycleStateDetails"></a>

```csharp
public string LifecycleStateDetails { get; }
```

- *Type:* string

---

##### `ModelId`<sup>Required</sup> <a name="ModelId" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJob.property.modelId"></a>

```csharp
public string ModelId { get; }
```

- *Type:* string

---

##### `OutputDetails`<sup>Required</sup> <a name="OutputDetails" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJob.property.outputDetails"></a>

```csharp
public DataOciAiAnomalyDetectionDetectAnomalyJobOutputDetailsList OutputDetails { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobOutputDetailsList">DataOciAiAnomalyDetectionDetectAnomalyJobOutputDetailsList</a>

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJob.property.projectId"></a>

```csharp
public string ProjectId { get; }
```

- *Type:* string

---

##### `Sensitivity`<sup>Required</sup> <a name="Sensitivity" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJob.property.sensitivity"></a>

```csharp
public double Sensitivity { get; }
```

- *Type:* double

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJob.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJob.property.systemTags"></a>

```csharp
public StringMap SystemTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `TimeAccepted`<sup>Required</sup> <a name="TimeAccepted" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJob.property.timeAccepted"></a>

```csharp
public string TimeAccepted { get; }
```

- *Type:* string

---

##### `TimeFinished`<sup>Required</sup> <a name="TimeFinished" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJob.property.timeFinished"></a>

```csharp
public string TimeFinished { get; }
```

- *Type:* string

---

##### `TimeStarted`<sup>Required</sup> <a name="TimeStarted" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJob.property.timeStarted"></a>

```csharp
public string TimeStarted { get; }
```

- *Type:* string

---

##### `DetectAnomalyJobIdInput`<sup>Optional</sup> <a name="DetectAnomalyJobIdInput" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJob.property.detectAnomalyJobIdInput"></a>

```csharp
public string DetectAnomalyJobIdInput { get; }
```

- *Type:* string

---

##### `DetectAnomalyJobId`<sup>Required</sup> <a name="DetectAnomalyJobId" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJob.property.detectAnomalyJobId"></a>

```csharp
public string DetectAnomalyJobId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJob.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJob.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciAiAnomalyDetectionDetectAnomalyJobConfig <a name="DataOciAiAnomalyDetectionDetectAnomalyJobConfig" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciAiAnomalyDetectionDetectAnomalyJobConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string DetectAnomalyJobId
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobConfig.property.detectAnomalyJobId">DetectAnomalyJobId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_anomaly_detection_detect_anomaly_job#detect_anomaly_job_id DataOciAiAnomalyDetectionDetectAnomalyJob#detect_anomaly_job_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `DetectAnomalyJobId`<sup>Required</sup> <a name="DetectAnomalyJobId" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobConfig.property.detectAnomalyJobId"></a>

```csharp
public string DetectAnomalyJobId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_anomaly_detection_detect_anomaly_job#detect_anomaly_job_id DataOciAiAnomalyDetectionDetectAnomalyJob#detect_anomaly_job_id}.

---

### DataOciAiAnomalyDetectionDetectAnomalyJobInputDetails <a name="DataOciAiAnomalyDetectionDetectAnomalyJobInputDetails" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciAiAnomalyDetectionDetectAnomalyJobInputDetails {

};
```


### DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsData <a name="DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsData" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsData"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsData.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsData {

};
```


### DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocations <a name="DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocations" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocations"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocations.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocations {

};
```


### DataOciAiAnomalyDetectionDetectAnomalyJobOutputDetails <a name="DataOciAiAnomalyDetectionDetectAnomalyJobOutputDetails" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobOutputDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobOutputDetails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciAiAnomalyDetectionDetectAnomalyJobOutputDetails {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsDataList <a name="DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsDataList" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsDataList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsDataList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsDataList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsDataList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsDataList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsDataList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsDataList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsDataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsDataList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsDataList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsDataList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsDataList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsDataList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsDataList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsDataList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsDataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsDataList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsDataList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsDataList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsDataList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsDataList.get"></a>

```csharp
private DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsDataList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsDataList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsDataList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsDataList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsDataList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference <a name="DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.property.timestamp">Timestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.property.values">Values</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsData">DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsData</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Timestamp`<sup>Required</sup> <a name="Timestamp" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.property.timestamp"></a>

```csharp
public string Timestamp { get; }
```

- *Type:* string

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.property.values"></a>

```csharp
public double[] Values { get; }
```

- *Type:* double[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.property.internalValue"></a>

```csharp
public DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsData InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsData">DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsData</a>

---


### DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsList <a name="DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsList" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsList.get"></a>

```csharp
private DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsList <a name="DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsList" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsList.get"></a>

```csharp
private DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference <a name="DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.property.bucket">Bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.property.object">Object</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocations">DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.property.bucket"></a>

```csharp
public string Bucket { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `Object`<sup>Required</sup> <a name="Object" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.property.object"></a>

```csharp
public string Object { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.property.internalValue"></a>

```csharp
public DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocations InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocations">DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocations</a>

---


### DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference <a name="DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.property.content">Content</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.property.contentType">ContentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.property.data">Data</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsDataList">DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsDataList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.property.inputType">InputType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.property.message">Message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.property.objectLocations">ObjectLocations</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsList">DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.property.signalNames">SignalNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetails">DataOciAiAnomalyDetectionDetectAnomalyJobInputDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Content`<sup>Required</sup> <a name="Content" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.property.content"></a>

```csharp
public string Content { get; }
```

- *Type:* string

---

##### `ContentType`<sup>Required</sup> <a name="ContentType" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.property.contentType"></a>

```csharp
public string ContentType { get; }
```

- *Type:* string

---

##### `Data`<sup>Required</sup> <a name="Data" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.property.data"></a>

```csharp
public DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsDataList Data { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsDataList">DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsDataList</a>

---

##### `InputType`<sup>Required</sup> <a name="InputType" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.property.inputType"></a>

```csharp
public string InputType { get; }
```

- *Type:* string

---

##### `Message`<sup>Required</sup> <a name="Message" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.property.message"></a>

```csharp
public string Message { get; }
```

- *Type:* string

---

##### `ObjectLocations`<sup>Required</sup> <a name="ObjectLocations" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.property.objectLocations"></a>

```csharp
public DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsList ObjectLocations { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsList">DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsList</a>

---

##### `SignalNames`<sup>Required</sup> <a name="SignalNames" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.property.signalNames"></a>

```csharp
public string[] SignalNames { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.property.internalValue"></a>

```csharp
public DataOciAiAnomalyDetectionDetectAnomalyJobInputDetails InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetails">DataOciAiAnomalyDetectionDetectAnomalyJobInputDetails</a>

---


### DataOciAiAnomalyDetectionDetectAnomalyJobOutputDetailsList <a name="DataOciAiAnomalyDetectionDetectAnomalyJobOutputDetailsList" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobOutputDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobOutputDetailsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciAiAnomalyDetectionDetectAnomalyJobOutputDetailsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobOutputDetailsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobOutputDetailsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobOutputDetailsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobOutputDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobOutputDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobOutputDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobOutputDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobOutputDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobOutputDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobOutputDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobOutputDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobOutputDetailsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobOutputDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobOutputDetailsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobOutputDetailsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobOutputDetailsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobOutputDetailsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobOutputDetailsList.get"></a>

```csharp
private DataOciAiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobOutputDetailsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobOutputDetailsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobOutputDetailsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobOutputDetailsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobOutputDetailsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciAiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference <a name="DataOciAiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciAiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.property.bucket">Bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.property.outputType">OutputType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.property.prefix">Prefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobOutputDetails">DataOciAiAnomalyDetectionDetectAnomalyJobOutputDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.property.bucket"></a>

```csharp
public string Bucket { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `OutputType`<sup>Required</sup> <a name="OutputType" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.property.outputType"></a>

```csharp
public string OutputType { get; }
```

- *Type:* string

---

##### `Prefix`<sup>Required</sup> <a name="Prefix" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.property.prefix"></a>

```csharp
public string Prefix { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.property.internalValue"></a>

```csharp
public DataOciAiAnomalyDetectionDetectAnomalyJobOutputDetails InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobOutputDetails">DataOciAiAnomalyDetectionDetectAnomalyJobOutputDetails</a>

---



