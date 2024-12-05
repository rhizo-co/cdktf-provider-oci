# `dataOciDatabaseDatabasePdbConversionHistoryEntries` Submodule <a name="`dataOciDatabaseDatabasePdbConversionHistoryEntries` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseDatabasePdbConversionHistoryEntries <a name="DataOciDatabaseDatabasePdbConversionHistoryEntries" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_database_pdb_conversion_history_entries oci_database_database_pdb_conversion_history_entries}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseDatabasePdbConversionHistoryEntries(Construct Scope, string Id, DataOciDatabaseDatabasePdbConversionHistoryEntriesConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesConfig">DataOciDatabaseDatabasePdbConversionHistoryEntriesConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesConfig">DataOciDatabaseDatabasePdbConversionHistoryEntriesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.resetPdbConversionAction">ResetPdbConversionAction</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.resetState">ResetState</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.putFilter"></a>

```csharp
private void PutFilter(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.putFilter.parameter.value"></a>

- *Type:* object

---

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetPdbConversionAction` <a name="ResetPdbConversionAction" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.resetPdbConversionAction"></a>

```csharp
private void ResetPdbConversionAction()
```

##### `ResetState` <a name="ResetState" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.resetState"></a>

```csharp
private void ResetState()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDatabaseDatabasePdbConversionHistoryEntries resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDatabaseDatabasePdbConversionHistoryEntries.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDatabaseDatabasePdbConversionHistoryEntries.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDatabaseDatabasePdbConversionHistoryEntries.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDatabaseDatabasePdbConversionHistoryEntries.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciDatabaseDatabasePdbConversionHistoryEntries resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciDatabaseDatabasePdbConversionHistoryEntries to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciDatabaseDatabasePdbConversionHistoryEntries that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_database_pdb_conversion_history_entries#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseDatabasePdbConversionHistoryEntries to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterList">DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.property.pdbConversionHistoryEntries">PdbConversionHistoryEntries</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesList">DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.property.databaseIdInput">DatabaseIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.property.filterInput">FilterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.property.pdbConversionActionInput">PdbConversionActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.property.stateInput">StateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.property.databaseId">DatabaseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.property.pdbConversionAction">PdbConversionAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.property.state">State</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.property.filter"></a>

```csharp
public DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterList Filter { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterList">DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterList</a>

---

##### `PdbConversionHistoryEntries`<sup>Required</sup> <a name="PdbConversionHistoryEntries" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.property.pdbConversionHistoryEntries"></a>

```csharp
public DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesList PdbConversionHistoryEntries { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesList">DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesList</a>

---

##### `DatabaseIdInput`<sup>Optional</sup> <a name="DatabaseIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.property.databaseIdInput"></a>

```csharp
public string DatabaseIdInput { get; }
```

- *Type:* string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.property.filterInput"></a>

```csharp
public object FilterInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `PdbConversionActionInput`<sup>Optional</sup> <a name="PdbConversionActionInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.property.pdbConversionActionInput"></a>

```csharp
public string PdbConversionActionInput { get; }
```

- *Type:* string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.property.stateInput"></a>

```csharp
public string StateInput { get; }
```

- *Type:* string

---

##### `DatabaseId`<sup>Required</sup> <a name="DatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.property.databaseId"></a>

```csharp
public string DatabaseId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `PdbConversionAction`<sup>Required</sup> <a name="PdbConversionAction" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.property.pdbConversionAction"></a>

```csharp
public string PdbConversionAction { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseDatabasePdbConversionHistoryEntriesConfig <a name="DataOciDatabaseDatabasePdbConversionHistoryEntriesConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseDatabasePdbConversionHistoryEntriesConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string DatabaseId,
    object Filter = null,
    string Id = null,
    string PdbConversionAction = null,
    string State = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesConfig.property.databaseId">DatabaseId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_database_pdb_conversion_history_entries#database_id DataOciDatabaseDatabasePdbConversionHistoryEntries#database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesConfig.property.filter">Filter</a></code> | <code>object</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_database_pdb_conversion_history_entries#id DataOciDatabaseDatabasePdbConversionHistoryEntries#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesConfig.property.pdbConversionAction">PdbConversionAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_database_pdb_conversion_history_entries#pdb_conversion_action DataOciDatabaseDatabasePdbConversionHistoryEntries#pdb_conversion_action}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesConfig.property.state">State</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_database_pdb_conversion_history_entries#state DataOciDatabaseDatabasePdbConversionHistoryEntries#state}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `DatabaseId`<sup>Required</sup> <a name="DatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesConfig.property.databaseId"></a>

```csharp
public string DatabaseId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_database_pdb_conversion_history_entries#database_id DataOciDatabaseDatabasePdbConversionHistoryEntries#database_id}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesConfig.property.filter"></a>

```csharp
public object Filter { get; set; }
```

- *Type:* object

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_database_pdb_conversion_history_entries#filter DataOciDatabaseDatabasePdbConversionHistoryEntries#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_database_pdb_conversion_history_entries#id DataOciDatabaseDatabasePdbConversionHistoryEntries#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `PdbConversionAction`<sup>Optional</sup> <a name="PdbConversionAction" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesConfig.property.pdbConversionAction"></a>

```csharp
public string PdbConversionAction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_database_pdb_conversion_history_entries#pdb_conversion_action DataOciDatabaseDatabasePdbConversionHistoryEntries#pdb_conversion_action}.

---

##### `State`<sup>Optional</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesConfig.property.state"></a>

```csharp
public string State { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_database_pdb_conversion_history_entries#state DataOciDatabaseDatabasePdbConversionHistoryEntries#state}.

---

### DataOciDatabaseDatabasePdbConversionHistoryEntriesFilter <a name="DataOciDatabaseDatabasePdbConversionHistoryEntriesFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseDatabasePdbConversionHistoryEntriesFilter {
    string Name,
    string[] Values,
    object Regex = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilter.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_database_pdb_conversion_history_entries#name DataOciDatabaseDatabasePdbConversionHistoryEntries#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilter.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_database_pdb_conversion_history_entries#values DataOciDatabaseDatabasePdbConversionHistoryEntries#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilter.property.regex">Regex</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_database_pdb_conversion_history_entries#regex DataOciDatabaseDatabasePdbConversionHistoryEntries#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilter.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_database_pdb_conversion_history_entries#name DataOciDatabaseDatabasePdbConversionHistoryEntries#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilter.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_database_pdb_conversion_history_entries#values DataOciDatabaseDatabasePdbConversionHistoryEntries#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilter.property.regex"></a>

```csharp
public object Regex { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_database_pdb_conversion_history_entries#regex DataOciDatabaseDatabasePdbConversionHistoryEntries#regex}.

---

### DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntries <a name="DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntries" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntries"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntries.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntries {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterList <a name="DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterList.get"></a>

```csharp
private DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterOutputReference <a name="DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterOutputReference.resetRegex"></a>

```csharp
private void ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterOutputReference.property.regex">Regex</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterOutputReference.property.regexInput"></a>

```csharp
public object RegexInput { get; }
```

- *Type:* object

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterOutputReference.property.regex"></a>

```csharp
public object Regex { get; }
```

- *Type:* object

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesList <a name="DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesList.get"></a>

```csharp
private DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesOutputReference <a name="DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesOutputReference.property.action">Action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesOutputReference.property.additionalCdbParams">AdditionalCdbParams</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesOutputReference.property.cdbName">CdbName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesOutputReference.property.lifecycleDetails">LifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesOutputReference.property.sourceDatabaseId">SourceDatabaseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesOutputReference.property.target">Target</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesOutputReference.property.targetDatabaseId">TargetDatabaseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesOutputReference.property.timeEnded">TimeEnded</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesOutputReference.property.timeStarted">TimeStarted</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntries">DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntries</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Action`<sup>Required</sup> <a name="Action" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesOutputReference.property.action"></a>

```csharp
public string Action { get; }
```

- *Type:* string

---

##### `AdditionalCdbParams`<sup>Required</sup> <a name="AdditionalCdbParams" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesOutputReference.property.additionalCdbParams"></a>

```csharp
public string AdditionalCdbParams { get; }
```

- *Type:* string

---

##### `CdbName`<sup>Required</sup> <a name="CdbName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesOutputReference.property.cdbName"></a>

```csharp
public string CdbName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesOutputReference.property.lifecycleDetails"></a>

```csharp
public string LifecycleDetails { get; }
```

- *Type:* string

---

##### `SourceDatabaseId`<sup>Required</sup> <a name="SourceDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesOutputReference.property.sourceDatabaseId"></a>

```csharp
public string SourceDatabaseId { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `Target`<sup>Required</sup> <a name="Target" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesOutputReference.property.target"></a>

```csharp
public string Target { get; }
```

- *Type:* string

---

##### `TargetDatabaseId`<sup>Required</sup> <a name="TargetDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesOutputReference.property.targetDatabaseId"></a>

```csharp
public string TargetDatabaseId { get; }
```

- *Type:* string

---

##### `TimeEnded`<sup>Required</sup> <a name="TimeEnded" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesOutputReference.property.timeEnded"></a>

```csharp
public string TimeEnded { get; }
```

- *Type:* string

---

##### `TimeStarted`<sup>Required</sup> <a name="TimeStarted" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesOutputReference.property.timeStarted"></a>

```csharp
public string TimeStarted { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesOutputReference.property.internalValue"></a>

```csharp
public DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntries InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntries">DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntries</a>

---



