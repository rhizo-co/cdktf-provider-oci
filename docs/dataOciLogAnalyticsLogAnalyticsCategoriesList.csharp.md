# `dataOciLogAnalyticsLogAnalyticsCategoriesList` Submodule <a name="`dataOciLogAnalyticsLogAnalyticsCategoriesList` Submodule" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciLogAnalyticsLogAnalyticsCategoriesList <a name="DataOciLogAnalyticsLogAnalyticsCategoriesList" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesList"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_categories_list oci_log_analytics_log_analytics_categories_list}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciLogAnalyticsLogAnalyticsCategoriesList(Construct Scope, string Id, DataOciLogAnalyticsLogAnalyticsCategoriesListConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesList.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesList.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesList.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesListConfig">DataOciLogAnalyticsLogAnalyticsCategoriesListConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesList.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesList.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesList.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesListConfig">DataOciLogAnalyticsLogAnalyticsCategoriesListConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesList.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesList.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesList.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesList.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesList.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesList.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesList.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesList.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesList.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesList.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesList.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesList.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesList.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesList.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesList.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesList.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesList.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesList.resetCategoryDisplayText">ResetCategoryDisplayText</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesList.resetCategoryType">ResetCategoryType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesList.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesList.resetName">ResetName</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesList.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesList.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesList.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesList.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesList.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesList.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesList.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesList.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesList.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesList.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesList.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesList.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesList.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesList.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesList.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesList.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesList.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesList.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesList.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesList.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesList.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesList.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesList.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesList.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesList.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesList.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesList.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesList.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesList.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesList.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetCategoryDisplayText` <a name="ResetCategoryDisplayText" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesList.resetCategoryDisplayText"></a>

```csharp
private void ResetCategoryDisplayText()
```

##### `ResetCategoryType` <a name="ResetCategoryType" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesList.resetCategoryType"></a>

```csharp
private void ResetCategoryType()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesList.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetName` <a name="ResetName" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesList.resetName"></a>

