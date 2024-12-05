# `dataOciDataSafeReportDefinitions` Submodule <a name="`dataOciDataSafeReportDefinitions` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDataSafeReportDefinitions <a name="DataOciDataSafeReportDefinitions" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_report_definitions oci_data_safe_report_definitions}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeReportDefinitions(Construct Scope, string Id, DataOciDataSafeReportDefinitionsConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsConfig">DataOciDataSafeReportDefinitionsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsConfig">DataOciDataSafeReportDefinitionsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.resetAccessLevel">ResetAccessLevel</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.resetCategory">ResetCategory</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.resetCompartmentIdInSubtree">ResetCompartmentIdInSubtree</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.resetDataSource">ResetDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.resetIsSeeded">ResetIsSeeded</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.resetState">ResetState</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.putFilter"></a>

```csharp
private void PutFilter(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.putFilter.parameter.value"></a>

- *Type:* object

---

##### `ResetAccessLevel` <a name="ResetAccessLevel" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.resetAccessLevel"></a>

```csharp
private void ResetAccessLevel()
```

##### `ResetCategory` <a name="ResetCategory" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.resetCategory"></a>

```csharp
private void ResetCategory()
```

##### `ResetCompartmentIdInSubtree` <a name="ResetCompartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.resetCompartmentIdInSubtree"></a>

```csharp
private void ResetCompartmentIdInSubtree()
```

##### `ResetDataSource` <a name="ResetDataSource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.resetDataSource"></a>

```csharp
private void ResetDataSource()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIsSeeded` <a name="ResetIsSeeded" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.resetIsSeeded"></a>

```csharp
private void ResetIsSeeded()
```

##### `ResetState` <a name="ResetState" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.resetState"></a>

```csharp
private void ResetState()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDataSafeReportDefinitions resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDataSafeReportDefinitions.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDataSafeReportDefinitions.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDataSafeReportDefinitions.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDataSafeReportDefinitions.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciDataSafeReportDefinitions resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciDataSafeReportDefinitions to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciDataSafeReportDefinitions that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_report_definitions#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDataSafeReportDefinitions to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsFilterList">DataOciDataSafeReportDefinitionsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.property.reportDefinitionCollection">ReportDefinitionCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionList">DataOciDataSafeReportDefinitionsReportDefinitionCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.property.accessLevelInput">AccessLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.property.categoryInput">CategoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.property.compartmentIdInSubtreeInput">CompartmentIdInSubtreeInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.property.dataSourceInput">DataSourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.property.filterInput">FilterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.property.isSeededInput">IsSeededInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.property.stateInput">StateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.property.accessLevel">AccessLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.property.category">Category</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.property.compartmentIdInSubtree">CompartmentIdInSubtree</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.property.dataSource">DataSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.property.isSeeded">IsSeeded</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.property.state">State</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.property.filter"></a>

