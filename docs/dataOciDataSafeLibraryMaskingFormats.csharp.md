# `dataOciDataSafeLibraryMaskingFormats` Submodule <a name="`dataOciDataSafeLibraryMaskingFormats` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDataSafeLibraryMaskingFormats <a name="DataOciDataSafeLibraryMaskingFormats" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_library_masking_formats oci_data_safe_library_masking_formats}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeLibraryMaskingFormats(Construct Scope, string Id, DataOciDataSafeLibraryMaskingFormatsConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsConfig">DataOciDataSafeLibraryMaskingFormatsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsConfig">DataOciDataSafeLibraryMaskingFormatsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.resetAccessLevel">ResetAccessLevel</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.resetCompartmentIdInSubtree">ResetCompartmentIdInSubtree</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.resetLibraryMaskingFormatId">ResetLibraryMaskingFormatId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.resetLibraryMaskingFormatSource">ResetLibraryMaskingFormatSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.resetState">ResetState</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.resetTimeCreatedGreaterThanOrEqualTo">ResetTimeCreatedGreaterThanOrEqualTo</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.resetTimeCreatedLessThan">ResetTimeCreatedLessThan</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.putFilter"></a>

```csharp
private void PutFilter(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.putFilter.parameter.value"></a>

- *Type:* object

---

##### `ResetAccessLevel` <a name="ResetAccessLevel" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.resetAccessLevel"></a>

```csharp
private void ResetAccessLevel()
```

##### `ResetCompartmentIdInSubtree` <a name="ResetCompartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.resetCompartmentIdInSubtree"></a>

```csharp
private void ResetCompartmentIdInSubtree()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLibraryMaskingFormatId` <a name="ResetLibraryMaskingFormatId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.resetLibraryMaskingFormatId"></a>

```csharp
private void ResetLibraryMaskingFormatId()
```

##### `ResetLibraryMaskingFormatSource` <a name="ResetLibraryMaskingFormatSource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.resetLibraryMaskingFormatSource"></a>

```csharp
private void ResetLibraryMaskingFormatSource()
```

##### `ResetState` <a name="ResetState" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.resetState"></a>

```csharp
private void ResetState()
```

##### `ResetTimeCreatedGreaterThanOrEqualTo` <a name="ResetTimeCreatedGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.resetTimeCreatedGreaterThanOrEqualTo"></a>

```csharp
private void ResetTimeCreatedGreaterThanOrEqualTo()
```

##### `ResetTimeCreatedLessThan` <a name="ResetTimeCreatedLessThan" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.resetTimeCreatedLessThan"></a>

```csharp
private void ResetTimeCreatedLessThan()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDataSafeLibraryMaskingFormats resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDataSafeLibraryMaskingFormats.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDataSafeLibraryMaskingFormats.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDataSafeLibraryMaskingFormats.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDataSafeLibraryMaskingFormats.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciDataSafeLibraryMaskingFormats resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciDataSafeLibraryMaskingFormats to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciDataSafeLibraryMaskingFormats that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_library_masking_formats#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDataSafeLibraryMaskingFormats to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterList">DataOciDataSafeLibraryMaskingFormatsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.property.libraryMaskingFormatCollection">LibraryMaskingFormatCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionList">DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.property.accessLevelInput">AccessLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.property.compartmentIdInSubtreeInput">CompartmentIdInSubtreeInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.property.filterInput">FilterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.property.libraryMaskingFormatIdInput">LibraryMaskingFormatIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.property.libraryMaskingFormatSourceInput">LibraryMaskingFormatSourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.property.stateInput">StateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.property.timeCreatedGreaterThanOrEqualToInput">TimeCreatedGreaterThanOrEqualToInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.property.timeCreatedLessThanInput">TimeCreatedLessThanInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.property.accessLevel">AccessLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.property.compartmentIdInSubtree">CompartmentIdInSubtree</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.property.libraryMaskingFormatId">LibraryMaskingFormatId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.property.libraryMaskingFormatSource">LibraryMaskingFormatSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.property.timeCreatedGreaterThanOrEqualTo">TimeCreatedGreaterThanOrEqualTo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.property.timeCreatedLessThan">TimeCreatedLessThan</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.property.filter"></a>

