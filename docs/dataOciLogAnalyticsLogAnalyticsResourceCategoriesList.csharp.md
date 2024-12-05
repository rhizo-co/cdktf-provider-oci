# `dataOciLogAnalyticsLogAnalyticsResourceCategoriesList` Submodule <a name="`dataOciLogAnalyticsLogAnalyticsResourceCategoriesList` Submodule" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciLogAnalyticsLogAnalyticsResourceCategoriesList <a name="DataOciLogAnalyticsLogAnalyticsResourceCategoriesList" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_resource_categories_list oci_log_analytics_log_analytics_resource_categories_list}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciLogAnalyticsLogAnalyticsResourceCategoriesList(Construct Scope, string Id, DataOciLogAnalyticsLogAnalyticsResourceCategoriesListConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListConfig">DataOciLogAnalyticsLogAnalyticsResourceCategoriesListConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListConfig">DataOciLogAnalyticsLogAnalyticsResourceCategoriesListConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.resetResourceCategories">ResetResourceCategories</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.resetResourceIds">ResetResourceIds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.resetResourceTypes">ResetResourceTypes</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetResourceCategories` <a name="ResetResourceCategories" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.resetResourceCategories"></a>

```csharp
private void ResetResourceCategories()
```

##### `ResetResourceIds` <a name="ResetResourceIds" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.resetResourceIds"></a>

```csharp
private void ResetResourceIds()
```

##### `ResetResourceTypes` <a name="ResetResourceTypes" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.resetResourceTypes"></a>

```csharp
private void ResetResourceTypes()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciLogAnalyticsLogAnalyticsResourceCategoriesList resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciLogAnalyticsLogAnalyticsResourceCategoriesList resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciLogAnalyticsLogAnalyticsResourceCategoriesList to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciLogAnalyticsLogAnalyticsResourceCategoriesList that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_resource_categories_list#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciLogAnalyticsLogAnalyticsResourceCategoriesList to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.property.categories">Categories</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesList">DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItemsList">DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.property.resourceCategoriesInput">ResourceCategoriesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.property.resourceIdsInput">ResourceIdsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.property.resourceTypesInput">ResourceTypesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.property.resourceCategories">ResourceCategories</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.property.resourceIds">ResourceIds</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.property.resourceTypes">ResourceTypes</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Categories`<sup>Required</sup> <a name="Categories" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.property.categories"></a>

