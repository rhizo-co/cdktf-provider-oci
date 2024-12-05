# `dataOciLogAnalyticsNamespacePropertiesMetadata` Submodule <a name="`dataOciLogAnalyticsNamespacePropertiesMetadata` Submodule" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciLogAnalyticsNamespacePropertiesMetadata <a name="DataOciLogAnalyticsNamespacePropertiesMetadata" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_properties_metadata oci_log_analytics_namespace_properties_metadata}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciLogAnalyticsNamespacePropertiesMetadata(Construct Scope, string Id, DataOciLogAnalyticsNamespacePropertiesMetadataConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataConfig">DataOciLogAnalyticsNamespacePropertiesMetadataConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataConfig">DataOciLogAnalyticsNamespacePropertiesMetadataConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.resetConstraints">ResetConstraints</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.resetDisplayText">ResetDisplayText</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.resetLevel">ResetLevel</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.resetName">ResetName</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.putFilter"></a>

```csharp
private void PutFilter(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.putFilter.parameter.value"></a>

- *Type:* object

---

##### `ResetConstraints` <a name="ResetConstraints" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.resetConstraints"></a>

```csharp
private void ResetConstraints()
```

##### `ResetDisplayText` <a name="ResetDisplayText" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.resetDisplayText"></a>

```csharp
private void ResetDisplayText()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLevel` <a name="ResetLevel" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.resetLevel"></a>

```csharp
private void ResetLevel()
```

##### `ResetName` <a name="ResetName" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.resetName"></a>

```csharp
private void ResetName()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciLogAnalyticsNamespacePropertiesMetadata resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciLogAnalyticsNamespacePropertiesMetadata.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciLogAnalyticsNamespacePropertiesMetadata.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciLogAnalyticsNamespacePropertiesMetadata.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciLogAnalyticsNamespacePropertiesMetadata.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciLogAnalyticsNamespacePropertiesMetadata resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciLogAnalyticsNamespacePropertiesMetadata to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciLogAnalyticsNamespacePropertiesMetadata that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_properties_metadata#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciLogAnalyticsNamespacePropertiesMetadata to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilterList">DataOciLogAnalyticsNamespacePropertiesMetadataFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.property.propertyMetadataSummaryCollection">PropertyMetadataSummaryCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionList">DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.property.constraintsInput">ConstraintsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.property.displayTextInput">DisplayTextInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.property.filterInput">FilterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.property.levelInput">LevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.property.constraints">Constraints</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.property.displayText">DisplayText</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.property.level">Level</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.property.filter"></a>

