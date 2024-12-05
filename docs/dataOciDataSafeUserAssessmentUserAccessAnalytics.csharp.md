# `dataOciDataSafeUserAssessmentUserAccessAnalytics` Submodule <a name="`dataOciDataSafeUserAssessmentUserAccessAnalytics` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDataSafeUserAssessmentUserAccessAnalytics <a name="DataOciDataSafeUserAssessmentUserAccessAnalytics" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalytics"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_user_access_analytics oci_data_safe_user_assessment_user_access_analytics}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalytics.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeUserAssessmentUserAccessAnalytics(Construct Scope, string Id, DataOciDataSafeUserAssessmentUserAccessAnalyticsConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalytics.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalytics.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalytics.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsConfig">DataOciDataSafeUserAssessmentUserAccessAnalyticsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalytics.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalytics.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalytics.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsConfig">DataOciDataSafeUserAssessmentUserAccessAnalyticsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalytics.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalytics.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalytics.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalytics.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalytics.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalytics.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalytics.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalytics.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalytics.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalytics.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalytics.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalytics.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalytics.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalytics.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalytics.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalytics.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalytics.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalytics.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalytics.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalytics.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalytics.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalytics.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalytics.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalytics.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalytics.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalytics.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalytics.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalytics.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalytics.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalytics.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalytics.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalytics.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalytics.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalytics.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalytics.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalytics.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalytics.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalytics.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalytics.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalytics.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalytics.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalytics.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalytics.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalytics.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalytics.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalytics.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalytics.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalytics.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalytics.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalytics.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalytics.putFilter"></a>

