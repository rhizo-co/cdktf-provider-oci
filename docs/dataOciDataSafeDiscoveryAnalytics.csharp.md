# `dataOciDataSafeDiscoveryAnalytics` Submodule <a name="`dataOciDataSafeDiscoveryAnalytics` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDataSafeDiscoveryAnalytics <a name="DataOciDataSafeDiscoveryAnalytics" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_discovery_analytics oci_data_safe_discovery_analytics}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeDiscoveryAnalytics(Construct Scope, string Id, DataOciDataSafeDiscoveryAnalyticsConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsConfig">DataOciDataSafeDiscoveryAnalyticsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsConfig">DataOciDataSafeDiscoveryAnalyticsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.resetCompartmentIdInSubtree">ResetCompartmentIdInSubtree</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.resetGroupBy">ResetGroupBy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.resetIsCommon">ResetIsCommon</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.resetSensitiveDataModelId">ResetSensitiveDataModelId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.resetSensitiveTypeId">ResetSensitiveTypeId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.resetTargetId">ResetTargetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.putFilter"></a>

```csharp
private void PutFilter(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.putFilter.parameter.value"></a>

- *Type:* object

---

##### `ResetCompartmentIdInSubtree` <a name="ResetCompartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.resetCompartmentIdInSubtree"></a>

```csharp
private void ResetCompartmentIdInSubtree()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetGroupBy` <a name="ResetGroupBy" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.resetGroupBy"></a>

```csharp
private void ResetGroupBy()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIsCommon` <a name="ResetIsCommon" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.resetIsCommon"></a>

```csharp
private void ResetIsCommon()
```

##### `ResetSensitiveDataModelId` <a name="ResetSensitiveDataModelId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.resetSensitiveDataModelId"></a>

```csharp
private void ResetSensitiveDataModelId()
```

##### `ResetSensitiveTypeId` <a name="ResetSensitiveTypeId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.resetSensitiveTypeId"></a>

```csharp
private void ResetSensitiveTypeId()
```

##### `ResetTargetId` <a name="ResetTargetId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.resetTargetId"></a>

```csharp
private void ResetTargetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDataSafeDiscoveryAnalytics resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDataSafeDiscoveryAnalytics.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDataSafeDiscoveryAnalytics.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDataSafeDiscoveryAnalytics.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDataSafeDiscoveryAnalytics.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciDataSafeDiscoveryAnalytics resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciDataSafeDiscoveryAnalytics to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciDataSafeDiscoveryAnalytics that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_discovery_analytics#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDataSafeDiscoveryAnalytics to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.property.discoveryAnalyticsCollection">DiscoveryAnalyticsCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionList">DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsFilterList">DataOciDataSafeDiscoveryAnalyticsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.property.compartmentIdInSubtreeInput">CompartmentIdInSubtreeInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.property.filterInput">FilterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.property.groupByInput">GroupByInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.property.isCommonInput">IsCommonInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.property.sensitiveDataModelIdInput">SensitiveDataModelIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.property.sensitiveTypeIdInput">SensitiveTypeIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.property.targetIdInput">TargetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.property.compartmentIdInSubtree">CompartmentIdInSubtree</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.property.groupBy">GroupBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.property.isCommon">IsCommon</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.property.sensitiveDataModelId">SensitiveDataModelId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.property.sensitiveTypeId">SensitiveTypeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.property.targetId">TargetId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `DiscoveryAnalyticsCollection`<sup>Required</sup> <a name="DiscoveryAnalyticsCollection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.property.discoveryAnalyticsCollection"></a>