```csharp
private void ResetName()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesList.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesList.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesList.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesList.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciLogAnalyticsLogAnalyticsCategoriesList resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesList.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciLogAnalyticsLogAnalyticsCategoriesList.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesList.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesList.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciLogAnalyticsLogAnalyticsCategoriesList.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesList.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesList.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciLogAnalyticsLogAnalyticsCategoriesList.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesList.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesList.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciLogAnalyticsLogAnalyticsCategoriesList.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciLogAnalyticsLogAnalyticsCategoriesList resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesList.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesList.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciLogAnalyticsLogAnalyticsCategoriesList to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesList.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciLogAnalyticsLogAnalyticsCategoriesList that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_categories_list#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesList.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciLogAnalyticsLogAnalyticsCategoriesList to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesList.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesList.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesList.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesList.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesList.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesList.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesList.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesList.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesList.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesList.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesList.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesList.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesListItemsList">DataOciLogAnalyticsLogAnalyticsCategoriesListItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesList.property.categoryDisplayTextInput">CategoryDisplayTextInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesList.property.categoryTypeInput">CategoryTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesList.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesList.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesList.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesList.property.categoryDisplayText">CategoryDisplayText</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesList.property.categoryType">CategoryType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesList.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesList.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesList.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesList.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesList.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesList.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesList.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesList.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesList.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesList.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesList.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesList.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesList.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesList.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesList.property.items"></a>

```csharp
public DataOciLogAnalyticsLogAnalyticsCategoriesListItemsList Items { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesListItemsList">DataOciLogAnalyticsLogAnalyticsCategoriesListItemsList</a>

---

##### `CategoryDisplayTextInput`<sup>Optional</sup> <a name="CategoryDisplayTextInput" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesList.property.categoryDisplayTextInput"></a>

```csharp
public string CategoryDisplayTextInput { get; }
```

- *Type:* string

---

##### `CategoryTypeInput`<sup>Optional</sup> <a name="CategoryTypeInput" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesList.property.categoryTypeInput"></a>

```csharp
public string CategoryTypeInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesList.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesList.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesList.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `CategoryDisplayText`<sup>Required</sup> <a name="CategoryDisplayText" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesList.property.categoryDisplayText"></a>

```csharp
public string CategoryDisplayText { get; }
```

- *Type:* string

---

##### `CategoryType`<sup>Required</sup> <a name="CategoryType" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesList.property.categoryType"></a>

```csharp
public string CategoryType { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesList.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesList.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesList.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesList.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesList.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciLogAnalyticsLogAnalyticsCategoriesListConfig <a name="DataOciLogAnalyticsLogAnalyticsCategoriesListConfig" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesListConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesListConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciLogAnalyticsLogAnalyticsCategoriesListConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Namespace,
    string CategoryDisplayText = null,
    string CategoryType = null,
    string Id = null,
    string Name = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesListConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesListConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesListConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesListConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesListConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesListConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesListConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesListConfig.property.namespace">Namespace</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_categories_list#namespace DataOciLogAnalyticsLogAnalyticsCategoriesList#namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesListConfig.property.categoryDisplayText">CategoryDisplayText</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_categories_list#category_display_text DataOciLogAnalyticsLogAnalyticsCategoriesList#category_display_text}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesListConfig.property.categoryType">CategoryType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_categories_list#category_type DataOciLogAnalyticsLogAnalyticsCategoriesList#category_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesListConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_categories_list#id DataOciLogAnalyticsLogAnalyticsCategoriesList#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesListConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_categories_list#name DataOciLogAnalyticsLogAnalyticsCategoriesList#name}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesListConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesListConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesListConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesListConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesListConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesListConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesListConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesListConfig.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_categories_list#namespace DataOciLogAnalyticsLogAnalyticsCategoriesList#namespace}.

---

##### `CategoryDisplayText`<sup>Optional</sup> <a name="CategoryDisplayText" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesListConfig.property.categoryDisplayText"></a>

```csharp
public string CategoryDisplayText { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_categories_list#category_display_text DataOciLogAnalyticsLogAnalyticsCategoriesList#category_display_text}.

---

##### `CategoryType`<sup>Optional</sup> <a name="CategoryType" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesListConfig.property.categoryType"></a>

```csharp
public string CategoryType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_categories_list#category_type DataOciLogAnalyticsLogAnalyticsCategoriesList#category_type}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesListConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_categories_list#id DataOciLogAnalyticsLogAnalyticsCategoriesList#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesListConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_categories_list#name DataOciLogAnalyticsLogAnalyticsCategoriesList#name}.

---

### DataOciLogAnalyticsLogAnalyticsCategoriesListItems <a name="DataOciLogAnalyticsLogAnalyticsCategoriesListItems" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesListItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesListItems.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciLogAnalyticsLogAnalyticsCategoriesListItems {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciLogAnalyticsLogAnalyticsCategoriesListItemsList <a name="DataOciLogAnalyticsLogAnalyticsCategoriesListItemsList" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesListItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesListItemsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciLogAnalyticsLogAnalyticsCategoriesListItemsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesListItemsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesListItemsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesListItemsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesListItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesListItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesListItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesListItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesListItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesListItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesListItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesListItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesListItemsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesListItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesListItemsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesListItemsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesListItemsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesListItemsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesListItemsList.get"></a>

```csharp
private DataOciLogAnalyticsLogAnalyticsCategoriesListItemsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesListItemsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesListItemsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesListItemsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesListItemsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesListItemsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciLogAnalyticsLogAnalyticsCategoriesListItemsOutputReference <a name="DataOciLogAnalyticsLogAnalyticsCategoriesListItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesListItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesListItemsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciLogAnalyticsLogAnalyticsCategoriesListItemsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesListItemsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesListItemsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesListItemsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesListItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesListItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesListItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesListItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesListItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesListItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesListItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesListItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesListItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesListItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesListItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesListItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesListItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesListItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesListItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesListItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesListItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesListItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesListItemsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesListItemsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesListItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesListItemsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesListItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesListItemsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesListItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesListItemsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesListItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesListItemsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesListItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesListItemsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesListItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesListItemsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesListItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesListItemsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesListItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesListItemsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesListItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesListItemsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesListItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesListItemsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesListItemsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesListItemsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesListItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesListItemsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesListItemsOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesListItemsOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesListItemsOutputReference.property.isSystem">IsSystem</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesListItemsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesListItemsOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesListItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesListItems">DataOciLogAnalyticsLogAnalyticsCategoriesListItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesListItemsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesListItemsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesListItemsOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesListItemsOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `IsSystem`<sup>Required</sup> <a name="IsSystem" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesListItemsOutputReference.property.isSystem"></a>

```csharp
public IResolvable IsSystem { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesListItemsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesListItemsOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesListItemsOutputReference.property.internalValue"></a>

```csharp
public DataOciLogAnalyticsLogAnalyticsCategoriesListItems InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesListItems">DataOciLogAnalyticsLogAnalyticsCategoriesListItems</a>

---