```csharp
private void PutFilter(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalytics.putFilter.parameter.value"></a>

- *Type:* object

---

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalytics.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalytics.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalytics.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalytics.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalytics.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalytics.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDataSafeUserAssessmentUserAccessAnalytics resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalytics.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDataSafeUserAssessmentUserAccessAnalytics.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalytics.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalytics.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDataSafeUserAssessmentUserAccessAnalytics.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalytics.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalytics.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDataSafeUserAssessmentUserAccessAnalytics.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalytics.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalytics.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDataSafeUserAssessmentUserAccessAnalytics.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciDataSafeUserAssessmentUserAccessAnalytics resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalytics.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalytics.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciDataSafeUserAssessmentUserAccessAnalytics to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalytics.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciDataSafeUserAssessmentUserAccessAnalytics that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_user_access_analytics#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalytics.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDataSafeUserAssessmentUserAccessAnalytics to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalytics.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalytics.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalytics.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalytics.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalytics.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalytics.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalytics.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalytics.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalytics.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalytics.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalytics.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalytics.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalytics.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsFilterList">DataOciDataSafeUserAssessmentUserAccessAnalyticsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalytics.property.userAccessAnalyticsCollection">UserAccessAnalyticsCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionList">DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalytics.property.filterInput">FilterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalytics.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalytics.property.userAssessmentIdInput">UserAssessmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalytics.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalytics.property.userAssessmentId">UserAssessmentId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalytics.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalytics.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalytics.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalytics.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalytics.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalytics.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalytics.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalytics.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalytics.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalytics.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalytics.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalytics.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalytics.property.filter"></a>

```csharp
public DataOciDataSafeUserAssessmentUserAccessAnalyticsFilterList Filter { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsFilterList">DataOciDataSafeUserAssessmentUserAccessAnalyticsFilterList</a>

---

##### `UserAccessAnalyticsCollection`<sup>Required</sup> <a name="UserAccessAnalyticsCollection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalytics.property.userAccessAnalyticsCollection"></a>

```csharp
public DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionList UserAccessAnalyticsCollection { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionList">DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionList</a>

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalytics.property.filterInput"></a>

```csharp
public object FilterInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalytics.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `UserAssessmentIdInput`<sup>Optional</sup> <a name="UserAssessmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalytics.property.userAssessmentIdInput"></a>

```csharp
public string UserAssessmentIdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalytics.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `UserAssessmentId`<sup>Required</sup> <a name="UserAssessmentId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalytics.property.userAssessmentId"></a>

```csharp
public string UserAssessmentId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalytics.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalytics.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDataSafeUserAssessmentUserAccessAnalyticsConfig <a name="DataOciDataSafeUserAssessmentUserAccessAnalyticsConfig" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeUserAssessmentUserAccessAnalyticsConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string UserAssessmentId,
    object Filter = null,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsConfig.property.userAssessmentId">UserAssessmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_user_access_analytics#user_assessment_id DataOciDataSafeUserAssessmentUserAccessAnalytics#user_assessment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsConfig.property.filter">Filter</a></code> | <code>object</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_user_access_analytics#id DataOciDataSafeUserAssessmentUserAccessAnalytics#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `UserAssessmentId`<sup>Required</sup> <a name="UserAssessmentId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsConfig.property.userAssessmentId"></a>

```csharp
public string UserAssessmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_user_access_analytics#user_assessment_id DataOciDataSafeUserAssessmentUserAccessAnalytics#user_assessment_id}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsConfig.property.filter"></a>

```csharp
public object Filter { get; set; }
```

- *Type:* object

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_user_access_analytics#filter DataOciDataSafeUserAssessmentUserAccessAnalytics#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_user_access_analytics#id DataOciDataSafeUserAssessmentUserAccessAnalytics#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciDataSafeUserAssessmentUserAccessAnalyticsFilter <a name="DataOciDataSafeUserAssessmentUserAccessAnalyticsFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeUserAssessmentUserAccessAnalyticsFilter {
    string Name,
    string[] Values,
    object Regex = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsFilter.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_user_access_analytics#name DataOciDataSafeUserAssessmentUserAccessAnalytics#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsFilter.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_user_access_analytics#values DataOciDataSafeUserAssessmentUserAccessAnalytics#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsFilter.property.regex">Regex</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_user_access_analytics#regex DataOciDataSafeUserAssessmentUserAccessAnalytics#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsFilter.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_user_access_analytics#name DataOciDataSafeUserAssessmentUserAccessAnalytics#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsFilter.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_user_access_analytics#values DataOciDataSafeUserAssessmentUserAccessAnalytics#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsFilter.property.regex"></a>

```csharp
public object Regex { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_user_access_analytics#regex DataOciDataSafeUserAssessmentUserAccessAnalytics#regex}.

---

### DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollection <a name="DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollection.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollection {

};
```


### DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionItems <a name="DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionItems.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionItems {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDataSafeUserAssessmentUserAccessAnalyticsFilterList <a name="DataOciDataSafeUserAssessmentUserAccessAnalyticsFilterList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsFilterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeUserAssessmentUserAccessAnalyticsFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsFilterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsFilterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsFilterList.get"></a>

```csharp
private DataOciDataSafeUserAssessmentUserAccessAnalyticsFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsFilterList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsFilterList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciDataSafeUserAssessmentUserAccessAnalyticsFilterOutputReference <a name="DataOciDataSafeUserAssessmentUserAccessAnalyticsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeUserAssessmentUserAccessAnalyticsFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsFilterOutputReference.resetRegex"></a>

```csharp
private void ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsFilterOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsFilterOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsFilterOutputReference.property.regex">Regex</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsFilterOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsFilterOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsFilterOutputReference.property.regexInput"></a>

```csharp
public object RegexInput { get; }
```

- *Type:* object

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsFilterOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsFilterOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsFilterOutputReference.property.regex"></a>

```csharp
public object Regex { get; }
```

- *Type:* object

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsFilterOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsFilterOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionItemsList <a name="DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionItemsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionItemsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionItemsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionItemsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionItemsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionItemsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionItemsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionItemsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionItemsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionItemsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionItemsList.get"></a>

```csharp
private DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionItemsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionItemsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionItemsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionItemsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionItemsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionItemsOutputReference <a name="DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionItemsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionItemsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionItemsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionItemsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionItemsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionItemsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionItemsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionItemsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionItemsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionItemsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionItemsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionItemsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionItemsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionItemsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionItemsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionItemsOutputReference.property.userAssessmentUserAccessAnalyticCount">UserAssessmentUserAccessAnalyticCount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionItemsOutputReference.property.userName">UserName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionItems">DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionItemsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionItemsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `UserAssessmentUserAccessAnalyticCount`<sup>Required</sup> <a name="UserAssessmentUserAccessAnalyticCount" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionItemsOutputReference.property.userAssessmentUserAccessAnalyticCount"></a>

```csharp
public string UserAssessmentUserAccessAnalyticCount { get; }
```

- *Type:* string

---

##### `UserName`<sup>Required</sup> <a name="UserName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionItemsOutputReference.property.userName"></a>

```csharp
public string UserName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionItemsOutputReference.property.internalValue"></a>

```csharp
public DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionItems InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionItems">DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionItems</a>

---


### DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionList <a name="DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionList.get"></a>

```csharp
private DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionOutputReference <a name="DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionItemsList">DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollection">DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionOutputReference.property.items"></a>

```csharp
public DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionItemsList Items { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionItemsList">DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionOutputReference.property.internalValue"></a>

```csharp
public DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollection InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollection">DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollection</a>

---



