# `dataOciDataSafeSqlCollectionLogInsights` Submodule <a name="`dataOciDataSafeSqlCollectionLogInsights` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDataSafeSqlCollectionLogInsights <a name="DataOciDataSafeSqlCollectionLogInsights" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_collection_log_insights oci_data_safe_sql_collection_log_insights}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeSqlCollectionLogInsights(Construct Scope, string Id, DataOciDataSafeSqlCollectionLogInsightsConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsConfig">DataOciDataSafeSqlCollectionLogInsightsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsConfig">DataOciDataSafeSqlCollectionLogInsightsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.resetGroupBy">ResetGroupBy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.putFilter"></a>

```csharp
private void PutFilter(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.putFilter.parameter.value"></a>

- *Type:* object

---

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetGroupBy` <a name="ResetGroupBy" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.resetGroupBy"></a>

```csharp
private void ResetGroupBy()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDataSafeSqlCollectionLogInsights resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDataSafeSqlCollectionLogInsights.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDataSafeSqlCollectionLogInsights.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDataSafeSqlCollectionLogInsights.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDataSafeSqlCollectionLogInsights.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciDataSafeSqlCollectionLogInsights resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciDataSafeSqlCollectionLogInsights to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciDataSafeSqlCollectionLogInsights that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_collection_log_insights#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDataSafeSqlCollectionLogInsights to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterList">DataOciDataSafeSqlCollectionLogInsightsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.property.sqlCollectionLogInsightsCollection">SqlCollectionLogInsightsCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionList">DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.property.filterInput">FilterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.property.groupByInput">GroupByInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.property.sqlCollectionIdInput">SqlCollectionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.property.timeEndedInput">TimeEndedInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.property.timeStartedInput">TimeStartedInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.property.groupBy">GroupBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.property.sqlCollectionId">SqlCollectionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.property.timeEnded">TimeEnded</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.property.timeStarted">TimeStarted</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.property.filter"></a>

```csharp
public DataOciDataSafeSqlCollectionLogInsightsFilterList Filter { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterList">DataOciDataSafeSqlCollectionLogInsightsFilterList</a>

---

##### `SqlCollectionLogInsightsCollection`<sup>Required</sup> <a name="SqlCollectionLogInsightsCollection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.property.sqlCollectionLogInsightsCollection"></a>

```csharp
public DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionList SqlCollectionLogInsightsCollection { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionList">DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionList</a>

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.property.filterInput"></a>

```csharp
public object FilterInput { get; }
```

- *Type:* object

---

##### `GroupByInput`<sup>Optional</sup> <a name="GroupByInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.property.groupByInput"></a>

```csharp
public string GroupByInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `SqlCollectionIdInput`<sup>Optional</sup> <a name="SqlCollectionIdInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.property.sqlCollectionIdInput"></a>

```csharp
public string SqlCollectionIdInput { get; }
```

- *Type:* string

---

##### `TimeEndedInput`<sup>Optional</sup> <a name="TimeEndedInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.property.timeEndedInput"></a>

```csharp
public string TimeEndedInput { get; }
```

- *Type:* string

---

##### `TimeStartedInput`<sup>Optional</sup> <a name="TimeStartedInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.property.timeStartedInput"></a>

```csharp
public string TimeStartedInput { get; }
```

- *Type:* string

---

##### `GroupBy`<sup>Required</sup> <a name="GroupBy" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.property.groupBy"></a>

```csharp
public string GroupBy { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `SqlCollectionId`<sup>Required</sup> <a name="SqlCollectionId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.property.sqlCollectionId"></a>

```csharp
public string SqlCollectionId { get; }
```

- *Type:* string

---

##### `TimeEnded`<sup>Required</sup> <a name="TimeEnded" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.property.timeEnded"></a>

```csharp
public string TimeEnded { get; }
```

- *Type:* string

---

##### `TimeStarted`<sup>Required</sup> <a name="TimeStarted" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.property.timeStarted"></a>

```csharp
public string TimeStarted { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDataSafeSqlCollectionLogInsightsConfig <a name="DataOciDataSafeSqlCollectionLogInsightsConfig" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeSqlCollectionLogInsightsConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string SqlCollectionId,
    string TimeEnded,
    string TimeStarted,
    object Filter = null,
    string GroupBy = null,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsConfig.property.sqlCollectionId">SqlCollectionId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_collection_log_insights#sql_collection_id DataOciDataSafeSqlCollectionLogInsights#sql_collection_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsConfig.property.timeEnded">TimeEnded</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_collection_log_insights#time_ended DataOciDataSafeSqlCollectionLogInsights#time_ended}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsConfig.property.timeStarted">TimeStarted</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_collection_log_insights#time_started DataOciDataSafeSqlCollectionLogInsights#time_started}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsConfig.property.filter">Filter</a></code> | <code>object</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsConfig.property.groupBy">GroupBy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_collection_log_insights#group_by DataOciDataSafeSqlCollectionLogInsights#group_by}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_collection_log_insights#id DataOciDataSafeSqlCollectionLogInsights#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `SqlCollectionId`<sup>Required</sup> <a name="SqlCollectionId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsConfig.property.sqlCollectionId"></a>

```csharp
public string SqlCollectionId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_collection_log_insights#sql_collection_id DataOciDataSafeSqlCollectionLogInsights#sql_collection_id}.

---

##### `TimeEnded`<sup>Required</sup> <a name="TimeEnded" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsConfig.property.timeEnded"></a>

```csharp
public string TimeEnded { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_collection_log_insights#time_ended DataOciDataSafeSqlCollectionLogInsights#time_ended}.

---

##### `TimeStarted`<sup>Required</sup> <a name="TimeStarted" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsConfig.property.timeStarted"></a>

```csharp
public string TimeStarted { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_collection_log_insights#time_started DataOciDataSafeSqlCollectionLogInsights#time_started}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsConfig.property.filter"></a>

```csharp
public object Filter { get; set; }
```

- *Type:* object

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_collection_log_insights#filter DataOciDataSafeSqlCollectionLogInsights#filter}

---

##### `GroupBy`<sup>Optional</sup> <a name="GroupBy" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsConfig.property.groupBy"></a>

```csharp
public string GroupBy { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_collection_log_insights#group_by DataOciDataSafeSqlCollectionLogInsights#group_by}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_collection_log_insights#id DataOciDataSafeSqlCollectionLogInsights#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciDataSafeSqlCollectionLogInsightsFilter <a name="DataOciDataSafeSqlCollectionLogInsightsFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeSqlCollectionLogInsightsFilter {
    string Name,
    string[] Values,
    object Regex = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilter.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_collection_log_insights#name DataOciDataSafeSqlCollectionLogInsights#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilter.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_collection_log_insights#values DataOciDataSafeSqlCollectionLogInsights#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilter.property.regex">Regex</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_collection_log_insights#regex DataOciDataSafeSqlCollectionLogInsights#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilter.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_collection_log_insights#name DataOciDataSafeSqlCollectionLogInsights#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilter.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_collection_log_insights#values DataOciDataSafeSqlCollectionLogInsights#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilter.property.regex"></a>

```csharp
public object Regex { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_collection_log_insights#regex DataOciDataSafeSqlCollectionLogInsights#regex}.

---

### DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollection <a name="DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollection.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollection {

};
```


### DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItems <a name="DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItems.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItems {

};
```


### DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensions <a name="DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensions" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensions {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDataSafeSqlCollectionLogInsightsFilterList <a name="DataOciDataSafeSqlCollectionLogInsightsFilterList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeSqlCollectionLogInsightsFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterList.get"></a>

```csharp
private DataOciDataSafeSqlCollectionLogInsightsFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciDataSafeSqlCollectionLogInsightsFilterOutputReference <a name="DataOciDataSafeSqlCollectionLogInsightsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeSqlCollectionLogInsightsFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterOutputReference.resetRegex"></a>

```csharp
private void ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterOutputReference.property.regex">Regex</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterOutputReference.property.regexInput"></a>

```csharp
public object RegexInput { get; }
```

- *Type:* object

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterOutputReference.property.regex"></a>

```csharp
public object Regex { get; }
```

- *Type:* object

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsList <a name="DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsList.get"></a>

```csharp
private DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsOutputReference <a name="DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsOutputReference.property.clientIp">ClientIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsOutputReference.property.clientOsUserName">ClientOsUserName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsOutputReference.property.clientProgram">ClientProgram</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensions">DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ClientIp`<sup>Required</sup> <a name="ClientIp" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsOutputReference.property.clientIp"></a>

```csharp
public string ClientIp { get; }
```

- *Type:* string

---

##### `ClientOsUserName`<sup>Required</sup> <a name="ClientOsUserName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsOutputReference.property.clientOsUserName"></a>

```csharp
public string ClientOsUserName { get; }
```

- *Type:* string

---

##### `ClientProgram`<sup>Required</sup> <a name="ClientProgram" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsOutputReference.property.clientProgram"></a>

```csharp
public string ClientProgram { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsOutputReference.property.internalValue"></a>

```csharp
public DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensions InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensions">DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensions</a>

---


### DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsList <a name="DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsList.get"></a>

```csharp
private DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsOutputReference <a name="DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsOutputReference.property.dimensions">Dimensions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsList">DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsOutputReference.property.metricName">MetricName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsOutputReference.property.sqlCollectionLogInsightCount">SqlCollectionLogInsightCount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsOutputReference.property.timeEnded">TimeEnded</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsOutputReference.property.timeStarted">TimeStarted</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItems">DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Dimensions`<sup>Required</sup> <a name="Dimensions" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsOutputReference.property.dimensions"></a>

```csharp
public DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsList Dimensions { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsList">DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsList</a>

---

##### `MetricName`<sup>Required</sup> <a name="MetricName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsOutputReference.property.metricName"></a>

```csharp
public string MetricName { get; }
```

- *Type:* string

---

##### `SqlCollectionLogInsightCount`<sup>Required</sup> <a name="SqlCollectionLogInsightCount" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsOutputReference.property.sqlCollectionLogInsightCount"></a>

```csharp
public string SqlCollectionLogInsightCount { get; }
```

- *Type:* string

---

##### `TimeEnded`<sup>Required</sup> <a name="TimeEnded" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsOutputReference.property.timeEnded"></a>

```csharp
public string TimeEnded { get; }
```

- *Type:* string

---

##### `TimeStarted`<sup>Required</sup> <a name="TimeStarted" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsOutputReference.property.timeStarted"></a>

```csharp
public string TimeStarted { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsOutputReference.property.internalValue"></a>

```csharp
public DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItems InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItems">DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItems</a>

---


### DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionList <a name="DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionList.get"></a>

```csharp
private DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionOutputReference <a name="DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsList">DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollection">DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionOutputReference.property.items"></a>

```csharp
public DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsList Items { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsList">DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionOutputReference.property.internalValue"></a>

```csharp
public DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollection InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollection">DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollection</a>

---