```csharp
public DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionList DiscoveryAnalyticsCollection { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionList">DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionList</a>

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.property.filter"></a>

```csharp
public DataOciDataSafeDiscoveryAnalyticsFilterList Filter { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsFilterList">DataOciDataSafeDiscoveryAnalyticsFilterList</a>

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `CompartmentIdInSubtreeInput`<sup>Optional</sup> <a name="CompartmentIdInSubtreeInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.property.compartmentIdInSubtreeInput"></a>

```csharp
public object CompartmentIdInSubtreeInput { get; }
```

- *Type:* object

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.property.filterInput"></a>

```csharp
public object FilterInput { get; }
```

- *Type:* object

---

##### `GroupByInput`<sup>Optional</sup> <a name="GroupByInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.property.groupByInput"></a>

```csharp
public string GroupByInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IsCommonInput`<sup>Optional</sup> <a name="IsCommonInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.property.isCommonInput"></a>

```csharp
public object IsCommonInput { get; }
```

- *Type:* object

---

##### `SensitiveDataModelIdInput`<sup>Optional</sup> <a name="SensitiveDataModelIdInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.property.sensitiveDataModelIdInput"></a>

```csharp
public string SensitiveDataModelIdInput { get; }
```

- *Type:* string

---

##### `SensitiveTypeIdInput`<sup>Optional</sup> <a name="SensitiveTypeIdInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.property.sensitiveTypeIdInput"></a>

```csharp
public string SensitiveTypeIdInput { get; }
```

- *Type:* string

---

##### `TargetIdInput`<sup>Optional</sup> <a name="TargetIdInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.property.targetIdInput"></a>

```csharp
public string TargetIdInput { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `CompartmentIdInSubtree`<sup>Required</sup> <a name="CompartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.property.compartmentIdInSubtree"></a>

```csharp
public object CompartmentIdInSubtree { get; }
```

- *Type:* object

---

##### `GroupBy`<sup>Required</sup> <a name="GroupBy" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.property.groupBy"></a>

```csharp
public string GroupBy { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IsCommon`<sup>Required</sup> <a name="IsCommon" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.property.isCommon"></a>

```csharp
public object IsCommon { get; }
```

- *Type:* object

---

##### `SensitiveDataModelId`<sup>Required</sup> <a name="SensitiveDataModelId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.property.sensitiveDataModelId"></a>

```csharp
public string SensitiveDataModelId { get; }
```

- *Type:* string

---

##### `SensitiveTypeId`<sup>Required</sup> <a name="SensitiveTypeId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.property.sensitiveTypeId"></a>

```csharp
public string SensitiveTypeId { get; }
```

- *Type:* string

---

##### `TargetId`<sup>Required</sup> <a name="TargetId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.property.targetId"></a>

```csharp
public string TargetId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDataSafeDiscoveryAnalyticsConfig <a name="DataOciDataSafeDiscoveryAnalyticsConfig" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeDiscoveryAnalyticsConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string CompartmentId,
    object CompartmentIdInSubtree = null,
    object Filter = null,
    string GroupBy = null,
    string Id = null,
    object IsCommon = null,
    string SensitiveDataModelId = null,
    string SensitiveTypeId = null,
    string TargetId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_discovery_analytics#compartment_id DataOciDataSafeDiscoveryAnalytics#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsConfig.property.compartmentIdInSubtree">CompartmentIdInSubtree</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_discovery_analytics#compartment_id_in_subtree DataOciDataSafeDiscoveryAnalytics#compartment_id_in_subtree}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsConfig.property.filter">Filter</a></code> | <code>object</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsConfig.property.groupBy">GroupBy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_discovery_analytics#group_by DataOciDataSafeDiscoveryAnalytics#group_by}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_discovery_analytics#id DataOciDataSafeDiscoveryAnalytics#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsConfig.property.isCommon">IsCommon</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_discovery_analytics#is_common DataOciDataSafeDiscoveryAnalytics#is_common}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsConfig.property.sensitiveDataModelId">SensitiveDataModelId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_discovery_analytics#sensitive_data_model_id DataOciDataSafeDiscoveryAnalytics#sensitive_data_model_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsConfig.property.sensitiveTypeId">SensitiveTypeId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_discovery_analytics#sensitive_type_id DataOciDataSafeDiscoveryAnalytics#sensitive_type_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsConfig.property.targetId">TargetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_discovery_analytics#target_id DataOciDataSafeDiscoveryAnalytics#target_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_discovery_analytics#compartment_id DataOciDataSafeDiscoveryAnalytics#compartment_id}.

---

##### `CompartmentIdInSubtree`<sup>Optional</sup> <a name="CompartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsConfig.property.compartmentIdInSubtree"></a>

```csharp
public object CompartmentIdInSubtree { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_discovery_analytics#compartment_id_in_subtree DataOciDataSafeDiscoveryAnalytics#compartment_id_in_subtree}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsConfig.property.filter"></a>

```csharp
public object Filter { get; set; }
```

- *Type:* object

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_discovery_analytics#filter DataOciDataSafeDiscoveryAnalytics#filter}

---

##### `GroupBy`<sup>Optional</sup> <a name="GroupBy" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsConfig.property.groupBy"></a>

```csharp
public string GroupBy { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_discovery_analytics#group_by DataOciDataSafeDiscoveryAnalytics#group_by}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_discovery_analytics#id DataOciDataSafeDiscoveryAnalytics#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IsCommon`<sup>Optional</sup> <a name="IsCommon" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsConfig.property.isCommon"></a>

```csharp
public object IsCommon { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_discovery_analytics#is_common DataOciDataSafeDiscoveryAnalytics#is_common}.

---

##### `SensitiveDataModelId`<sup>Optional</sup> <a name="SensitiveDataModelId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsConfig.property.sensitiveDataModelId"></a>

```csharp
public string SensitiveDataModelId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_discovery_analytics#sensitive_data_model_id DataOciDataSafeDiscoveryAnalytics#sensitive_data_model_id}.

---

##### `SensitiveTypeId`<sup>Optional</sup> <a name="SensitiveTypeId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsConfig.property.sensitiveTypeId"></a>

```csharp
public string SensitiveTypeId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_discovery_analytics#sensitive_type_id DataOciDataSafeDiscoveryAnalytics#sensitive_type_id}.

---

##### `TargetId`<sup>Optional</sup> <a name="TargetId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsConfig.property.targetId"></a>

```csharp
public string TargetId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_discovery_analytics#target_id DataOciDataSafeDiscoveryAnalytics#target_id}.

---

### DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollection <a name="DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollection.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollection {

};
```


### DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItems <a name="DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItems.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItems {

};
```


### DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsDimensions <a name="DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsDimensions" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsDimensions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsDimensions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsDimensions {

};
```


### DataOciDataSafeDiscoveryAnalyticsFilter <a name="DataOciDataSafeDiscoveryAnalyticsFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeDiscoveryAnalyticsFilter {
    string Name,
    string[] Values,
    object Regex = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsFilter.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_discovery_analytics#name DataOciDataSafeDiscoveryAnalytics#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsFilter.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_discovery_analytics#values DataOciDataSafeDiscoveryAnalytics#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsFilter.property.regex">Regex</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_discovery_analytics#regex DataOciDataSafeDiscoveryAnalytics#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsFilter.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_discovery_analytics#name DataOciDataSafeDiscoveryAnalytics#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsFilter.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_discovery_analytics#values DataOciDataSafeDiscoveryAnalytics#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsFilter.property.regex"></a>

```csharp
public object Regex { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_discovery_analytics#regex DataOciDataSafeDiscoveryAnalytics#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsDimensionsList <a name="DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsDimensionsList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsDimensionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsDimensionsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsDimensionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsDimensionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsDimensionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsDimensionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsDimensionsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsDimensionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsDimensionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsDimensionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsDimensionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsDimensionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsDimensionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsDimensionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsDimensionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsDimensionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsDimensionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsDimensionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsDimensionsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsDimensionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsDimensionsList.get"></a>

```csharp
private DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsDimensionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsDimensionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsDimensionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsDimensionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsDimensionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsDimensionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsDimensionsOutputReference <a name="DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsDimensionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsDimensionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsDimensionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsDimensionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsDimensionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsDimensionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsDimensionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsDimensionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsDimensionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsDimensionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsDimensionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsDimensionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsDimensionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsDimensionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsDimensionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsDimensionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsDimensionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsDimensionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsDimensionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsDimensionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsDimensionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsDimensionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsDimensionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsDimensionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsDimensionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsDimensionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsDimensionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsDimensionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsDimensionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsDimensionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsDimensionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsDimensionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsDimensionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsDimensionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsDimensionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsDimensionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsDimensionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsDimensionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsDimensionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsDimensionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsDimensionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsDimensionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsDimensionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsDimensionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsDimensionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsDimensionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsDimensionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsDimensionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsDimensionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsDimensionsOutputReference.property.sensitiveDataModelId">SensitiveDataModelId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsDimensionsOutputReference.property.sensitiveTypeId">SensitiveTypeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsDimensionsOutputReference.property.targetId">TargetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsDimensionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsDimensions">DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsDimensions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsDimensionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsDimensionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SensitiveDataModelId`<sup>Required</sup> <a name="SensitiveDataModelId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsDimensionsOutputReference.property.sensitiveDataModelId"></a>

```csharp
public string SensitiveDataModelId { get; }
```

- *Type:* string

---

##### `SensitiveTypeId`<sup>Required</sup> <a name="SensitiveTypeId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsDimensionsOutputReference.property.sensitiveTypeId"></a>

```csharp
public string SensitiveTypeId { get; }
```

- *Type:* string

---

##### `TargetId`<sup>Required</sup> <a name="TargetId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsDimensionsOutputReference.property.targetId"></a>

```csharp
public string TargetId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsDimensionsOutputReference.property.internalValue"></a>

```csharp
public DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsDimensions InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsDimensions">DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsDimensions</a>

---


### DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsList <a name="DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsList.get"></a>

```csharp
private DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsOutputReference <a name="DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsOutputReference.property.count">Count</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsOutputReference.property.dimensions">Dimensions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsDimensionsList">DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsDimensionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsOutputReference.property.metricName">MetricName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItems">DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Count`<sup>Required</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsOutputReference.property.count"></a>

```csharp
public string Count { get; }
```

- *Type:* string

---

##### `Dimensions`<sup>Required</sup> <a name="Dimensions" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsOutputReference.property.dimensions"></a>

```csharp
public DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsDimensionsList Dimensions { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsDimensionsList">DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsDimensionsList</a>

---

##### `MetricName`<sup>Required</sup> <a name="MetricName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsOutputReference.property.metricName"></a>

```csharp
public string MetricName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsOutputReference.property.internalValue"></a>

```csharp
public DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItems InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItems">DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItems</a>

---


### DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionList <a name="DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionList.get"></a>

```csharp
private DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionOutputReference <a name="DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsList">DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollection">DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionOutputReference.property.items"></a>

```csharp
public DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsList Items { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsList">DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionOutputReference.property.internalValue"></a>

```csharp
public DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollection InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollection">DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollection</a>

---


### DataOciDataSafeDiscoveryAnalyticsFilterList <a name="DataOciDataSafeDiscoveryAnalyticsFilterList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsFilterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeDiscoveryAnalyticsFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsFilterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsFilterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsFilterList.get"></a>

```csharp
private DataOciDataSafeDiscoveryAnalyticsFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsFilterList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsFilterList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciDataSafeDiscoveryAnalyticsFilterOutputReference <a name="DataOciDataSafeDiscoveryAnalyticsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeDiscoveryAnalyticsFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsFilterOutputReference.resetRegex"></a>

```csharp
private void ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsFilterOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsFilterOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsFilterOutputReference.property.regex">Regex</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsFilterOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsFilterOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsFilterOutputReference.property.regexInput"></a>

```csharp
public object RegexInput { get; }
```

- *Type:* object

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsFilterOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsFilterOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsFilterOutputReference.property.regex"></a>

```csharp
public object Regex { get; }
```

- *Type:* object

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsFilterOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsFilterOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



