# `dataOciDataSafeMaskingReportsMaskedColumn` Submodule <a name="`dataOciDataSafeMaskingReportsMaskedColumn` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDataSafeMaskingReportsMaskedColumn <a name="DataOciDataSafeMaskingReportsMaskedColumn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_reports_masked_column oci_data_safe_masking_reports_masked_column}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeMaskingReportsMaskedColumn(Construct Scope, string Id, DataOciDataSafeMaskingReportsMaskedColumnConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnConfig">DataOciDataSafeMaskingReportsMaskedColumnConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnConfig">DataOciDataSafeMaskingReportsMaskedColumnConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.resetColumnName">ResetColumnName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.resetMaskingColumnGroup">ResetMaskingColumnGroup</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.resetObject">ResetObject</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.resetObjectType">ResetObjectType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.resetSchemaName">ResetSchemaName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.resetSensitiveTypeId">ResetSensitiveTypeId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetColumnName` <a name="ResetColumnName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.resetColumnName"></a>

```csharp
private void ResetColumnName()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetMaskingColumnGroup` <a name="ResetMaskingColumnGroup" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.resetMaskingColumnGroup"></a>

```csharp
private void ResetMaskingColumnGroup()
```

##### `ResetObject` <a name="ResetObject" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.resetObject"></a>

```csharp
private void ResetObject()
```

##### `ResetObjectType` <a name="ResetObjectType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.resetObjectType"></a>

```csharp
private void ResetObjectType()
```

##### `ResetSchemaName` <a name="ResetSchemaName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.resetSchemaName"></a>

```csharp
private void ResetSchemaName()
```

##### `ResetSensitiveTypeId` <a name="ResetSensitiveTypeId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.resetSensitiveTypeId"></a>