```csharp
public DataOciDataSafeReportDefinitionsFilterList Filter { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsFilterList">DataOciDataSafeReportDefinitionsFilterList</a>

---

##### `ReportDefinitionCollection`<sup>Required</sup> <a name="ReportDefinitionCollection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.property.reportDefinitionCollection"></a>

```csharp
public DataOciDataSafeReportDefinitionsReportDefinitionCollectionList ReportDefinitionCollection { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionList">DataOciDataSafeReportDefinitionsReportDefinitionCollectionList</a>

---

##### `AccessLevelInput`<sup>Optional</sup> <a name="AccessLevelInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.property.accessLevelInput"></a>

```csharp
public string AccessLevelInput { get; }
```

- *Type:* string

---

##### `CategoryInput`<sup>Optional</sup> <a name="CategoryInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.property.categoryInput"></a>

```csharp
public string CategoryInput { get; }
```

- *Type:* string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `CompartmentIdInSubtreeInput`<sup>Optional</sup> <a name="CompartmentIdInSubtreeInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.property.compartmentIdInSubtreeInput"></a>

```csharp
public object CompartmentIdInSubtreeInput { get; }
```

- *Type:* object

---

##### `DataSourceInput`<sup>Optional</sup> <a name="DataSourceInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.property.dataSourceInput"></a>

```csharp
public string DataSourceInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.property.filterInput"></a>

```csharp
public object FilterInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IsSeededInput`<sup>Optional</sup> <a name="IsSeededInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.property.isSeededInput"></a>

```csharp
public object IsSeededInput { get; }
```

- *Type:* object

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.property.stateInput"></a>

```csharp
public string StateInput { get; }
```

- *Type:* string

---

##### `AccessLevel`<sup>Required</sup> <a name="AccessLevel" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.property.accessLevel"></a>

```csharp
public string AccessLevel { get; }
```

- *Type:* string

---

##### `Category`<sup>Required</sup> <a name="Category" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.property.category"></a>

```csharp
public string Category { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `CompartmentIdInSubtree`<sup>Required</sup> <a name="CompartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.property.compartmentIdInSubtree"></a>

```csharp
public object CompartmentIdInSubtree { get; }
```

- *Type:* object

---

##### `DataSource`<sup>Required</sup> <a name="DataSource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.property.dataSource"></a>

```csharp
public string DataSource { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IsSeeded`<sup>Required</sup> <a name="IsSeeded" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.property.isSeeded"></a>

```csharp
public object IsSeeded { get; }
```

- *Type:* object

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDataSafeReportDefinitionsConfig <a name="DataOciDataSafeReportDefinitionsConfig" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeReportDefinitionsConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string CompartmentId,
    string AccessLevel = null,
    string Category = null,
    object CompartmentIdInSubtree = null,
    string DataSource = null,
    string DisplayName = null,
    object Filter = null,
    string Id = null,
    object IsSeeded = null,
    string State = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_report_definitions#compartment_id DataOciDataSafeReportDefinitions#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsConfig.property.accessLevel">AccessLevel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_report_definitions#access_level DataOciDataSafeReportDefinitions#access_level}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsConfig.property.category">Category</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_report_definitions#category DataOciDataSafeReportDefinitions#category}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsConfig.property.compartmentIdInSubtree">CompartmentIdInSubtree</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_report_definitions#compartment_id_in_subtree DataOciDataSafeReportDefinitions#compartment_id_in_subtree}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsConfig.property.dataSource">DataSource</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_report_definitions#data_source DataOciDataSafeReportDefinitions#data_source}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_report_definitions#display_name DataOciDataSafeReportDefinitions#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsConfig.property.filter">Filter</a></code> | <code>object</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_report_definitions#id DataOciDataSafeReportDefinitions#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsConfig.property.isSeeded">IsSeeded</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_report_definitions#is_seeded DataOciDataSafeReportDefinitions#is_seeded}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsConfig.property.state">State</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_report_definitions#state DataOciDataSafeReportDefinitions#state}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_report_definitions#compartment_id DataOciDataSafeReportDefinitions#compartment_id}.

---

##### `AccessLevel`<sup>Optional</sup> <a name="AccessLevel" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsConfig.property.accessLevel"></a>

```csharp
public string AccessLevel { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_report_definitions#access_level DataOciDataSafeReportDefinitions#access_level}.

---

##### `Category`<sup>Optional</sup> <a name="Category" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsConfig.property.category"></a>

```csharp
public string Category { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_report_definitions#category DataOciDataSafeReportDefinitions#category}.

---

##### `CompartmentIdInSubtree`<sup>Optional</sup> <a name="CompartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsConfig.property.compartmentIdInSubtree"></a>

```csharp
public object CompartmentIdInSubtree { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_report_definitions#compartment_id_in_subtree DataOciDataSafeReportDefinitions#compartment_id_in_subtree}.

---

##### `DataSource`<sup>Optional</sup> <a name="DataSource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsConfig.property.dataSource"></a>

```csharp
public string DataSource { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_report_definitions#data_source DataOciDataSafeReportDefinitions#data_source}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_report_definitions#display_name DataOciDataSafeReportDefinitions#display_name}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsConfig.property.filter"></a>

```csharp
public object Filter { get; set; }
```

- *Type:* object

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_report_definitions#filter DataOciDataSafeReportDefinitions#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_report_definitions#id DataOciDataSafeReportDefinitions#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IsSeeded`<sup>Optional</sup> <a name="IsSeeded" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsConfig.property.isSeeded"></a>

```csharp
public object IsSeeded { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_report_definitions#is_seeded DataOciDataSafeReportDefinitions#is_seeded}.

---

##### `State`<sup>Optional</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsConfig.property.state"></a>

```csharp
public string State { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_report_definitions#state DataOciDataSafeReportDefinitions#state}.

---

### DataOciDataSafeReportDefinitionsFilter <a name="DataOciDataSafeReportDefinitionsFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeReportDefinitionsFilter {
    string Name,
    string[] Values,
    object Regex = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsFilter.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_report_definitions#name DataOciDataSafeReportDefinitions#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsFilter.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_report_definitions#values DataOciDataSafeReportDefinitions#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsFilter.property.regex">Regex</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_report_definitions#regex DataOciDataSafeReportDefinitions#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsFilter.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_report_definitions#name DataOciDataSafeReportDefinitions#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsFilter.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_report_definitions#values DataOciDataSafeReportDefinitions#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsFilter.property.regex"></a>

```csharp
public object Regex { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_report_definitions#regex DataOciDataSafeReportDefinitions#regex}.

---

### DataOciDataSafeReportDefinitionsReportDefinitionCollection <a name="DataOciDataSafeReportDefinitionsReportDefinitionCollection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollection.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeReportDefinitionsReportDefinitionCollection {

};
```


### DataOciDataSafeReportDefinitionsReportDefinitionCollectionItems <a name="DataOciDataSafeReportDefinitionsReportDefinitionCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItems.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeReportDefinitionsReportDefinitionCollectionItems {

};
```


### DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnFilters <a name="DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnFilters" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnFilters"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnFilters.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnFilters {

};
```


### DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnInfo <a name="DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnInfo" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnInfo"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnInfo.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnInfo {

};
```


### DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnSortings <a name="DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnSortings" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnSortings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnSortings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnSortings {

};
```


### DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsSummary <a name="DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsSummary" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsSummary"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsSummary.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsSummary {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDataSafeReportDefinitionsFilterList <a name="DataOciDataSafeReportDefinitionsFilterList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsFilterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeReportDefinitionsFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsFilterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsFilterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsFilterList.get"></a>

```csharp
private DataOciDataSafeReportDefinitionsFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsFilterList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsFilterList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciDataSafeReportDefinitionsFilterOutputReference <a name="DataOciDataSafeReportDefinitionsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeReportDefinitionsFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsFilterOutputReference.resetRegex"></a>

```csharp
private void ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsFilterOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsFilterOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsFilterOutputReference.property.regex">Regex</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsFilterOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsFilterOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsFilterOutputReference.property.regexInput"></a>

```csharp
public object RegexInput { get; }
```

- *Type:* object

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsFilterOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsFilterOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsFilterOutputReference.property.regex"></a>

```csharp
public object Regex { get; }
```

- *Type:* object

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsFilterOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsFilterOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnFiltersList <a name="DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnFiltersList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnFiltersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnFiltersList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnFiltersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnFiltersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnFiltersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnFiltersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnFiltersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnFiltersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnFiltersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnFiltersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnFiltersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnFiltersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnFiltersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnFiltersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnFiltersList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnFiltersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnFiltersList.get"></a>

```csharp
private DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnFiltersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnFiltersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnFiltersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnFiltersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnFiltersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnFiltersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnFiltersOutputReference <a name="DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnFiltersOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnFiltersOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnFiltersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnFiltersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnFiltersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnFiltersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnFiltersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnFiltersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnFiltersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnFiltersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnFiltersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnFiltersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnFiltersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnFiltersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnFiltersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnFiltersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnFiltersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnFiltersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnFiltersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnFiltersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnFiltersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnFiltersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnFiltersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnFiltersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnFiltersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnFiltersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnFiltersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnFiltersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnFiltersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnFiltersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnFiltersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnFiltersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnFiltersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnFiltersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnFiltersOutputReference.property.expressions">Expressions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnFiltersOutputReference.property.fieldName">FieldName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnFiltersOutputReference.property.isEnabled">IsEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnFiltersOutputReference.property.isHidden">IsHidden</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnFiltersOutputReference.property.operator">Operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnFiltersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnFilters">DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnFilters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnFiltersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnFiltersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Expressions`<sup>Required</sup> <a name="Expressions" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnFiltersOutputReference.property.expressions"></a>

```csharp
public string[] Expressions { get; }
```

- *Type:* string[]

---

##### `FieldName`<sup>Required</sup> <a name="FieldName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnFiltersOutputReference.property.fieldName"></a>

```csharp
public string FieldName { get; }
```

- *Type:* string

---

##### `IsEnabled`<sup>Required</sup> <a name="IsEnabled" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnFiltersOutputReference.property.isEnabled"></a>

```csharp
public IResolvable IsEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IsHidden`<sup>Required</sup> <a name="IsHidden" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnFiltersOutputReference.property.isHidden"></a>

```csharp
public IResolvable IsHidden { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnFiltersOutputReference.property.operator"></a>

```csharp
public string Operator { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnFiltersOutputReference.property.internalValue"></a>

```csharp
public DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnFilters InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnFilters">DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnFilters</a>

---


### DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnInfoList <a name="DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnInfoList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnInfoList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnInfoList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnInfoList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnInfoList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnInfoList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnInfoList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnInfoList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnInfoList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnInfoList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnInfoList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnInfoList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnInfoList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnInfoList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnInfoList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnInfoList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnInfoList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnInfoList.get"></a>

```csharp
private DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnInfoOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnInfoList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnInfoList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnInfoList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnInfoList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnInfoList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnInfoOutputReference <a name="DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnInfoOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnInfoOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnInfoOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnInfoOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnInfoOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnInfoOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnInfoOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnInfoOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnInfoOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnInfoOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnInfoOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnInfoOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnInfoOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnInfoOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnInfoOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnInfoOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnInfoOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnInfoOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnInfoOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnInfoOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnInfoOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnInfoOutputReference.property.dataType">DataType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnInfoOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnInfoOutputReference.property.displayOrder">DisplayOrder</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnInfoOutputReference.property.fieldName">FieldName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnInfoOutputReference.property.isHidden">IsHidden</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnInfoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnInfo">DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnInfoOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnInfoOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DataType`<sup>Required</sup> <a name="DataType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnInfoOutputReference.property.dataType"></a>

```csharp
public string DataType { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnInfoOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `DisplayOrder`<sup>Required</sup> <a name="DisplayOrder" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnInfoOutputReference.property.displayOrder"></a>

```csharp
public double DisplayOrder { get; }
```

- *Type:* double

---

##### `FieldName`<sup>Required</sup> <a name="FieldName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnInfoOutputReference.property.fieldName"></a>

```csharp
public string FieldName { get; }
```

- *Type:* string

---

##### `IsHidden`<sup>Required</sup> <a name="IsHidden" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnInfoOutputReference.property.isHidden"></a>

```csharp
public IResolvable IsHidden { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnInfoOutputReference.property.internalValue"></a>

```csharp
public DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnInfo InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnInfo">DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnInfo</a>

---


### DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnSortingsList <a name="DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnSortingsList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnSortingsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnSortingsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnSortingsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnSortingsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnSortingsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnSortingsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnSortingsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnSortingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnSortingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnSortingsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnSortingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnSortingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnSortingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnSortingsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnSortingsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnSortingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnSortingsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnSortingsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnSortingsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnSortingsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnSortingsList.get"></a>

```csharp
private DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnSortingsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnSortingsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnSortingsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnSortingsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnSortingsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnSortingsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnSortingsOutputReference <a name="DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnSortingsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnSortingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnSortingsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnSortingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnSortingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnSortingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnSortingsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnSortingsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnSortingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnSortingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnSortingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnSortingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnSortingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnSortingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnSortingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnSortingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnSortingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnSortingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnSortingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnSortingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnSortingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnSortingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnSortingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnSortingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnSortingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnSortingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnSortingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnSortingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnSortingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnSortingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnSortingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnSortingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnSortingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnSortingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnSortingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnSortingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnSortingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnSortingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnSortingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnSortingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnSortingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnSortingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnSortingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnSortingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnSortingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnSortingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnSortingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnSortingsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnSortingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnSortingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnSortingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnSortingsOutputReference.property.fieldName">FieldName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnSortingsOutputReference.property.isAscending">IsAscending</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnSortingsOutputReference.property.sortingOrder">SortingOrder</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnSortingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnSortings">DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnSortings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnSortingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnSortingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FieldName`<sup>Required</sup> <a name="FieldName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnSortingsOutputReference.property.fieldName"></a>

```csharp
public string FieldName { get; }
```

- *Type:* string

---

##### `IsAscending`<sup>Required</sup> <a name="IsAscending" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnSortingsOutputReference.property.isAscending"></a>

```csharp
public IResolvable IsAscending { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `SortingOrder`<sup>Required</sup> <a name="SortingOrder" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnSortingsOutputReference.property.sortingOrder"></a>

```csharp
public double SortingOrder { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnSortingsOutputReference.property.internalValue"></a>

```csharp
public DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnSortings InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnSortings">DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnSortings</a>

---


### DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsList <a name="DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsList.get"></a>

```csharp
private DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsOutputReference <a name="DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsOutputReference.property.category">Category</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsOutputReference.property.columnFilters">ColumnFilters</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnFiltersList">DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnFiltersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsOutputReference.property.columnInfo">ColumnInfo</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnInfoList">DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnInfoList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsOutputReference.property.columnSortings">ColumnSortings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnSortingsList">DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnSortingsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsOutputReference.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsOutputReference.property.complianceStandards">ComplianceStandards</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsOutputReference.property.dataSource">DataSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsOutputReference.property.definedTags">DefinedTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsOutputReference.property.displayOrder">DisplayOrder</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsOutputReference.property.freeformTags">FreeformTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsOutputReference.property.isSeeded">IsSeeded</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsOutputReference.property.lifecycleDetails">LifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsOutputReference.property.parentId">ParentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsOutputReference.property.recordTimeSpan">RecordTimeSpan</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsOutputReference.property.schedule">Schedule</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsOutputReference.property.scheduledReportCompartmentId">ScheduledReportCompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsOutputReference.property.scheduledReportMimeType">ScheduledReportMimeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsOutputReference.property.scheduledReportName">ScheduledReportName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsOutputReference.property.scheduledReportRowLimit">ScheduledReportRowLimit</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsOutputReference.property.scimFilter">ScimFilter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsOutputReference.property.summary">Summary</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsSummaryList">DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsSummaryList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsOutputReference.property.systemTags">SystemTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsOutputReference.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsOutputReference.property.timeUpdated">TimeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItems">DataOciDataSafeReportDefinitionsReportDefinitionCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Category`<sup>Required</sup> <a name="Category" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsOutputReference.property.category"></a>

```csharp
public string Category { get; }
```

- *Type:* string

---

##### `ColumnFilters`<sup>Required</sup> <a name="ColumnFilters" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsOutputReference.property.columnFilters"></a>

```csharp
public DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnFiltersList ColumnFilters { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnFiltersList">DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnFiltersList</a>

---

##### `ColumnInfo`<sup>Required</sup> <a name="ColumnInfo" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsOutputReference.property.columnInfo"></a>

```csharp
public DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnInfoList ColumnInfo { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnInfoList">DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnInfoList</a>

---

##### `ColumnSortings`<sup>Required</sup> <a name="ColumnSortings" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsOutputReference.property.columnSortings"></a>

```csharp
public DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnSortingsList ColumnSortings { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnSortingsList">DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnSortingsList</a>

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsOutputReference.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `ComplianceStandards`<sup>Required</sup> <a name="ComplianceStandards" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsOutputReference.property.complianceStandards"></a>

```csharp
public string[] ComplianceStandards { get; }
```

- *Type:* string[]

---

##### `DataSource`<sup>Required</sup> <a name="DataSource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsOutputReference.property.dataSource"></a>

```csharp
public string DataSource { get; }
```

- *Type:* string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsOutputReference.property.definedTags"></a>

```csharp
public StringMap DefinedTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `DisplayOrder`<sup>Required</sup> <a name="DisplayOrder" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsOutputReference.property.displayOrder"></a>

```csharp
public double DisplayOrder { get; }
```

- *Type:* double

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsOutputReference.property.freeformTags"></a>

```csharp
public StringMap FreeformTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IsSeeded`<sup>Required</sup> <a name="IsSeeded" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsOutputReference.property.isSeeded"></a>

```csharp
public IResolvable IsSeeded { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsOutputReference.property.lifecycleDetails"></a>

```csharp
public string LifecycleDetails { get; }
```

- *Type:* string

---

##### `ParentId`<sup>Required</sup> <a name="ParentId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsOutputReference.property.parentId"></a>

```csharp
public string ParentId { get; }
```

- *Type:* string

---

##### `RecordTimeSpan`<sup>Required</sup> <a name="RecordTimeSpan" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsOutputReference.property.recordTimeSpan"></a>

```csharp
public string RecordTimeSpan { get; }
```

- *Type:* string

---

##### `Schedule`<sup>Required</sup> <a name="Schedule" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsOutputReference.property.schedule"></a>

```csharp
public string Schedule { get; }
```

- *Type:* string

---

##### `ScheduledReportCompartmentId`<sup>Required</sup> <a name="ScheduledReportCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsOutputReference.property.scheduledReportCompartmentId"></a>

```csharp
public string ScheduledReportCompartmentId { get; }
```

- *Type:* string

---

##### `ScheduledReportMimeType`<sup>Required</sup> <a name="ScheduledReportMimeType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsOutputReference.property.scheduledReportMimeType"></a>

```csharp
public string ScheduledReportMimeType { get; }
```

- *Type:* string

---

##### `ScheduledReportName`<sup>Required</sup> <a name="ScheduledReportName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsOutputReference.property.scheduledReportName"></a>

```csharp
public string ScheduledReportName { get; }
```

- *Type:* string

---

##### `ScheduledReportRowLimit`<sup>Required</sup> <a name="ScheduledReportRowLimit" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsOutputReference.property.scheduledReportRowLimit"></a>

```csharp
public double ScheduledReportRowLimit { get; }
```

- *Type:* double

---

##### `ScimFilter`<sup>Required</sup> <a name="ScimFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsOutputReference.property.scimFilter"></a>

```csharp
public string ScimFilter { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `Summary`<sup>Required</sup> <a name="Summary" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsOutputReference.property.summary"></a>

```csharp
public DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsSummaryList Summary { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsSummaryList">DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsSummaryList</a>

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsOutputReference.property.systemTags"></a>

```csharp
public StringMap SystemTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsOutputReference.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsOutputReference.property.timeUpdated"></a>

```csharp
public string TimeUpdated { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsOutputReference.property.internalValue"></a>

```csharp
public DataOciDataSafeReportDefinitionsReportDefinitionCollectionItems InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItems">DataOciDataSafeReportDefinitionsReportDefinitionCollectionItems</a>

---


### DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsSummaryList <a name="DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsSummaryList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsSummaryList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsSummaryList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsSummaryList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsSummaryList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsSummaryList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsSummaryList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsSummaryList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsSummaryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsSummaryList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsSummaryList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsSummaryList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsSummaryList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsSummaryList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsSummaryList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsSummaryList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsSummaryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsSummaryList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsSummaryList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsSummaryList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsSummaryList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsSummaryList.get"></a>

```csharp
private DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsSummaryOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsSummaryList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsSummaryList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsSummaryList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsSummaryList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsSummaryList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsSummaryOutputReference <a name="DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsSummaryOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsSummaryOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsSummaryOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsSummaryOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsSummaryOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsSummaryOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsSummaryOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsSummaryOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsSummaryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsSummaryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsSummaryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsSummaryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsSummaryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsSummaryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsSummaryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsSummaryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsSummaryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsSummaryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsSummaryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsSummaryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsSummaryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsSummaryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsSummaryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsSummaryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsSummaryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsSummaryOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsSummaryOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsSummaryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsSummaryOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsSummaryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsSummaryOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsSummaryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsSummaryOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsSummaryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsSummaryOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsSummaryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsSummaryOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsSummaryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsSummaryOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsSummaryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsSummaryOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsSummaryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsSummaryOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsSummaryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsSummaryOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsSummaryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsSummaryOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsSummaryOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsSummaryOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsSummaryOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsSummaryOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsSummaryOutputReference.property.countOf">CountOf</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsSummaryOutputReference.property.displayOrder">DisplayOrder</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsSummaryOutputReference.property.groupByFieldName">GroupByFieldName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsSummaryOutputReference.property.isHidden">IsHidden</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsSummaryOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsSummaryOutputReference.property.scimFilter">ScimFilter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsSummaryOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsSummary">DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsSummary</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsSummaryOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsSummaryOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CountOf`<sup>Required</sup> <a name="CountOf" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsSummaryOutputReference.property.countOf"></a>

```csharp
public string CountOf { get; }
```

- *Type:* string

---

##### `DisplayOrder`<sup>Required</sup> <a name="DisplayOrder" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsSummaryOutputReference.property.displayOrder"></a>

```csharp
public double DisplayOrder { get; }
```

- *Type:* double

---

##### `GroupByFieldName`<sup>Required</sup> <a name="GroupByFieldName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsSummaryOutputReference.property.groupByFieldName"></a>

```csharp
public string GroupByFieldName { get; }
```

- *Type:* string

---

##### `IsHidden`<sup>Required</sup> <a name="IsHidden" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsSummaryOutputReference.property.isHidden"></a>

```csharp
public IResolvable IsHidden { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsSummaryOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ScimFilter`<sup>Required</sup> <a name="ScimFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsSummaryOutputReference.property.scimFilter"></a>

```csharp
public string ScimFilter { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsSummaryOutputReference.property.internalValue"></a>

```csharp
public DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsSummary InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsSummary">DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsSummary</a>

---


### DataOciDataSafeReportDefinitionsReportDefinitionCollectionList <a name="DataOciDataSafeReportDefinitionsReportDefinitionCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeReportDefinitionsReportDefinitionCollectionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionList.get"></a>

```csharp
private DataOciDataSafeReportDefinitionsReportDefinitionCollectionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDataSafeReportDefinitionsReportDefinitionCollectionOutputReference <a name="DataOciDataSafeReportDefinitionsReportDefinitionCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeReportDefinitionsReportDefinitionCollectionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsList">DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollection">DataOciDataSafeReportDefinitionsReportDefinitionCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionOutputReference.property.items"></a>

```csharp
public DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsList Items { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsList">DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionOutputReference.property.internalValue"></a>

```csharp
public DataOciDataSafeReportDefinitionsReportDefinitionCollection InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollection">DataOciDataSafeReportDefinitionsReportDefinitionCollection</a>

---



