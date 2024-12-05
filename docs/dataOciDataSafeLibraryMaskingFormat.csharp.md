# `dataOciDataSafeLibraryMaskingFormat` Submodule <a name="`dataOciDataSafeLibraryMaskingFormat` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDataSafeLibraryMaskingFormat <a name="DataOciDataSafeLibraryMaskingFormat" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_library_masking_format oci_data_safe_library_masking_format}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeLibraryMaskingFormat(Construct Scope, string Id, DataOciDataSafeLibraryMaskingFormatConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatConfig">DataOciDataSafeLibraryMaskingFormatConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatConfig">DataOciDataSafeLibraryMaskingFormatConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDataSafeLibraryMaskingFormat resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDataSafeLibraryMaskingFormat.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDataSafeLibraryMaskingFormat.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDataSafeLibraryMaskingFormat.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDataSafeLibraryMaskingFormat.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciDataSafeLibraryMaskingFormat resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciDataSafeLibraryMaskingFormat to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciDataSafeLibraryMaskingFormat that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_library_masking_format#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDataSafeLibraryMaskingFormat to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.property.definedTags">DefinedTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.property.formatEntries">FormatEntries</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesList">DataOciDataSafeLibraryMaskingFormatFormatEntriesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.property.freeformTags">FreeformTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.property.sensitiveTypeIds">SensitiveTypeIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.property.source">Source</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.property.timeUpdated">TimeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.property.libraryMaskingFormatIdInput">LibraryMaskingFormatIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.property.libraryMaskingFormatId">LibraryMaskingFormatId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.property.definedTags"></a>

