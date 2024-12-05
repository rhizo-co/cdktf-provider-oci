# `dataOciDataLabelingServiceAnnotationFormats` Submodule <a name="`dataOciDataLabelingServiceAnnotationFormats` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDataLabelingServiceAnnotationFormats <a name="DataOciDataLabelingServiceAnnotationFormats" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_labeling_service_annotation_formats oci_data_labeling_service_annotation_formats}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataLabelingServiceAnnotationFormats(Construct Scope, string Id, DataOciDataLabelingServiceAnnotationFormatsConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsConfig">DataOciDataLabelingServiceAnnotationFormatsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsConfig">DataOciDataLabelingServiceAnnotationFormatsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.putFilter"></a>

```csharp
private void PutFilter(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.putFilter.parameter.value"></a>

- *Type:* object

---

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDataLabelingServiceAnnotationFormats resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDataLabelingServiceAnnotationFormats.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDataLabelingServiceAnnotationFormats.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDataLabelingServiceAnnotationFormats.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDataLabelingServiceAnnotationFormats.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciDataLabelingServiceAnnotationFormats resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciDataLabelingServiceAnnotationFormats to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciDataLabelingServiceAnnotationFormats that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_labeling_service_annotation_formats#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDataLabelingServiceAnnotationFormats to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.property.annotationFormatCollection">AnnotationFormatCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionList">DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterList">DataOciDataLabelingServiceAnnotationFormatsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.property.filterInput">FilterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `AnnotationFormatCollection`<sup>Required</sup> <a name="AnnotationFormatCollection" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.property.annotationFormatCollection"></a>

```csharp
public DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionList AnnotationFormatCollection { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionList">DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionList</a>

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.property.filter"></a>

```csharp
public DataOciDataLabelingServiceAnnotationFormatsFilterList Filter { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterList">DataOciDataLabelingServiceAnnotationFormatsFilterList</a>

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.property.filterInput"></a>

```csharp
public object FilterInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollection <a name="DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollection" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollection.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollection {

};
```


### DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItems <a name="DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItems.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItems {

};
```


### DataOciDataLabelingServiceAnnotationFormatsConfig <a name="DataOciDataLabelingServiceAnnotationFormatsConfig" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataLabelingServiceAnnotationFormatsConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string CompartmentId,
    object Filter = null,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_labeling_service_annotation_formats#compartment_id DataOciDataLabelingServiceAnnotationFormats#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsConfig.property.filter">Filter</a></code> | <code>object</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_labeling_service_annotation_formats#id DataOciDataLabelingServiceAnnotationFormats#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_labeling_service_annotation_formats#compartment_id DataOciDataLabelingServiceAnnotationFormats#compartment_id}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsConfig.property.filter"></a>

```csharp
public object Filter { get; set; }
```

- *Type:* object

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_labeling_service_annotation_formats#filter DataOciDataLabelingServiceAnnotationFormats#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_labeling_service_annotation_formats#id DataOciDataLabelingServiceAnnotationFormats#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciDataLabelingServiceAnnotationFormatsFilter <a name="DataOciDataLabelingServiceAnnotationFormatsFilter" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataLabelingServiceAnnotationFormatsFilter {
    string Name,
    string[] Values,
    object Regex = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilter.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_labeling_service_annotation_formats#name DataOciDataLabelingServiceAnnotationFormats#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilter.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_labeling_service_annotation_formats#values DataOciDataLabelingServiceAnnotationFormats#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilter.property.regex">Regex</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_labeling_service_annotation_formats#regex DataOciDataLabelingServiceAnnotationFormats#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilter.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_labeling_service_annotation_formats#name DataOciDataLabelingServiceAnnotationFormats#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilter.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_labeling_service_annotation_formats#values DataOciDataLabelingServiceAnnotationFormats#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilter.property.regex"></a>

```csharp
public object Regex { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_labeling_service_annotation_formats#regex DataOciDataLabelingServiceAnnotationFormats#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsList <a name="DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsList.get"></a>

```csharp
private DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsOutputReference <a name="DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItems">DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsOutputReference.property.internalValue"></a>

```csharp
public DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItems InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItems">DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItems</a>

---


### DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionList <a name="DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionList.get"></a>

```csharp
private DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionOutputReference <a name="DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsList">DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollection">DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionOutputReference.property.items"></a>

```csharp
public DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsList Items { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsList">DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionOutputReference.property.internalValue"></a>

```csharp
public DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollection InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollection">DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollection</a>

---


### DataOciDataLabelingServiceAnnotationFormatsFilterList <a name="DataOciDataLabelingServiceAnnotationFormatsFilterList" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataLabelingServiceAnnotationFormatsFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterList.get"></a>

```csharp
private DataOciDataLabelingServiceAnnotationFormatsFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciDataLabelingServiceAnnotationFormatsFilterOutputReference <a name="DataOciDataLabelingServiceAnnotationFormatsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataLabelingServiceAnnotationFormatsFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterOutputReference.resetRegex"></a>

```csharp
private void ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterOutputReference.property.regex">Regex</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterOutputReference.property.regexInput"></a>

```csharp
public object RegexInput { get; }
```

- *Type:* object

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterOutputReference.property.regex"></a>

```csharp
public object Regex { get; }
```

- *Type:* object

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



