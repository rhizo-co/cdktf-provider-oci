# `dataOciLogAnalyticsLogAnalyticsObjectCollectionRules` Submodule <a name="`dataOciLogAnalyticsLogAnalyticsObjectCollectionRules` Submodule" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciLogAnalyticsLogAnalyticsObjectCollectionRules <a name="DataOciLogAnalyticsLogAnalyticsObjectCollectionRules" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_object_collection_rules oci_log_analytics_log_analytics_object_collection_rules}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciLogAnalyticsLogAnalyticsObjectCollectionRules(Construct Scope, string Id, DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesConfig">DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesConfig">DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.resetState">ResetState</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.putFilter"></a>

```csharp
private void PutFilter(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.putFilter.parameter.value"></a>

- *Type:* object

---

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetName` <a name="ResetName" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetState` <a name="ResetState" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.resetState"></a>

```csharp
private void ResetState()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciLogAnalyticsLogAnalyticsObjectCollectionRules resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciLogAnalyticsLogAnalyticsObjectCollectionRules resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciLogAnalyticsLogAnalyticsObjectCollectionRules to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciLogAnalyticsLogAnalyticsObjectCollectionRules that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_object_collection_rules#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciLogAnalyticsLogAnalyticsObjectCollectionRules to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterList">DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.property.logAnalyticsObjectCollectionRuleCollection">LogAnalyticsObjectCollectionRuleCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionList">DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.property.filterInput">FilterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.property.stateInput">StateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.property.state">State</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.property.filter"></a>