```csharp
public StringMap DefinedTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `FormatEntries`<sup>Required</sup> <a name="FormatEntries" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.property.formatEntries"></a>

```csharp
public DataOciDataSafeLibraryMaskingFormatFormatEntriesList FormatEntries { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesList">DataOciDataSafeLibraryMaskingFormatFormatEntriesList</a>

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.property.freeformTags"></a>

```csharp
public StringMap FreeformTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `SensitiveTypeIds`<sup>Required</sup> <a name="SensitiveTypeIds" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.property.sensitiveTypeIds"></a>

```csharp
public string[] SensitiveTypeIds { get; }
```

- *Type:* string[]

---

##### `Source`<sup>Required</sup> <a name="Source" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.property.source"></a>

```csharp
public string Source { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.property.timeUpdated"></a>

```csharp
public string TimeUpdated { get; }
```

- *Type:* string

---

##### `LibraryMaskingFormatIdInput`<sup>Optional</sup> <a name="LibraryMaskingFormatIdInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.property.libraryMaskingFormatIdInput"></a>

```csharp
public string LibraryMaskingFormatIdInput { get; }
```

- *Type:* string

---

##### `LibraryMaskingFormatId`<sup>Required</sup> <a name="LibraryMaskingFormatId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.property.libraryMaskingFormatId"></a>

```csharp
public string LibraryMaskingFormatId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDataSafeLibraryMaskingFormatConfig <a name="DataOciDataSafeLibraryMaskingFormatConfig" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeLibraryMaskingFormatConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string LibraryMaskingFormatId
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatConfig.property.libraryMaskingFormatId">LibraryMaskingFormatId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_library_masking_format#library_masking_format_id DataOciDataSafeLibraryMaskingFormat#library_masking_format_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `LibraryMaskingFormatId`<sup>Required</sup> <a name="LibraryMaskingFormatId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatConfig.property.libraryMaskingFormatId"></a>

```csharp
public string LibraryMaskingFormatId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_library_masking_format#library_masking_format_id DataOciDataSafeLibraryMaskingFormat#library_masking_format_id}.

---

### DataOciDataSafeLibraryMaskingFormatFormatEntries <a name="DataOciDataSafeLibraryMaskingFormatFormatEntries" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntries"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntries.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeLibraryMaskingFormatFormatEntries {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDataSafeLibraryMaskingFormatFormatEntriesList <a name="DataOciDataSafeLibraryMaskingFormatFormatEntriesList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeLibraryMaskingFormatFormatEntriesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesList.get"></a>

```csharp
private DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference <a name="DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.columnName">ColumnName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.endDate">EndDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.endLength">EndLength</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.endValue">EndValue</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.fixedNumber">FixedNumber</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.fixedString">FixedString</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.groupingColumns">GroupingColumns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.length">Length</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.libraryMaskingFormatId">LibraryMaskingFormatId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.pattern">Pattern</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.postProcessingFunction">PostProcessingFunction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.randomList">RandomList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.regularExpression">RegularExpression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.replaceWith">ReplaceWith</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.schemaName">SchemaName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.sqlExpression">SqlExpression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.startDate">StartDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.startLength">StartLength</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.startPosition">StartPosition</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.startValue">StartValue</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.tableName">TableName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.userDefinedFunction">UserDefinedFunction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntries">DataOciDataSafeLibraryMaskingFormatFormatEntries</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ColumnName`<sup>Required</sup> <a name="ColumnName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.columnName"></a>

```csharp
public string ColumnName { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `EndDate`<sup>Required</sup> <a name="EndDate" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.endDate"></a>

```csharp
public string EndDate { get; }
```

- *Type:* string

---

##### `EndLength`<sup>Required</sup> <a name="EndLength" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.endLength"></a>

```csharp
public double EndLength { get; }
```

- *Type:* double

---

##### `EndValue`<sup>Required</sup> <a name="EndValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.endValue"></a>

```csharp
public double EndValue { get; }
```

- *Type:* double

---

##### `FixedNumber`<sup>Required</sup> <a name="FixedNumber" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.fixedNumber"></a>

```csharp
public double FixedNumber { get; }
```

- *Type:* double

---

##### `FixedString`<sup>Required</sup> <a name="FixedString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.fixedString"></a>

```csharp
public string FixedString { get; }
```

- *Type:* string

---

##### `GroupingColumns`<sup>Required</sup> <a name="GroupingColumns" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.groupingColumns"></a>

```csharp
public string[] GroupingColumns { get; }
```

- *Type:* string[]

---

##### `Length`<sup>Required</sup> <a name="Length" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.length"></a>

```csharp
public double Length { get; }
```

- *Type:* double

---

##### `LibraryMaskingFormatId`<sup>Required</sup> <a name="LibraryMaskingFormatId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.libraryMaskingFormatId"></a>

```csharp
public string LibraryMaskingFormatId { get; }
```

- *Type:* string

---

##### `Pattern`<sup>Required</sup> <a name="Pattern" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.pattern"></a>

```csharp
public string Pattern { get; }
```

- *Type:* string

---

##### `PostProcessingFunction`<sup>Required</sup> <a name="PostProcessingFunction" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.postProcessingFunction"></a>

```csharp
public string PostProcessingFunction { get; }
```

- *Type:* string

---

##### `RandomList`<sup>Required</sup> <a name="RandomList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.randomList"></a>

```csharp
public string[] RandomList { get; }
```

- *Type:* string[]

---

##### `RegularExpression`<sup>Required</sup> <a name="RegularExpression" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.regularExpression"></a>

```csharp
public string RegularExpression { get; }
```

- *Type:* string

---

##### `ReplaceWith`<sup>Required</sup> <a name="ReplaceWith" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.replaceWith"></a>

```csharp
public string ReplaceWith { get; }
```

- *Type:* string

---

##### `SchemaName`<sup>Required</sup> <a name="SchemaName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.schemaName"></a>

```csharp
public string SchemaName { get; }
```

- *Type:* string

---

##### `SqlExpression`<sup>Required</sup> <a name="SqlExpression" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.sqlExpression"></a>

```csharp
public string SqlExpression { get; }
```

- *Type:* string

---

##### `StartDate`<sup>Required</sup> <a name="StartDate" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.startDate"></a>

```csharp
public string StartDate { get; }
```

- *Type:* string

---

##### `StartLength`<sup>Required</sup> <a name="StartLength" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.startLength"></a>

```csharp
public double StartLength { get; }
```

- *Type:* double

---

##### `StartPosition`<sup>Required</sup> <a name="StartPosition" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.startPosition"></a>

```csharp
public double StartPosition { get; }
```

- *Type:* double

---

##### `StartValue`<sup>Required</sup> <a name="StartValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.startValue"></a>

```csharp
public double StartValue { get; }
```

- *Type:* double

---

##### `TableName`<sup>Required</sup> <a name="TableName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.tableName"></a>

```csharp
public string TableName { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `UserDefinedFunction`<sup>Required</sup> <a name="UserDefinedFunction" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.userDefinedFunction"></a>

```csharp
public string UserDefinedFunction { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.internalValue"></a>

```csharp
public DataOciDataSafeLibraryMaskingFormatFormatEntries InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntries">DataOciDataSafeLibraryMaskingFormatFormatEntries</a>

---



