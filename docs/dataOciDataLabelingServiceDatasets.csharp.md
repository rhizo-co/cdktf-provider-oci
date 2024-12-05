# `dataOciDataLabelingServiceDatasets` Submodule <a name="`dataOciDataLabelingServiceDatasets` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDataLabelingServiceDatasets <a name="DataOciDataLabelingServiceDatasets" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_labeling_service_datasets oci_data_labeling_service_datasets}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataLabelingServiceDatasets(Construct Scope, string Id, DataOciDataLabelingServiceDatasetsConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsConfig">DataOciDataLabelingServiceDatasetsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsConfig">DataOciDataLabelingServiceDatasetsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.resetAnnotationFormat">ResetAnnotationFormat</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.resetState">ResetState</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.putFilter"></a>

```csharp
private void PutFilter(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.putFilter.parameter.value"></a>

- *Type:* object

---

##### `ResetAnnotationFormat` <a name="ResetAnnotationFormat" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.resetAnnotationFormat"></a>

```csharp
private void ResetAnnotationFormat()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetState` <a name="ResetState" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.resetState"></a>

```csharp
private void ResetState()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDataLabelingServiceDatasets resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDataLabelingServiceDatasets.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDataLabelingServiceDatasets.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDataLabelingServiceDatasets.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDataLabelingServiceDatasets.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciDataLabelingServiceDatasets resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciDataLabelingServiceDatasets to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciDataLabelingServiceDatasets that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_labeling_service_datasets#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDataLabelingServiceDatasets to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.property.datasetCollection">DatasetCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionList">DataOciDataLabelingServiceDatasetsDatasetCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterList">DataOciDataLabelingServiceDatasetsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.property.annotationFormatInput">AnnotationFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.property.filterInput">FilterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.property.stateInput">StateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.property.annotationFormat">AnnotationFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.property.state">State</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `DatasetCollection`<sup>Required</sup> <a name="DatasetCollection" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.property.datasetCollection"></a>

```csharp
public DataOciDataLabelingServiceDatasetsDatasetCollectionList DatasetCollection { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionList">DataOciDataLabelingServiceDatasetsDatasetCollectionList</a>

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.property.filter"></a>

```csharp
public DataOciDataLabelingServiceDatasetsFilterList Filter { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterList">DataOciDataLabelingServiceDatasetsFilterList</a>

---

##### `AnnotationFormatInput`<sup>Optional</sup> <a name="AnnotationFormatInput" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.property.annotationFormatInput"></a>

```csharp
public string AnnotationFormatInput { get; }
```

- *Type:* string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.property.filterInput"></a>

```csharp
public object FilterInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.property.stateInput"></a>

```csharp
public string StateInput { get; }
```

- *Type:* string

---

##### `AnnotationFormat`<sup>Required</sup> <a name="AnnotationFormat" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.property.annotationFormat"></a>

```csharp
public string AnnotationFormat { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDataLabelingServiceDatasetsConfig <a name="DataOciDataLabelingServiceDatasetsConfig" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataLabelingServiceDatasetsConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string CompartmentId,
    string AnnotationFormat = null,
    string DisplayName = null,
    object Filter = null,
    string Id = null,
    string State = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_labeling_service_datasets#compartment_id DataOciDataLabelingServiceDatasets#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsConfig.property.annotationFormat">AnnotationFormat</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_labeling_service_datasets#annotation_format DataOciDataLabelingServiceDatasets#annotation_format}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_labeling_service_datasets#display_name DataOciDataLabelingServiceDatasets#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsConfig.property.filter">Filter</a></code> | <code>object</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_labeling_service_datasets#id DataOciDataLabelingServiceDatasets#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsConfig.property.state">State</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_labeling_service_datasets#state DataOciDataLabelingServiceDatasets#state}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_labeling_service_datasets#compartment_id DataOciDataLabelingServiceDatasets#compartment_id}.

---

##### `AnnotationFormat`<sup>Optional</sup> <a name="AnnotationFormat" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsConfig.property.annotationFormat"></a>

```csharp
public string AnnotationFormat { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_labeling_service_datasets#annotation_format DataOciDataLabelingServiceDatasets#annotation_format}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_labeling_service_datasets#display_name DataOciDataLabelingServiceDatasets#display_name}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsConfig.property.filter"></a>

```csharp
public object Filter { get; set; }
```

- *Type:* object

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_labeling_service_datasets#filter DataOciDataLabelingServiceDatasets#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_labeling_service_datasets#id DataOciDataLabelingServiceDatasets#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `State`<sup>Optional</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsConfig.property.state"></a>

```csharp
public string State { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_labeling_service_datasets#state DataOciDataLabelingServiceDatasets#state}.

---

### DataOciDataLabelingServiceDatasetsDatasetCollection <a name="DataOciDataLabelingServiceDatasetsDatasetCollection" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollection.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataLabelingServiceDatasetsDatasetCollection {

};
```


### DataOciDataLabelingServiceDatasetsDatasetCollectionItems <a name="DataOciDataLabelingServiceDatasetsDatasetCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItems.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataLabelingServiceDatasetsDatasetCollectionItems {

};
```


### DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetails <a name="DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetails" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetails {

};
```


### DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadata <a name="DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadata"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadata.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadata {

};
```


### DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetails <a name="DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetails" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetails {

};
```


### DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfiguration <a name="DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfiguration" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfiguration"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfiguration {

};
```


### DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormat <a name="DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormat" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormat"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormat.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormat {

};
```


### DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPath <a name="DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPath" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPath"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPath.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPath {

};
```


### DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfiguration <a name="DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfiguration" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfiguration"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfiguration {

};
```


### DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSet <a name="DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSet" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSet"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSet.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSet {

};
```


### DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItems <a name="DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItems" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItems.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItems {

};
```


### DataOciDataLabelingServiceDatasetsFilter <a name="DataOciDataLabelingServiceDatasetsFilter" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataLabelingServiceDatasetsFilter {
    string Name,
    string[] Values,
    object Regex = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilter.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_labeling_service_datasets#name DataOciDataLabelingServiceDatasets#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilter.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_labeling_service_datasets#values DataOciDataLabelingServiceDatasets#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilter.property.regex">Regex</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_labeling_service_datasets#regex DataOciDataLabelingServiceDatasets#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilter.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_labeling_service_datasets#name DataOciDataLabelingServiceDatasets#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilter.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_labeling_service_datasets#values DataOciDataLabelingServiceDatasets#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilter.property.regex"></a>

```csharp
public object Regex { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_labeling_service_datasets#regex DataOciDataLabelingServiceDatasets#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsList <a name="DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsList" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsList.get"></a>

```csharp
private DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsOutputReference <a name="DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsOutputReference.property.formatType">FormatType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsOutputReference.property.textFileTypeMetadata">TextFileTypeMetadata</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataList">DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetails">DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FormatType`<sup>Required</sup> <a name="FormatType" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsOutputReference.property.formatType"></a>

```csharp
public string FormatType { get; }
```

- *Type:* string

---

##### `TextFileTypeMetadata`<sup>Required</sup> <a name="TextFileTypeMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsOutputReference.property.textFileTypeMetadata"></a>

```csharp
public DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataList TextFileTypeMetadata { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataList">DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsOutputReference.property.internalValue"></a>

```csharp
public DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetails InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetails">DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetails</a>

---


### DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataList <a name="DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataList" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataList.get"></a>

```csharp
private DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataOutputReference <a name="DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataOutputReference.property.columnDelimiter">ColumnDelimiter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataOutputReference.property.columnIndex">ColumnIndex</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataOutputReference.property.columnName">ColumnName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataOutputReference.property.escapeCharacter">EscapeCharacter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataOutputReference.property.formatType">FormatType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataOutputReference.property.lineDelimiter">LineDelimiter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadata">DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadata</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ColumnDelimiter`<sup>Required</sup> <a name="ColumnDelimiter" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataOutputReference.property.columnDelimiter"></a>

```csharp
public string ColumnDelimiter { get; }
```

- *Type:* string

---

##### `ColumnIndex`<sup>Required</sup> <a name="ColumnIndex" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataOutputReference.property.columnIndex"></a>

```csharp
public double ColumnIndex { get; }
```

- *Type:* double

---

##### `ColumnName`<sup>Required</sup> <a name="ColumnName" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataOutputReference.property.columnName"></a>

```csharp
public string ColumnName { get; }
```

- *Type:* string

---

##### `EscapeCharacter`<sup>Required</sup> <a name="EscapeCharacter" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataOutputReference.property.escapeCharacter"></a>

```csharp
public string EscapeCharacter { get; }
```

- *Type:* string

---

##### `FormatType`<sup>Required</sup> <a name="FormatType" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataOutputReference.property.formatType"></a>

```csharp
public string FormatType { get; }
```

- *Type:* string

---

##### `LineDelimiter`<sup>Required</sup> <a name="LineDelimiter" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataOutputReference.property.lineDelimiter"></a>

```csharp
public string LineDelimiter { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataOutputReference.property.internalValue"></a>

```csharp
public DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadata InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadata">DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadata</a>

---


### DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsList <a name="DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsList" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsList.get"></a>

```csharp
private DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsOutputReference <a name="DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsOutputReference.property.bucket">Bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsOutputReference.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsOutputReference.property.prefix">Prefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsOutputReference.property.sourceType">SourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetails">DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsOutputReference.property.bucket"></a>

```csharp
public string Bucket { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsOutputReference.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `Prefix`<sup>Required</sup> <a name="Prefix" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsOutputReference.property.prefix"></a>

```csharp
public string Prefix { get; }
```

- *Type:* string

---

##### `SourceType`<sup>Required</sup> <a name="SourceType" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsOutputReference.property.sourceType"></a>

```csharp
public string SourceType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsOutputReference.property.internalValue"></a>

```csharp
public DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetails InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetails">DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetails</a>

---


### DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatList <a name="DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatList" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatList.get"></a>

```csharp
private DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatOutputReference <a name="DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatOutputReference.property.version">Version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormat">DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormat</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Version`<sup>Required</sup> <a name="Version" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatOutputReference.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatOutputReference.property.internalValue"></a>

```csharp
public DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormat InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormat">DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormat</a>

---


### DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathList <a name="DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathList" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathList.get"></a>

```csharp
private DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathOutputReference <a name="DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathOutputReference.property.bucket">Bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathOutputReference.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathOutputReference.property.path">Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathOutputReference.property.sourceType">SourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPath">DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPath</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathOutputReference.property.bucket"></a>

```csharp
public string Bucket { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathOutputReference.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathOutputReference.property.path"></a>

```csharp
public string Path { get; }
```

- *Type:* string

---

##### `SourceType`<sup>Required</sup> <a name="SourceType" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathOutputReference.property.sourceType"></a>

```csharp
public string SourceType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathOutputReference.property.internalValue"></a>

```csharp
public DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPath InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPath">DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPath</a>

---


### DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationList <a name="DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationList" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationList.get"></a>

```csharp
private DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationOutputReference <a name="DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationOutputReference.property.importFormat">ImportFormat</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatList">DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationOutputReference.property.importMetadataPath">ImportMetadataPath</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathList">DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfiguration">DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ImportFormat`<sup>Required</sup> <a name="ImportFormat" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationOutputReference.property.importFormat"></a>

```csharp
public DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatList ImportFormat { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatList">DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatList</a>

---

##### `ImportMetadataPath`<sup>Required</sup> <a name="ImportMetadataPath" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationOutputReference.property.importMetadataPath"></a>

```csharp
public DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathList ImportMetadataPath { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathList">DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationOutputReference.property.internalValue"></a>

```csharp
public DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfiguration InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfiguration">DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfiguration</a>

---


### DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationList <a name="DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationList" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationList.get"></a>

```csharp
private DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationOutputReference <a name="DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfiguration">DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationOutputReference.property.internalValue"></a>

```csharp
public DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfiguration InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfiguration">DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfiguration</a>

---


### DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsList <a name="DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsList" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsList.get"></a>

```csharp
private DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsOutputReference <a name="DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItems">DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsOutputReference.property.internalValue"></a>

```csharp
public DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItems InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItems">DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItems</a>

---


### DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetList <a name="DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetList" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetList.get"></a>

```csharp
private DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetOutputReference <a name="DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsList">DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSet">DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSet</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetOutputReference.property.items"></a>

```csharp
public DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsList Items { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsList">DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetOutputReference.property.internalValue"></a>

```csharp
public DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSet InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSet">DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSet</a>

---


### DataOciDataLabelingServiceDatasetsDatasetCollectionItemsList <a name="DataOciDataLabelingServiceDatasetsDatasetCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataLabelingServiceDatasetsDatasetCollectionItemsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsList.get"></a>

```csharp
private DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference <a name="DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.property.additionalProperties">AdditionalProperties</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.property.annotationFormat">AnnotationFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.property.datasetFormatDetails">DatasetFormatDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsList">DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.property.datasetSourceDetails">DatasetSourceDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsList">DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.property.definedTags">DefinedTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.property.freeformTags">FreeformTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.property.initialImportDatasetConfiguration">InitialImportDatasetConfiguration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationList">DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.property.initialRecordGenerationConfiguration">InitialRecordGenerationConfiguration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationList">DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.property.labelingInstructions">LabelingInstructions</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.property.labelSet">LabelSet</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetList">DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.property.lifecycleDetails">LifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.property.lifecycleSubstate">LifecycleSubstate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.property.timeUpdated">TimeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItems">DataOciDataLabelingServiceDatasetsDatasetCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AdditionalProperties`<sup>Required</sup> <a name="AdditionalProperties" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.property.additionalProperties"></a>

```csharp
public StringMap AdditionalProperties { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `AnnotationFormat`<sup>Required</sup> <a name="AnnotationFormat" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.property.annotationFormat"></a>

```csharp
public string AnnotationFormat { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `DatasetFormatDetails`<sup>Required</sup> <a name="DatasetFormatDetails" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.property.datasetFormatDetails"></a>

```csharp
public DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsList DatasetFormatDetails { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsList">DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsList</a>

---

##### `DatasetSourceDetails`<sup>Required</sup> <a name="DatasetSourceDetails" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.property.datasetSourceDetails"></a>

```csharp
public DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsList DatasetSourceDetails { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsList">DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsList</a>

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.property.definedTags"></a>

```csharp
public StringMap DefinedTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.property.freeformTags"></a>

```csharp
public StringMap FreeformTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InitialImportDatasetConfiguration`<sup>Required</sup> <a name="InitialImportDatasetConfiguration" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.property.initialImportDatasetConfiguration"></a>

```csharp
public DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationList InitialImportDatasetConfiguration { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationList">DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationList</a>

---

##### `InitialRecordGenerationConfiguration`<sup>Required</sup> <a name="InitialRecordGenerationConfiguration" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.property.initialRecordGenerationConfiguration"></a>

```csharp
public DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationList InitialRecordGenerationConfiguration { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationList">DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationList</a>

---

##### `LabelingInstructions`<sup>Required</sup> <a name="LabelingInstructions" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.property.labelingInstructions"></a>

```csharp
public string LabelingInstructions { get; }
```

- *Type:* string

---

##### `LabelSet`<sup>Required</sup> <a name="LabelSet" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.property.labelSet"></a>

```csharp
public DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetList LabelSet { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetList">DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetList</a>

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.property.lifecycleDetails"></a>

```csharp
public string LifecycleDetails { get; }
```

- *Type:* string

---

##### `LifecycleSubstate`<sup>Required</sup> <a name="LifecycleSubstate" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.property.lifecycleSubstate"></a>

```csharp
public string LifecycleSubstate { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.property.timeUpdated"></a>

```csharp
public string TimeUpdated { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.property.internalValue"></a>

```csharp
public DataOciDataLabelingServiceDatasetsDatasetCollectionItems InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItems">DataOciDataLabelingServiceDatasetsDatasetCollectionItems</a>

---


### DataOciDataLabelingServiceDatasetsDatasetCollectionList <a name="DataOciDataLabelingServiceDatasetsDatasetCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataLabelingServiceDatasetsDatasetCollectionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionList.get"></a>

```csharp
private DataOciDataLabelingServiceDatasetsDatasetCollectionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDataLabelingServiceDatasetsDatasetCollectionOutputReference <a name="DataOciDataLabelingServiceDatasetsDatasetCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataLabelingServiceDatasetsDatasetCollectionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsList">DataOciDataLabelingServiceDatasetsDatasetCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollection">DataOciDataLabelingServiceDatasetsDatasetCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionOutputReference.property.items"></a>

```csharp
public DataOciDataLabelingServiceDatasetsDatasetCollectionItemsList Items { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsList">DataOciDataLabelingServiceDatasetsDatasetCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionOutputReference.property.internalValue"></a>

```csharp
public DataOciDataLabelingServiceDatasetsDatasetCollection InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollection">DataOciDataLabelingServiceDatasetsDatasetCollection</a>

---


### DataOciDataLabelingServiceDatasetsFilterList <a name="DataOciDataLabelingServiceDatasetsFilterList" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataLabelingServiceDatasetsFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterList.get"></a>

```csharp
private DataOciDataLabelingServiceDatasetsFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciDataLabelingServiceDatasetsFilterOutputReference <a name="DataOciDataLabelingServiceDatasetsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataLabelingServiceDatasetsFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterOutputReference.resetRegex"></a>

```csharp
private void ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterOutputReference.property.regex">Regex</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterOutputReference.property.regexInput"></a>

```csharp
public object RegexInput { get; }
```

- *Type:* object

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterOutputReference.property.regex"></a>

```csharp
public object Regex { get; }
```

- *Type:* object

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