```csharp
public DataOciLogAnalyticsNamespacePropertiesMetadataFilterList Filter { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilterList">DataOciLogAnalyticsNamespacePropertiesMetadataFilterList</a>

---

##### `PropertyMetadataSummaryCollection`<sup>Required</sup> <a name="PropertyMetadataSummaryCollection" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.property.propertyMetadataSummaryCollection"></a>

```csharp
public DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionList PropertyMetadataSummaryCollection { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionList">DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionList</a>

---

##### `ConstraintsInput`<sup>Optional</sup> <a name="ConstraintsInput" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.property.constraintsInput"></a>

```csharp
public string ConstraintsInput { get; }
```

- *Type:* string

---

##### `DisplayTextInput`<sup>Optional</sup> <a name="DisplayTextInput" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.property.displayTextInput"></a>

```csharp
public string DisplayTextInput { get; }
```

- *Type:* string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.property.filterInput"></a>

```csharp
public object FilterInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LevelInput`<sup>Optional</sup> <a name="LevelInput" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.property.levelInput"></a>

```csharp
public string LevelInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `Constraints`<sup>Required</sup> <a name="Constraints" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.property.constraints"></a>

```csharp
public string Constraints { get; }
```

- *Type:* string

---

##### `DisplayText`<sup>Required</sup> <a name="DisplayText" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.property.displayText"></a>

```csharp
public string DisplayText { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Level`<sup>Required</sup> <a name="Level" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.property.level"></a>

```csharp
public string Level { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciLogAnalyticsNamespacePropertiesMetadataConfig <a name="DataOciLogAnalyticsNamespacePropertiesMetadataConfig" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciLogAnalyticsNamespacePropertiesMetadataConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Namespace,
    string Constraints = null,
    string DisplayText = null,
    object Filter = null,
    string Id = null,
    string Level = null,
    string Name = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataConfig.property.namespace">Namespace</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_properties_metadata#namespace DataOciLogAnalyticsNamespacePropertiesMetadata#namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataConfig.property.constraints">Constraints</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_properties_metadata#constraints DataOciLogAnalyticsNamespacePropertiesMetadata#constraints}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataConfig.property.displayText">DisplayText</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_properties_metadata#display_text DataOciLogAnalyticsNamespacePropertiesMetadata#display_text}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataConfig.property.filter">Filter</a></code> | <code>object</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_properties_metadata#id DataOciLogAnalyticsNamespacePropertiesMetadata#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataConfig.property.level">Level</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_properties_metadata#level DataOciLogAnalyticsNamespacePropertiesMetadata#level}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_properties_metadata#name DataOciLogAnalyticsNamespacePropertiesMetadata#name}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataConfig.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_properties_metadata#namespace DataOciLogAnalyticsNamespacePropertiesMetadata#namespace}.

---

##### `Constraints`<sup>Optional</sup> <a name="Constraints" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataConfig.property.constraints"></a>

```csharp
public string Constraints { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_properties_metadata#constraints DataOciLogAnalyticsNamespacePropertiesMetadata#constraints}.

---

##### `DisplayText`<sup>Optional</sup> <a name="DisplayText" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataConfig.property.displayText"></a>

```csharp
public string DisplayText { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_properties_metadata#display_text DataOciLogAnalyticsNamespacePropertiesMetadata#display_text}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataConfig.property.filter"></a>

```csharp
public object Filter { get; set; }
```

- *Type:* object

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_properties_metadata#filter DataOciLogAnalyticsNamespacePropertiesMetadata#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_properties_metadata#id DataOciLogAnalyticsNamespacePropertiesMetadata#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Level`<sup>Optional</sup> <a name="Level" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataConfig.property.level"></a>

```csharp
public string Level { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_properties_metadata#level DataOciLogAnalyticsNamespacePropertiesMetadata#level}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_properties_metadata#name DataOciLogAnalyticsNamespacePropertiesMetadata#name}.

---

### DataOciLogAnalyticsNamespacePropertiesMetadataFilter <a name="DataOciLogAnalyticsNamespacePropertiesMetadataFilter" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciLogAnalyticsNamespacePropertiesMetadataFilter {
    string Name,
    string[] Values,
    object Regex = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilter.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_properties_metadata#name DataOciLogAnalyticsNamespacePropertiesMetadata#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilter.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_properties_metadata#values DataOciLogAnalyticsNamespacePropertiesMetadata#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilter.property.regex">Regex</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_properties_metadata#regex DataOciLogAnalyticsNamespacePropertiesMetadata#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilter.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_properties_metadata#name DataOciLogAnalyticsNamespacePropertiesMetadata#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilter.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_properties_metadata#values DataOciLogAnalyticsNamespacePropertiesMetadata#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilter.property.regex"></a>

```csharp
public object Regex { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_properties_metadata#regex DataOciLogAnalyticsNamespacePropertiesMetadata#regex}.

---

### DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollection <a name="DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollection" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollection.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollection {

};
```


### DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItems <a name="DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItems.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItems {

};
```


### DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevels <a name="DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevels" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevels"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevels.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevels {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciLogAnalyticsNamespacePropertiesMetadataFilterList <a name="DataOciLogAnalyticsNamespacePropertiesMetadataFilterList" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciLogAnalyticsNamespacePropertiesMetadataFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilterList.get"></a>

```csharp
private DataOciLogAnalyticsNamespacePropertiesMetadataFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilterList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilterList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciLogAnalyticsNamespacePropertiesMetadataFilterOutputReference <a name="DataOciLogAnalyticsNamespacePropertiesMetadataFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciLogAnalyticsNamespacePropertiesMetadataFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilterOutputReference.resetRegex"></a>

```csharp
private void ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilterOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilterOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilterOutputReference.property.regex">Regex</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilterOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilterOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilterOutputReference.property.regexInput"></a>

```csharp
public object RegexInput { get; }
```

- *Type:* object

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilterOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilterOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilterOutputReference.property.regex"></a>

```csharp
public object Regex { get; }
```

- *Type:* object

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilterOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilterOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevelsList <a name="DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevelsList" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevelsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevelsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevelsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevelsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevelsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevelsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevelsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevelsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevelsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevelsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevelsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevelsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevelsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevelsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevelsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevelsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevelsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevelsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevelsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevelsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevelsList.get"></a>

```csharp
private DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevelsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevelsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevelsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevelsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevelsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevelsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevelsOutputReference <a name="DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevelsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevelsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevelsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevelsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevelsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevelsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevelsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevelsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevelsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevelsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevelsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevelsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevelsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevelsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevelsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevelsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevelsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevelsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevelsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevelsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevelsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevelsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevelsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevelsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevelsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevelsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevelsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevelsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevelsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevelsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevelsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevelsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevelsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevelsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevelsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevelsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevelsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevelsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevelsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevelsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevelsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevelsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevelsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevelsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevelsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevelsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevelsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevelsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevelsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevelsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevelsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevelsOutputReference.property.constraints">Constraints</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevelsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevelsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevels">DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevels</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevelsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevelsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Constraints`<sup>Required</sup> <a name="Constraints" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevelsOutputReference.property.constraints"></a>

```csharp
public string Constraints { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevelsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevelsOutputReference.property.internalValue"></a>

```csharp
public DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevels InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevels">DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevels</a>

---


### DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsList <a name="DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsList.get"></a>

```csharp
private DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsOutputReference <a name="DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsOutputReference.property.defaultValue">DefaultValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsOutputReference.property.levels">Levels</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevelsList">DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevelsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItems">DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DefaultValue`<sup>Required</sup> <a name="DefaultValue" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsOutputReference.property.defaultValue"></a>

```csharp
public string DefaultValue { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Levels`<sup>Required</sup> <a name="Levels" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsOutputReference.property.levels"></a>

```csharp
public DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevelsList Levels { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevelsList">DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevelsList</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsOutputReference.property.internalValue"></a>

```csharp
public DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItems InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItems">DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItems</a>

---


### DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionList <a name="DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionList" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionList.get"></a>

```csharp
private DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionOutputReference <a name="DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsList">DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollection">DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionOutputReference.property.items"></a>

```csharp
public DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsList Items { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsList">DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionOutputReference.property.internalValue"></a>

```csharp
public DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollection InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollection">DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollection</a>

---