```csharp
public DataOciDataSafeLibraryMaskingFormatsFilterList Filter { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterList">DataOciDataSafeLibraryMaskingFormatsFilterList</a>

---

##### `LibraryMaskingFormatCollection`<sup>Required</sup> <a name="LibraryMaskingFormatCollection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.property.libraryMaskingFormatCollection"></a>

```csharp
public DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionList LibraryMaskingFormatCollection { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionList">DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionList</a>

---

##### `AccessLevelInput`<sup>Optional</sup> <a name="AccessLevelInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.property.accessLevelInput"></a>

```csharp
public string AccessLevelInput { get; }
```

- *Type:* string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `CompartmentIdInSubtreeInput`<sup>Optional</sup> <a name="CompartmentIdInSubtreeInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.property.compartmentIdInSubtreeInput"></a>

```csharp
public object CompartmentIdInSubtreeInput { get; }
```

- *Type:* object

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.property.filterInput"></a>

```csharp
public object FilterInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LibraryMaskingFormatIdInput`<sup>Optional</sup> <a name="LibraryMaskingFormatIdInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.property.libraryMaskingFormatIdInput"></a>

```csharp
public string LibraryMaskingFormatIdInput { get; }
```

- *Type:* string

---

##### `LibraryMaskingFormatSourceInput`<sup>Optional</sup> <a name="LibraryMaskingFormatSourceInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.property.libraryMaskingFormatSourceInput"></a>

```csharp
public string LibraryMaskingFormatSourceInput { get; }
```

- *Type:* string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.property.stateInput"></a>

```csharp
public string StateInput { get; }
```

- *Type:* string

---

##### `TimeCreatedGreaterThanOrEqualToInput`<sup>Optional</sup> <a name="TimeCreatedGreaterThanOrEqualToInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.property.timeCreatedGreaterThanOrEqualToInput"></a>

```csharp
public string TimeCreatedGreaterThanOrEqualToInput { get; }
```

- *Type:* string

---

##### `TimeCreatedLessThanInput`<sup>Optional</sup> <a name="TimeCreatedLessThanInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.property.timeCreatedLessThanInput"></a>

```csharp
public string TimeCreatedLessThanInput { get; }
```

- *Type:* string

---

##### `AccessLevel`<sup>Required</sup> <a name="AccessLevel" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.property.accessLevel"></a>

```csharp
public string AccessLevel { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `CompartmentIdInSubtree`<sup>Required</sup> <a name="CompartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.property.compartmentIdInSubtree"></a>

```csharp
public object CompartmentIdInSubtree { get; }
```

- *Type:* object

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LibraryMaskingFormatId`<sup>Required</sup> <a name="LibraryMaskingFormatId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.property.libraryMaskingFormatId"></a>

```csharp
public string LibraryMaskingFormatId { get; }
```

- *Type:* string

---

##### `LibraryMaskingFormatSource`<sup>Required</sup> <a name="LibraryMaskingFormatSource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.property.libraryMaskingFormatSource"></a>

```csharp
public string LibraryMaskingFormatSource { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `TimeCreatedGreaterThanOrEqualTo`<sup>Required</sup> <a name="TimeCreatedGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.property.timeCreatedGreaterThanOrEqualTo"></a>

```csharp
public string TimeCreatedGreaterThanOrEqualTo { get; }
```

- *Type:* string

---

##### `TimeCreatedLessThan`<sup>Required</sup> <a name="TimeCreatedLessThan" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.property.timeCreatedLessThan"></a>

```csharp
public string TimeCreatedLessThan { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDataSafeLibraryMaskingFormatsConfig <a name="DataOciDataSafeLibraryMaskingFormatsConfig" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeLibraryMaskingFormatsConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string CompartmentId,
    string AccessLevel = null,
    object CompartmentIdInSubtree = null,
    string DisplayName = null,
    object Filter = null,
    string Id = null,
    string LibraryMaskingFormatId = null,
    string LibraryMaskingFormatSource = null,
    string State = null,
    string TimeCreatedGreaterThanOrEqualTo = null,
    string TimeCreatedLessThan = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_library_masking_formats#compartment_id DataOciDataSafeLibraryMaskingFormats#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsConfig.property.accessLevel">AccessLevel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_library_masking_formats#access_level DataOciDataSafeLibraryMaskingFormats#access_level}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsConfig.property.compartmentIdInSubtree">CompartmentIdInSubtree</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_library_masking_formats#compartment_id_in_subtree DataOciDataSafeLibraryMaskingFormats#compartment_id_in_subtree}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_library_masking_formats#display_name DataOciDataSafeLibraryMaskingFormats#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsConfig.property.filter">Filter</a></code> | <code>object</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_library_masking_formats#id DataOciDataSafeLibraryMaskingFormats#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsConfig.property.libraryMaskingFormatId">LibraryMaskingFormatId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_library_masking_formats#library_masking_format_id DataOciDataSafeLibraryMaskingFormats#library_masking_format_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsConfig.property.libraryMaskingFormatSource">LibraryMaskingFormatSource</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_library_masking_formats#library_masking_format_source DataOciDataSafeLibraryMaskingFormats#library_masking_format_source}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsConfig.property.state">State</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_library_masking_formats#state DataOciDataSafeLibraryMaskingFormats#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsConfig.property.timeCreatedGreaterThanOrEqualTo">TimeCreatedGreaterThanOrEqualTo</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_library_masking_formats#time_created_greater_than_or_equal_to DataOciDataSafeLibraryMaskingFormats#time_created_greater_than_or_equal_to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsConfig.property.timeCreatedLessThan">TimeCreatedLessThan</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_library_masking_formats#time_created_less_than DataOciDataSafeLibraryMaskingFormats#time_created_less_than}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_library_masking_formats#compartment_id DataOciDataSafeLibraryMaskingFormats#compartment_id}.

---

##### `AccessLevel`<sup>Optional</sup> <a name="AccessLevel" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsConfig.property.accessLevel"></a>

```csharp
public string AccessLevel { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_library_masking_formats#access_level DataOciDataSafeLibraryMaskingFormats#access_level}.

---

##### `CompartmentIdInSubtree`<sup>Optional</sup> <a name="CompartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsConfig.property.compartmentIdInSubtree"></a>

```csharp
public object CompartmentIdInSubtree { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_library_masking_formats#compartment_id_in_subtree DataOciDataSafeLibraryMaskingFormats#compartment_id_in_subtree}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_library_masking_formats#display_name DataOciDataSafeLibraryMaskingFormats#display_name}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsConfig.property.filter"></a>

```csharp
public object Filter { get; set; }
```

- *Type:* object

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_library_masking_formats#filter DataOciDataSafeLibraryMaskingFormats#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_library_masking_formats#id DataOciDataSafeLibraryMaskingFormats#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `LibraryMaskingFormatId`<sup>Optional</sup> <a name="LibraryMaskingFormatId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsConfig.property.libraryMaskingFormatId"></a>

```csharp
public string LibraryMaskingFormatId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_library_masking_formats#library_masking_format_id DataOciDataSafeLibraryMaskingFormats#library_masking_format_id}.

---

##### `LibraryMaskingFormatSource`<sup>Optional</sup> <a name="LibraryMaskingFormatSource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsConfig.property.libraryMaskingFormatSource"></a>

```csharp
public string LibraryMaskingFormatSource { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_library_masking_formats#library_masking_format_source DataOciDataSafeLibraryMaskingFormats#library_masking_format_source}.

---

##### `State`<sup>Optional</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsConfig.property.state"></a>

```csharp
public string State { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_library_masking_formats#state DataOciDataSafeLibraryMaskingFormats#state}.

---

##### `TimeCreatedGreaterThanOrEqualTo`<sup>Optional</sup> <a name="TimeCreatedGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsConfig.property.timeCreatedGreaterThanOrEqualTo"></a>

```csharp
public string TimeCreatedGreaterThanOrEqualTo { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_library_masking_formats#time_created_greater_than_or_equal_to DataOciDataSafeLibraryMaskingFormats#time_created_greater_than_or_equal_to}.

---

##### `TimeCreatedLessThan`<sup>Optional</sup> <a name="TimeCreatedLessThan" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsConfig.property.timeCreatedLessThan"></a>

```csharp
public string TimeCreatedLessThan { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_library_masking_formats#time_created_less_than DataOciDataSafeLibraryMaskingFormats#time_created_less_than}.

---

### DataOciDataSafeLibraryMaskingFormatsFilter <a name="DataOciDataSafeLibraryMaskingFormatsFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeLibraryMaskingFormatsFilter {
    string Name,
    string[] Values,
    object Regex = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilter.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_library_masking_formats#name DataOciDataSafeLibraryMaskingFormats#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilter.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_library_masking_formats#values DataOciDataSafeLibraryMaskingFormats#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilter.property.regex">Regex</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_library_masking_formats#regex DataOciDataSafeLibraryMaskingFormats#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilter.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_library_masking_formats#name DataOciDataSafeLibraryMaskingFormats#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilter.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_library_masking_formats#values DataOciDataSafeLibraryMaskingFormats#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilter.property.regex"></a>

```csharp
public object Regex { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_library_masking_formats#regex DataOciDataSafeLibraryMaskingFormats#regex}.

---

### DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollection <a name="DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollection.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollection {

};
```


### DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItems <a name="DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItems.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItems {

};
```


### DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntries <a name="DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntries" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntries"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntries.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntries {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDataSafeLibraryMaskingFormatsFilterList <a name="DataOciDataSafeLibraryMaskingFormatsFilterList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeLibraryMaskingFormatsFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterList.get"></a>

```csharp
private DataOciDataSafeLibraryMaskingFormatsFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciDataSafeLibraryMaskingFormatsFilterOutputReference <a name="DataOciDataSafeLibraryMaskingFormatsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeLibraryMaskingFormatsFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterOutputReference.resetRegex"></a>

```csharp
private void ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterOutputReference.property.regex">Regex</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterOutputReference.property.regexInput"></a>

```csharp
public object RegexInput { get; }
```

- *Type:* object

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterOutputReference.property.regex"></a>

```csharp
public object Regex { get; }
```

- *Type:* object

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesList <a name="DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesList.get"></a>

```csharp
private DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference <a name="DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.property.columnName">ColumnName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.property.endDate">EndDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.property.endLength">EndLength</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.property.endValue">EndValue</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.property.fixedNumber">FixedNumber</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.property.fixedString">FixedString</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.property.groupingColumns">GroupingColumns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.property.length">Length</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.property.libraryMaskingFormatId">LibraryMaskingFormatId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.property.pattern">Pattern</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.property.postProcessingFunction">PostProcessingFunction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.property.randomList">RandomList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.property.regularExpression">RegularExpression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.property.replaceWith">ReplaceWith</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.property.schemaName">SchemaName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.property.sqlExpression">SqlExpression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.property.startDate">StartDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.property.startLength">StartLength</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.property.startPosition">StartPosition</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.property.startValue">StartValue</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.property.tableName">TableName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.property.userDefinedFunction">UserDefinedFunction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntries">DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntries</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ColumnName`<sup>Required</sup> <a name="ColumnName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.property.columnName"></a>

```csharp
public string ColumnName { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `EndDate`<sup>Required</sup> <a name="EndDate" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.property.endDate"></a>

```csharp
public string EndDate { get; }
```

- *Type:* string

---

##### `EndLength`<sup>Required</sup> <a name="EndLength" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.property.endLength"></a>

```csharp
public double EndLength { get; }
```

- *Type:* double

---

##### `EndValue`<sup>Required</sup> <a name="EndValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.property.endValue"></a>

```csharp
public double EndValue { get; }
```

- *Type:* double

---

##### `FixedNumber`<sup>Required</sup> <a name="FixedNumber" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.property.fixedNumber"></a>

```csharp
public double FixedNumber { get; }
```

- *Type:* double

---

##### `FixedString`<sup>Required</sup> <a name="FixedString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.property.fixedString"></a>

```csharp
public string FixedString { get; }
```

- *Type:* string

---

##### `GroupingColumns`<sup>Required</sup> <a name="GroupingColumns" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.property.groupingColumns"></a>

```csharp
public string[] GroupingColumns { get; }
```

- *Type:* string[]

---

##### `Length`<sup>Required</sup> <a name="Length" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.property.length"></a>

```csharp
public double Length { get; }
```

- *Type:* double

---

##### `LibraryMaskingFormatId`<sup>Required</sup> <a name="LibraryMaskingFormatId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.property.libraryMaskingFormatId"></a>

```csharp
public string LibraryMaskingFormatId { get; }
```

- *Type:* string

---

##### `Pattern`<sup>Required</sup> <a name="Pattern" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.property.pattern"></a>

```csharp
public string Pattern { get; }
```

- *Type:* string

---

##### `PostProcessingFunction`<sup>Required</sup> <a name="PostProcessingFunction" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.property.postProcessingFunction"></a>

```csharp
public string PostProcessingFunction { get; }
```

- *Type:* string

---

##### `RandomList`<sup>Required</sup> <a name="RandomList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.property.randomList"></a>

```csharp
public string[] RandomList { get; }
```

- *Type:* string[]

---

##### `RegularExpression`<sup>Required</sup> <a name="RegularExpression" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.property.regularExpression"></a>

```csharp
public string RegularExpression { get; }
```

- *Type:* string

---

##### `ReplaceWith`<sup>Required</sup> <a name="ReplaceWith" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.property.replaceWith"></a>

```csharp
public string ReplaceWith { get; }
```

- *Type:* string

---

##### `SchemaName`<sup>Required</sup> <a name="SchemaName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.property.schemaName"></a>

```csharp
public string SchemaName { get; }
```

- *Type:* string

---

##### `SqlExpression`<sup>Required</sup> <a name="SqlExpression" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.property.sqlExpression"></a>

```csharp
public string SqlExpression { get; }
```

- *Type:* string

---

##### `StartDate`<sup>Required</sup> <a name="StartDate" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.property.startDate"></a>

```csharp
public string StartDate { get; }
```

- *Type:* string

---

##### `StartLength`<sup>Required</sup> <a name="StartLength" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.property.startLength"></a>

```csharp
public double StartLength { get; }
```

- *Type:* double

---

##### `StartPosition`<sup>Required</sup> <a name="StartPosition" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.property.startPosition"></a>

```csharp
public double StartPosition { get; }
```

- *Type:* double

---

##### `StartValue`<sup>Required</sup> <a name="StartValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.property.startValue"></a>

```csharp
public double StartValue { get; }
```

- *Type:* double

---

##### `TableName`<sup>Required</sup> <a name="TableName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.property.tableName"></a>

```csharp
public string TableName { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `UserDefinedFunction`<sup>Required</sup> <a name="UserDefinedFunction" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.property.userDefinedFunction"></a>

```csharp
public string UserDefinedFunction { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.property.internalValue"></a>

```csharp
public DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntries InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntries">DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntries</a>

---


### DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsList <a name="DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsList.get"></a>

```csharp
private DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference <a name="DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.property.definedTags">DefinedTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.property.formatEntries">FormatEntries</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesList">DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.property.freeformTags">FreeformTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.property.sensitiveTypeIds">SensitiveTypeIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.property.source">Source</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.property.timeUpdated">TimeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItems">DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.property.definedTags"></a>

```csharp
public StringMap DefinedTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `FormatEntries`<sup>Required</sup> <a name="FormatEntries" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.property.formatEntries"></a>

```csharp
public DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesList FormatEntries { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesList">DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesList</a>

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.property.freeformTags"></a>

```csharp
public StringMap FreeformTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `SensitiveTypeIds`<sup>Required</sup> <a name="SensitiveTypeIds" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.property.sensitiveTypeIds"></a>

```csharp
public string[] SensitiveTypeIds { get; }
```

- *Type:* string[]

---

##### `Source`<sup>Required</sup> <a name="Source" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.property.source"></a>

```csharp
public string Source { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.property.timeUpdated"></a>

```csharp
public string TimeUpdated { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.property.internalValue"></a>

```csharp
public DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItems InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItems">DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItems</a>

---


### DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionList <a name="DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionList.get"></a>

```csharp
private DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionOutputReference <a name="DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsList">DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollection">DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionOutputReference.property.items"></a>

```csharp
public DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsList Items { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsList">DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionOutputReference.property.internalValue"></a>

```csharp
public DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollection InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollection">DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollection</a>

---