```csharp
public DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterList Filter { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterList">DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterList</a>

---

##### `LogAnalyticsObjectCollectionRuleCollection`<sup>Required</sup> <a name="LogAnalyticsObjectCollectionRuleCollection" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.property.logAnalyticsObjectCollectionRuleCollection"></a>

```csharp
public DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionList LogAnalyticsObjectCollectionRuleCollection { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionList">DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionList</a>

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.property.filterInput"></a>

```csharp
public object FilterInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.property.stateInput"></a>

```csharp
public string StateInput { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesConfig <a name="DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesConfig" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string CompartmentId,
    string Namespace,
    object Filter = null,
    string Id = null,
    string Name = null,
    string State = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_object_collection_rules#compartment_id DataOciLogAnalyticsLogAnalyticsObjectCollectionRules#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesConfig.property.namespace">Namespace</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_object_collection_rules#namespace DataOciLogAnalyticsLogAnalyticsObjectCollectionRules#namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesConfig.property.filter">Filter</a></code> | <code>object</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_object_collection_rules#id DataOciLogAnalyticsLogAnalyticsObjectCollectionRules#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_object_collection_rules#name DataOciLogAnalyticsLogAnalyticsObjectCollectionRules#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesConfig.property.state">State</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_object_collection_rules#state DataOciLogAnalyticsLogAnalyticsObjectCollectionRules#state}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_object_collection_rules#compartment_id DataOciLogAnalyticsLogAnalyticsObjectCollectionRules#compartment_id}.

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesConfig.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_object_collection_rules#namespace DataOciLogAnalyticsLogAnalyticsObjectCollectionRules#namespace}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesConfig.property.filter"></a>

```csharp
public object Filter { get; set; }
```

- *Type:* object

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_object_collection_rules#filter DataOciLogAnalyticsLogAnalyticsObjectCollectionRules#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_object_collection_rules#id DataOciLogAnalyticsLogAnalyticsObjectCollectionRules#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_object_collection_rules#name DataOciLogAnalyticsLogAnalyticsObjectCollectionRules#name}.

---

##### `State`<sup>Optional</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesConfig.property.state"></a>

```csharp
public string State { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_object_collection_rules#state DataOciLogAnalyticsLogAnalyticsObjectCollectionRules#state}.

---

### DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilter <a name="DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilter" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilter {
    string Name,
    string[] Values,
    object Regex = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilter.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_object_collection_rules#name DataOciLogAnalyticsLogAnalyticsObjectCollectionRules#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilter.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_object_collection_rules#values DataOciLogAnalyticsLogAnalyticsObjectCollectionRules#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilter.property.regex">Regex</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_object_collection_rules#regex DataOciLogAnalyticsLogAnalyticsObjectCollectionRules#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilter.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_object_collection_rules#name DataOciLogAnalyticsLogAnalyticsObjectCollectionRules#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilter.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_object_collection_rules#values DataOciLogAnalyticsLogAnalyticsObjectCollectionRules#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilter.property.regex"></a>

```csharp
public object Regex { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_object_collection_rules#regex DataOciLogAnalyticsLogAnalyticsObjectCollectionRules#regex}.

---

### DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollection <a name="DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollection" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollection.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollection {

};
```


### DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItems <a name="DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItems.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItems {

};
```


### DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverrides <a name="DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverrides" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverrides"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverrides.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverrides {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterList <a name="DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterList" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterList.get"></a>

```csharp
private DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterOutputReference <a name="DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterOutputReference.resetRegex"></a>

```csharp
private void ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterOutputReference.property.regex">Regex</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterOutputReference.property.regexInput"></a>

```csharp
public object RegexInput { get; }
```

- *Type:* object

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterOutputReference.property.regex"></a>

```csharp
public object Regex { get; }
```

- *Type:* object

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsList <a name="DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsList.get"></a>

```csharp
private DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference <a name="DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.property.charEncoding">CharEncoding</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.property.collectionType">CollectionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.property.definedTags">DefinedTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.property.entityId">EntityId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.property.freeformTags">FreeformTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.property.isEnabled">IsEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.property.isForceHistoricCollection">IsForceHistoricCollection</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.property.lifecycleDetails">LifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.property.logGroupId">LogGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.property.logSet">LogSet</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.property.logSetExtRegex">LogSetExtRegex</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.property.logSetKey">LogSetKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.property.logSourceName">LogSourceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.property.logType">LogType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.property.objectNameFilters">ObjectNameFilters</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.property.osBucketName">OsBucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.property.osNamespace">OsNamespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.property.overrides">Overrides</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesList">DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.property.pollSince">PollSince</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.property.pollTill">PollTill</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.property.timeUpdated">TimeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.property.timezone">Timezone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItems">DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CharEncoding`<sup>Required</sup> <a name="CharEncoding" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.property.charEncoding"></a>

```csharp
public string CharEncoding { get; }
```

- *Type:* string

---

##### `CollectionType`<sup>Required</sup> <a name="CollectionType" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.property.collectionType"></a>

```csharp
public string CollectionType { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.property.definedTags"></a>

```csharp
public StringMap DefinedTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `EntityId`<sup>Required</sup> <a name="EntityId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.property.entityId"></a>

```csharp
public string EntityId { get; }
```

- *Type:* string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.property.freeformTags"></a>

```csharp
public StringMap FreeformTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IsEnabled`<sup>Required</sup> <a name="IsEnabled" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.property.isEnabled"></a>

```csharp
public IResolvable IsEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IsForceHistoricCollection`<sup>Required</sup> <a name="IsForceHistoricCollection" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.property.isForceHistoricCollection"></a>

```csharp
public IResolvable IsForceHistoricCollection { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.property.lifecycleDetails"></a>

```csharp
public string LifecycleDetails { get; }
```

- *Type:* string

---

##### `LogGroupId`<sup>Required</sup> <a name="LogGroupId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.property.logGroupId"></a>

```csharp
public string LogGroupId { get; }
```

- *Type:* string

---

##### `LogSet`<sup>Required</sup> <a name="LogSet" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.property.logSet"></a>

```csharp
public string LogSet { get; }
```

- *Type:* string

---

##### `LogSetExtRegex`<sup>Required</sup> <a name="LogSetExtRegex" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.property.logSetExtRegex"></a>

```csharp
public string LogSetExtRegex { get; }
```

- *Type:* string

---

##### `LogSetKey`<sup>Required</sup> <a name="LogSetKey" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.property.logSetKey"></a>

```csharp
public string LogSetKey { get; }
```

- *Type:* string

---

##### `LogSourceName`<sup>Required</sup> <a name="LogSourceName" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.property.logSourceName"></a>

```csharp
public string LogSourceName { get; }
```

- *Type:* string

---

##### `LogType`<sup>Required</sup> <a name="LogType" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.property.logType"></a>

```csharp
public string LogType { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `ObjectNameFilters`<sup>Required</sup> <a name="ObjectNameFilters" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.property.objectNameFilters"></a>

```csharp
public string[] ObjectNameFilters { get; }
```

- *Type:* string[]

---

##### `OsBucketName`<sup>Required</sup> <a name="OsBucketName" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.property.osBucketName"></a>

```csharp
public string OsBucketName { get; }
```

- *Type:* string

---

##### `OsNamespace`<sup>Required</sup> <a name="OsNamespace" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.property.osNamespace"></a>

```csharp
public string OsNamespace { get; }
```

- *Type:* string

---

##### `Overrides`<sup>Required</sup> <a name="Overrides" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.property.overrides"></a>

```csharp
public DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesList Overrides { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesList">DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesList</a>

---

##### `PollSince`<sup>Required</sup> <a name="PollSince" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.property.pollSince"></a>

```csharp
public string PollSince { get; }
```

- *Type:* string

---

##### `PollTill`<sup>Required</sup> <a name="PollTill" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.property.pollTill"></a>

```csharp
public string PollTill { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.property.timeUpdated"></a>

```csharp
public string TimeUpdated { get; }
```

- *Type:* string

---

##### `Timezone`<sup>Required</sup> <a name="Timezone" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.property.timezone"></a>

```csharp
public string Timezone { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.property.internalValue"></a>

```csharp
public DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItems InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItems">DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItems</a>

---


### DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesList <a name="DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesList" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesList.get"></a>

```csharp
private DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesOutputReference <a name="DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesOutputReference.property.matchType">MatchType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesOutputReference.property.matchValue">MatchValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesOutputReference.property.propertyName">PropertyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesOutputReference.property.propertyValue">PropertyValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverrides">DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverrides</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MatchType`<sup>Required</sup> <a name="MatchType" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesOutputReference.property.matchType"></a>

```csharp
public string MatchType { get; }
```

- *Type:* string

---

##### `MatchValue`<sup>Required</sup> <a name="MatchValue" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesOutputReference.property.matchValue"></a>

```csharp
public string MatchValue { get; }
```

- *Type:* string

---

##### `PropertyName`<sup>Required</sup> <a name="PropertyName" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesOutputReference.property.propertyName"></a>

```csharp
public string PropertyName { get; }
```

- *Type:* string

---

##### `PropertyValue`<sup>Required</sup> <a name="PropertyValue" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesOutputReference.property.propertyValue"></a>

```csharp
public string PropertyValue { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesOutputReference.property.internalValue"></a>

```csharp
public DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverrides InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverrides">DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverrides</a>

---


### DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionList <a name="DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionList" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionList.get"></a>

```csharp
private DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionOutputReference <a name="DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsList">DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollection">DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionOutputReference.property.items"></a>

```csharp
public DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsList Items { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsList">DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionOutputReference.property.internalValue"></a>

```csharp
public DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollection InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollection">DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollection</a>

---