```csharp
private void ResetSensitiveTypeId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDataSafeMaskingReportsMaskedColumn resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDataSafeMaskingReportsMaskedColumn.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDataSafeMaskingReportsMaskedColumn.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDataSafeMaskingReportsMaskedColumn.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDataSafeMaskingReportsMaskedColumn.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciDataSafeMaskingReportsMaskedColumn resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciDataSafeMaskingReportsMaskedColumn to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciDataSafeMaskingReportsMaskedColumn that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_reports_masked_column#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDataSafeMaskingReportsMaskedColumn to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsList">DataOciDataSafeMaskingReportsMaskedColumnItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.property.columnNameInput">ColumnNameInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.property.maskingColumnGroupInput">MaskingColumnGroupInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.property.maskingReportIdInput">MaskingReportIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.property.objectInput">ObjectInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.property.objectTypeInput">ObjectTypeInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.property.schemaNameInput">SchemaNameInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.property.sensitiveTypeIdInput">SensitiveTypeIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.property.columnName">ColumnName</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.property.maskingColumnGroup">MaskingColumnGroup</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.property.maskingReportId">MaskingReportId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.property.object">Object</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.property.objectType">ObjectType</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.property.schemaName">SchemaName</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.property.sensitiveTypeId">SensitiveTypeId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.property.items"></a>

```csharp
public DataOciDataSafeMaskingReportsMaskedColumnItemsList Items { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsList">DataOciDataSafeMaskingReportsMaskedColumnItemsList</a>

---

##### `ColumnNameInput`<sup>Optional</sup> <a name="ColumnNameInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.property.columnNameInput"></a>

```csharp
public string[] ColumnNameInput { get; }
```

- *Type:* string[]

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `MaskingColumnGroupInput`<sup>Optional</sup> <a name="MaskingColumnGroupInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.property.maskingColumnGroupInput"></a>

```csharp
public string[] MaskingColumnGroupInput { get; }
```

- *Type:* string[]

---

##### `MaskingReportIdInput`<sup>Optional</sup> <a name="MaskingReportIdInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.property.maskingReportIdInput"></a>

```csharp
public string MaskingReportIdInput { get; }
```

- *Type:* string

---

##### `ObjectInput`<sup>Optional</sup> <a name="ObjectInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.property.objectInput"></a>

```csharp
public string[] ObjectInput { get; }
```

- *Type:* string[]

---

##### `ObjectTypeInput`<sup>Optional</sup> <a name="ObjectTypeInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.property.objectTypeInput"></a>

```csharp
public string[] ObjectTypeInput { get; }
```

- *Type:* string[]

---

##### `SchemaNameInput`<sup>Optional</sup> <a name="SchemaNameInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.property.schemaNameInput"></a>

```csharp
public string[] SchemaNameInput { get; }
```

- *Type:* string[]

---

##### `SensitiveTypeIdInput`<sup>Optional</sup> <a name="SensitiveTypeIdInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.property.sensitiveTypeIdInput"></a>

```csharp
public string SensitiveTypeIdInput { get; }
```

- *Type:* string

---

##### `ColumnName`<sup>Required</sup> <a name="ColumnName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.property.columnName"></a>

```csharp
public string[] ColumnName { get; }
```

- *Type:* string[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `MaskingColumnGroup`<sup>Required</sup> <a name="MaskingColumnGroup" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.property.maskingColumnGroup"></a>

```csharp
public string[] MaskingColumnGroup { get; }
```

- *Type:* string[]

---

##### `MaskingReportId`<sup>Required</sup> <a name="MaskingReportId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.property.maskingReportId"></a>

```csharp
public string MaskingReportId { get; }
```

- *Type:* string

---

##### `Object`<sup>Required</sup> <a name="Object" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.property.object"></a>

```csharp
public string[] Object { get; }
```

- *Type:* string[]

---

##### `ObjectType`<sup>Required</sup> <a name="ObjectType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.property.objectType"></a>

```csharp
public string[] ObjectType { get; }
```

- *Type:* string[]

---

##### `SchemaName`<sup>Required</sup> <a name="SchemaName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.property.schemaName"></a>

```csharp
public string[] SchemaName { get; }
```

- *Type:* string[]

---

##### `SensitiveTypeId`<sup>Required</sup> <a name="SensitiveTypeId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.property.sensitiveTypeId"></a>

```csharp
public string SensitiveTypeId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDataSafeMaskingReportsMaskedColumnConfig <a name="DataOciDataSafeMaskingReportsMaskedColumnConfig" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeMaskingReportsMaskedColumnConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string MaskingReportId,
    string[] ColumnName = null,
    string Id = null,
    string[] MaskingColumnGroup = null,
    string[] Object = null,
    string[] ObjectType = null,
    string[] SchemaName = null,
    string SensitiveTypeId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnConfig.property.maskingReportId">MaskingReportId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_reports_masked_column#masking_report_id DataOciDataSafeMaskingReportsMaskedColumn#masking_report_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnConfig.property.columnName">ColumnName</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_reports_masked_column#column_name DataOciDataSafeMaskingReportsMaskedColumn#column_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_reports_masked_column#id DataOciDataSafeMaskingReportsMaskedColumn#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnConfig.property.maskingColumnGroup">MaskingColumnGroup</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_reports_masked_column#masking_column_group DataOciDataSafeMaskingReportsMaskedColumn#masking_column_group}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnConfig.property.object">Object</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_reports_masked_column#object DataOciDataSafeMaskingReportsMaskedColumn#object}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnConfig.property.objectType">ObjectType</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_reports_masked_column#object_type DataOciDataSafeMaskingReportsMaskedColumn#object_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnConfig.property.schemaName">SchemaName</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_reports_masked_column#schema_name DataOciDataSafeMaskingReportsMaskedColumn#schema_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnConfig.property.sensitiveTypeId">SensitiveTypeId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_reports_masked_column#sensitive_type_id DataOciDataSafeMaskingReportsMaskedColumn#sensitive_type_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `MaskingReportId`<sup>Required</sup> <a name="MaskingReportId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnConfig.property.maskingReportId"></a>

```csharp
public string MaskingReportId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_reports_masked_column#masking_report_id DataOciDataSafeMaskingReportsMaskedColumn#masking_report_id}.

---

##### `ColumnName`<sup>Optional</sup> <a name="ColumnName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnConfig.property.columnName"></a>

```csharp
public string[] ColumnName { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_reports_masked_column#column_name DataOciDataSafeMaskingReportsMaskedColumn#column_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_reports_masked_column#id DataOciDataSafeMaskingReportsMaskedColumn#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `MaskingColumnGroup`<sup>Optional</sup> <a name="MaskingColumnGroup" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnConfig.property.maskingColumnGroup"></a>

```csharp
public string[] MaskingColumnGroup { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_reports_masked_column#masking_column_group DataOciDataSafeMaskingReportsMaskedColumn#masking_column_group}.

---

##### `Object`<sup>Optional</sup> <a name="Object" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnConfig.property.object"></a>

```csharp
public string[] Object { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_reports_masked_column#object DataOciDataSafeMaskingReportsMaskedColumn#object}.

---

##### `ObjectType`<sup>Optional</sup> <a name="ObjectType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnConfig.property.objectType"></a>

```csharp
public string[] ObjectType { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_reports_masked_column#object_type DataOciDataSafeMaskingReportsMaskedColumn#object_type}.

---

##### `SchemaName`<sup>Optional</sup> <a name="SchemaName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnConfig.property.schemaName"></a>

```csharp
public string[] SchemaName { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_reports_masked_column#schema_name DataOciDataSafeMaskingReportsMaskedColumn#schema_name}.

---

##### `SensitiveTypeId`<sup>Optional</sup> <a name="SensitiveTypeId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnConfig.property.sensitiveTypeId"></a>

```csharp
public string SensitiveTypeId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_reports_masked_column#sensitive_type_id DataOciDataSafeMaskingReportsMaskedColumn#sensitive_type_id}.

---

### DataOciDataSafeMaskingReportsMaskedColumnItems <a name="DataOciDataSafeMaskingReportsMaskedColumnItems" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItems.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeMaskingReportsMaskedColumnItems {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDataSafeMaskingReportsMaskedColumnItemsList <a name="DataOciDataSafeMaskingReportsMaskedColumnItemsList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeMaskingReportsMaskedColumnItemsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsList.get"></a>

```csharp
private DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference <a name="DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference.property.columnName">ColumnName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference.property.maskingColumnGroup">MaskingColumnGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference.property.maskingFormatUsed">MaskingFormatUsed</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference.property.object">Object</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference.property.objectType">ObjectType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference.property.parentColumnKey">ParentColumnKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference.property.schemaName">SchemaName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference.property.sensitiveTypeId">SensitiveTypeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference.property.totalMaskedValues">TotalMaskedValues</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItems">DataOciDataSafeMaskingReportsMaskedColumnItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ColumnName`<sup>Required</sup> <a name="ColumnName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference.property.columnName"></a>

```csharp
public string ColumnName { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `MaskingColumnGroup`<sup>Required</sup> <a name="MaskingColumnGroup" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference.property.maskingColumnGroup"></a>

```csharp
public string MaskingColumnGroup { get; }
```

- *Type:* string

---

##### `MaskingFormatUsed`<sup>Required</sup> <a name="MaskingFormatUsed" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference.property.maskingFormatUsed"></a>

```csharp
public string MaskingFormatUsed { get; }
```

- *Type:* string

---

##### `Object`<sup>Required</sup> <a name="Object" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference.property.object"></a>

```csharp
public string Object { get; }
```

- *Type:* string

---

##### `ObjectType`<sup>Required</sup> <a name="ObjectType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference.property.objectType"></a>

```csharp
public string ObjectType { get; }
```

- *Type:* string

---

##### `ParentColumnKey`<sup>Required</sup> <a name="ParentColumnKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference.property.parentColumnKey"></a>

```csharp
public string ParentColumnKey { get; }
```

- *Type:* string

---

##### `SchemaName`<sup>Required</sup> <a name="SchemaName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference.property.schemaName"></a>

```csharp
public string SchemaName { get; }
```

- *Type:* string

---

##### `SensitiveTypeId`<sup>Required</sup> <a name="SensitiveTypeId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference.property.sensitiveTypeId"></a>

```csharp
public string SensitiveTypeId { get; }
```

- *Type:* string

---

##### `TotalMaskedValues`<sup>Required</sup> <a name="TotalMaskedValues" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference.property.totalMaskedValues"></a>

```csharp
public string TotalMaskedValues { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference.property.internalValue"></a>

```csharp
public DataOciDataSafeMaskingReportsMaskedColumnItems InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItems">DataOciDataSafeMaskingReportsMaskedColumnItems</a>

---