```csharp
public DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesList Categories { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesList">DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesList</a>

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.property.items"></a>

```csharp
public DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItemsList Items { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItemsList">DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItemsList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `ResourceCategoriesInput`<sup>Optional</sup> <a name="ResourceCategoriesInput" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.property.resourceCategoriesInput"></a>

```csharp
public string ResourceCategoriesInput { get; }
```

- *Type:* string

---

##### `ResourceIdsInput`<sup>Optional</sup> <a name="ResourceIdsInput" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.property.resourceIdsInput"></a>

```csharp
public string ResourceIdsInput { get; }
```

- *Type:* string

---

##### `ResourceTypesInput`<sup>Optional</sup> <a name="ResourceTypesInput" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.property.resourceTypesInput"></a>

```csharp
public string ResourceTypesInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `ResourceCategories`<sup>Required</sup> <a name="ResourceCategories" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.property.resourceCategories"></a>

```csharp
public string ResourceCategories { get; }
```

- *Type:* string

---

##### `ResourceIds`<sup>Required</sup> <a name="ResourceIds" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.property.resourceIds"></a>

```csharp
public string ResourceIds { get; }
```

- *Type:* string

---

##### `ResourceTypes`<sup>Required</sup> <a name="ResourceTypes" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.property.resourceTypes"></a>

```csharp
public string ResourceTypes { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategories <a name="DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategories" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategories"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategories.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategories {

};
```


### DataOciLogAnalyticsLogAnalyticsResourceCategoriesListConfig <a name="DataOciLogAnalyticsLogAnalyticsResourceCategoriesListConfig" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciLogAnalyticsLogAnalyticsResourceCategoriesListConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Namespace,
    string Id = null,
    string ResourceCategories = null,
    string ResourceIds = null,
    string ResourceTypes = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListConfig.property.namespace">Namespace</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_resource_categories_list#namespace DataOciLogAnalyticsLogAnalyticsResourceCategoriesList#namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_resource_categories_list#id DataOciLogAnalyticsLogAnalyticsResourceCategoriesList#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListConfig.property.resourceCategories">ResourceCategories</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_resource_categories_list#resource_categories DataOciLogAnalyticsLogAnalyticsResourceCategoriesList#resource_categories}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListConfig.property.resourceIds">ResourceIds</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_resource_categories_list#resource_ids DataOciLogAnalyticsLogAnalyticsResourceCategoriesList#resource_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListConfig.property.resourceTypes">ResourceTypes</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_resource_categories_list#resource_types DataOciLogAnalyticsLogAnalyticsResourceCategoriesList#resource_types}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListConfig.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_resource_categories_list#namespace DataOciLogAnalyticsLogAnalyticsResourceCategoriesList#namespace}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_resource_categories_list#id DataOciLogAnalyticsLogAnalyticsResourceCategoriesList#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ResourceCategories`<sup>Optional</sup> <a name="ResourceCategories" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListConfig.property.resourceCategories"></a>

```csharp
public string ResourceCategories { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_resource_categories_list#resource_categories DataOciLogAnalyticsLogAnalyticsResourceCategoriesList#resource_categories}.

---

##### `ResourceIds`<sup>Optional</sup> <a name="ResourceIds" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListConfig.property.resourceIds"></a>

```csharp
public string ResourceIds { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_resource_categories_list#resource_ids DataOciLogAnalyticsLogAnalyticsResourceCategoriesList#resource_ids}.

---

##### `ResourceTypes`<sup>Optional</sup> <a name="ResourceTypes" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListConfig.property.resourceTypes"></a>

```csharp
public string ResourceTypes { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_resource_categories_list#resource_types DataOciLogAnalyticsLogAnalyticsResourceCategoriesList#resource_types}.

---

### DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItems <a name="DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItems" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItems.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItems {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesList <a name="DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesList" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesList.get"></a>

```csharp
private DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesOutputReference <a name="DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesOutputReference.property.isSystem">IsSystem</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategories">DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategories</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `IsSystem`<sup>Required</sup> <a name="IsSystem" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesOutputReference.property.isSystem"></a>

```csharp
public IResolvable IsSystem { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesOutputReference.property.internalValue"></a>

```csharp
public DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategories InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategories">DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategories</a>

---


### DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItemsList <a name="DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItemsList" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItemsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItemsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItemsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItemsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItemsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItemsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItemsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItemsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItemsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItemsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItemsList.get"></a>

```csharp
private DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItemsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItemsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItemsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItemsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItemsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItemsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItemsOutputReference <a name="DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItemsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItemsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItemsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItemsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItemsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItemsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItemsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItemsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItemsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItemsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItemsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItemsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItemsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItemsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItemsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItemsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItemsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItemsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItemsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItemsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItemsOutputReference.property.categoryName">CategoryName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItemsOutputReference.property.isSystem">IsSystem</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItemsOutputReference.property.resourceId">ResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItemsOutputReference.property.resourceType">ResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItems">DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItemsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItemsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CategoryName`<sup>Required</sup> <a name="CategoryName" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItemsOutputReference.property.categoryName"></a>

```csharp
public string CategoryName { get; }
```

- *Type:* string

---

##### `IsSystem`<sup>Required</sup> <a name="IsSystem" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItemsOutputReference.property.isSystem"></a>

```csharp
public IResolvable IsSystem { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `ResourceId`<sup>Required</sup> <a name="ResourceId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItemsOutputReference.property.resourceId"></a>

```csharp
public string ResourceId { get; }
```

- *Type:* string

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItemsOutputReference.property.resourceType"></a>

```csharp
public string ResourceType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItemsOutputReference.property.internalValue"></a>

```csharp
public DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItems InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItems">DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItems</a>

---



