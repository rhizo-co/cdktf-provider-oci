# `dataOciVnMonitoringPathAnalyzerTests` Submodule <a name="`dataOciVnMonitoringPathAnalyzerTests` Submodule" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciVnMonitoringPathAnalyzerTests <a name="DataOciVnMonitoringPathAnalyzerTests" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/vn_monitoring_path_analyzer_tests oci_vn_monitoring_path_analyzer_tests}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciVnMonitoringPathAnalyzerTests(Construct Scope, string Id, DataOciVnMonitoringPathAnalyzerTestsConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsConfig">DataOciVnMonitoringPathAnalyzerTestsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsConfig">DataOciVnMonitoringPathAnalyzerTestsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.resetState">ResetState</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.putFilter"></a>

```csharp
private void PutFilter(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.putFilter.parameter.value"></a>

- *Type:* object

---

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetState` <a name="ResetState" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.resetState"></a>

```csharp
private void ResetState()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciVnMonitoringPathAnalyzerTests resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciVnMonitoringPathAnalyzerTests.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciVnMonitoringPathAnalyzerTests.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciVnMonitoringPathAnalyzerTests.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciVnMonitoringPathAnalyzerTests.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciVnMonitoringPathAnalyzerTests resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciVnMonitoringPathAnalyzerTests to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciVnMonitoringPathAnalyzerTests that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/vn_monitoring_path_analyzer_tests#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciVnMonitoringPathAnalyzerTests to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterList">DataOciVnMonitoringPathAnalyzerTestsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.property.pathAnalyzerTestCollection">PathAnalyzerTestCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionList">DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.property.filterInput">FilterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.property.stateInput">StateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.property.state">State</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.property.filter"></a>

```csharp
public DataOciVnMonitoringPathAnalyzerTestsFilterList Filter { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterList">DataOciVnMonitoringPathAnalyzerTestsFilterList</a>

---

##### `PathAnalyzerTestCollection`<sup>Required</sup> <a name="PathAnalyzerTestCollection" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.property.pathAnalyzerTestCollection"></a>

```csharp
public DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionList PathAnalyzerTestCollection { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionList">DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionList</a>

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.property.filterInput"></a>

```csharp
public object FilterInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.property.stateInput"></a>

```csharp
public string StateInput { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciVnMonitoringPathAnalyzerTestsConfig <a name="DataOciVnMonitoringPathAnalyzerTestsConfig" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciVnMonitoringPathAnalyzerTestsConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string CompartmentId,
    string DisplayName = null,
    object Filter = null,
    string Id = null,
    string State = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/vn_monitoring_path_analyzer_tests#compartment_id DataOciVnMonitoringPathAnalyzerTests#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/vn_monitoring_path_analyzer_tests#display_name DataOciVnMonitoringPathAnalyzerTests#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsConfig.property.filter">Filter</a></code> | <code>object</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/vn_monitoring_path_analyzer_tests#id DataOciVnMonitoringPathAnalyzerTests#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsConfig.property.state">State</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/vn_monitoring_path_analyzer_tests#state DataOciVnMonitoringPathAnalyzerTests#state}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/vn_monitoring_path_analyzer_tests#compartment_id DataOciVnMonitoringPathAnalyzerTests#compartment_id}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/vn_monitoring_path_analyzer_tests#display_name DataOciVnMonitoringPathAnalyzerTests#display_name}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsConfig.property.filter"></a>

```csharp
public object Filter { get; set; }
```

- *Type:* object

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/vn_monitoring_path_analyzer_tests#filter DataOciVnMonitoringPathAnalyzerTests#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/vn_monitoring_path_analyzer_tests#id DataOciVnMonitoringPathAnalyzerTests#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `State`<sup>Optional</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsConfig.property.state"></a>

```csharp
public string State { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/vn_monitoring_path_analyzer_tests#state DataOciVnMonitoringPathAnalyzerTests#state}.

---

### DataOciVnMonitoringPathAnalyzerTestsFilter <a name="DataOciVnMonitoringPathAnalyzerTestsFilter" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciVnMonitoringPathAnalyzerTestsFilter {
    string Name,
    string[] Values,
    object Regex = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilter.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/vn_monitoring_path_analyzer_tests#name DataOciVnMonitoringPathAnalyzerTests#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilter.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/vn_monitoring_path_analyzer_tests#values DataOciVnMonitoringPathAnalyzerTests#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilter.property.regex">Regex</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/vn_monitoring_path_analyzer_tests#regex DataOciVnMonitoringPathAnalyzerTests#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilter.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/vn_monitoring_path_analyzer_tests#name DataOciVnMonitoringPathAnalyzerTests#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilter.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/vn_monitoring_path_analyzer_tests#values DataOciVnMonitoringPathAnalyzerTests#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilter.property.regex"></a>

```csharp
public object Regex { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/vn_monitoring_path_analyzer_tests#regex DataOciVnMonitoringPathAnalyzerTests#regex}.

---

### DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollection <a name="DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollection" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollection.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollection {

};
```


### DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItems <a name="DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItems.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItems {

};
```


### DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpoint <a name="DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpoint" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpoint"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpoint.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpoint {

};
```


### DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParameters <a name="DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParameters" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParameters"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParameters.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParameters {

};
```


### DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptions <a name="DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptions" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptions {

};
```


### DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpoint <a name="DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpoint" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpoint"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpoint.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpoint {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciVnMonitoringPathAnalyzerTestsFilterList <a name="DataOciVnMonitoringPathAnalyzerTestsFilterList" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciVnMonitoringPathAnalyzerTestsFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterList.get"></a>

```csharp
private DataOciVnMonitoringPathAnalyzerTestsFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciVnMonitoringPathAnalyzerTestsFilterOutputReference <a name="DataOciVnMonitoringPathAnalyzerTestsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciVnMonitoringPathAnalyzerTestsFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterOutputReference.resetRegex"></a>

```csharp
private void ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterOutputReference.property.regex">Regex</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterOutputReference.property.regexInput"></a>

```csharp
public object RegexInput { get; }
```

- *Type:* object

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterOutputReference.property.regex"></a>

```csharp
public object Regex { get; }
```

- *Type:* object

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointList <a name="DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointList" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointList.get"></a>

```csharp
private DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference <a name="DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference.property.address">Address</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference.property.instanceId">InstanceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference.property.listenerId">ListenerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference.property.loadBalancerId">LoadBalancerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference.property.networkLoadBalancerId">NetworkLoadBalancerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference.property.subnetId">SubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference.property.vlanId">VlanId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference.property.vnicId">VnicId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpoint">DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpoint</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Address`<sup>Required</sup> <a name="Address" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference.property.address"></a>

```csharp
public string Address { get; }
```

- *Type:* string

---

##### `InstanceId`<sup>Required</sup> <a name="InstanceId" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference.property.instanceId"></a>

```csharp
public string InstanceId { get; }
```

- *Type:* string

---

##### `ListenerId`<sup>Required</sup> <a name="ListenerId" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference.property.listenerId"></a>

```csharp
public string ListenerId { get; }
```

- *Type:* string

---

##### `LoadBalancerId`<sup>Required</sup> <a name="LoadBalancerId" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference.property.loadBalancerId"></a>

```csharp
public string LoadBalancerId { get; }
```

- *Type:* string

---

##### `NetworkLoadBalancerId`<sup>Required</sup> <a name="NetworkLoadBalancerId" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference.property.networkLoadBalancerId"></a>

```csharp
public string NetworkLoadBalancerId { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference.property.subnetId"></a>

```csharp
public string SubnetId { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `VlanId`<sup>Required</sup> <a name="VlanId" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference.property.vlanId"></a>

```csharp
public string VlanId { get; }
```

- *Type:* string

---

##### `VnicId`<sup>Required</sup> <a name="VnicId" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference.property.vnicId"></a>

```csharp
public string VnicId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference.property.internalValue"></a>

```csharp
public DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpoint InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpoint">DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpoint</a>

---


### DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsList <a name="DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsList.get"></a>

```csharp
private DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference <a name="DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.property.definedTags">DefinedTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.property.destinationEndpoint">DestinationEndpoint</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointList">DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.property.freeformTags">FreeformTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.property.protocol">Protocol</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.property.protocolParameters">ProtocolParameters</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersList">DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.property.queryOptions">QueryOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsList">DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.property.sourceEndpoint">SourceEndpoint</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointList">DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.property.systemTags">SystemTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.property.timeUpdated">TimeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItems">DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.property.definedTags"></a>

```csharp
public StringMap DefinedTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `DestinationEndpoint`<sup>Required</sup> <a name="DestinationEndpoint" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.property.destinationEndpoint"></a>

```csharp
public DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointList DestinationEndpoint { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointList">DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointList</a>

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.property.freeformTags"></a>

```csharp
public StringMap FreeformTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.property.protocol"></a>

```csharp
public double Protocol { get; }
```

- *Type:* double

---

##### `ProtocolParameters`<sup>Required</sup> <a name="ProtocolParameters" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.property.protocolParameters"></a>

```csharp
public DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersList ProtocolParameters { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersList">DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersList</a>

---

##### `QueryOptions`<sup>Required</sup> <a name="QueryOptions" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.property.queryOptions"></a>

```csharp
public DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsList QueryOptions { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsList">DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsList</a>

---

##### `SourceEndpoint`<sup>Required</sup> <a name="SourceEndpoint" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.property.sourceEndpoint"></a>

```csharp
public DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointList SourceEndpoint { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointList">DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointList</a>

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.property.systemTags"></a>

```csharp
public StringMap SystemTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.property.timeUpdated"></a>

```csharp
public string TimeUpdated { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.property.internalValue"></a>

```csharp
public DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItems InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItems">DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItems</a>

---


### DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersList <a name="DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersList" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersList.get"></a>

```csharp
private DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersOutputReference <a name="DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersOutputReference" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersOutputReference.property.destinationPort">DestinationPort</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersOutputReference.property.icmpCode">IcmpCode</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersOutputReference.property.icmpType">IcmpType</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersOutputReference.property.sourcePort">SourcePort</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParameters">DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParameters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DestinationPort`<sup>Required</sup> <a name="DestinationPort" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersOutputReference.property.destinationPort"></a>

```csharp
public double DestinationPort { get; }
```

- *Type:* double

---

##### `IcmpCode`<sup>Required</sup> <a name="IcmpCode" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersOutputReference.property.icmpCode"></a>

```csharp
public double IcmpCode { get; }
```

- *Type:* double

---

##### `IcmpType`<sup>Required</sup> <a name="IcmpType" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersOutputReference.property.icmpType"></a>

```csharp
public double IcmpType { get; }
```

- *Type:* double

---

##### `SourcePort`<sup>Required</sup> <a name="SourcePort" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersOutputReference.property.sourcePort"></a>

```csharp
public double SourcePort { get; }
```

- *Type:* double

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersOutputReference.property.internalValue"></a>

```csharp
public DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParameters InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParameters">DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParameters</a>

---


### DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsList <a name="DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsList" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsList.get"></a>

```csharp
private DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsOutputReference <a name="DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsOutputReference.property.isBiDirectionalAnalysis">IsBiDirectionalAnalysis</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptions">DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IsBiDirectionalAnalysis`<sup>Required</sup> <a name="IsBiDirectionalAnalysis" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsOutputReference.property.isBiDirectionalAnalysis"></a>

```csharp
public IResolvable IsBiDirectionalAnalysis { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsOutputReference.property.internalValue"></a>

```csharp
public DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptions InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptions">DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptions</a>

---


### DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointList <a name="DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointList" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointList.get"></a>

```csharp
private DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference <a name="DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference.property.address">Address</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference.property.instanceId">InstanceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference.property.listenerId">ListenerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference.property.loadBalancerId">LoadBalancerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference.property.networkLoadBalancerId">NetworkLoadBalancerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference.property.subnetId">SubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference.property.vlanId">VlanId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference.property.vnicId">VnicId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpoint">DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpoint</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Address`<sup>Required</sup> <a name="Address" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference.property.address"></a>

```csharp
public string Address { get; }
```

- *Type:* string

---

##### `InstanceId`<sup>Required</sup> <a name="InstanceId" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference.property.instanceId"></a>

```csharp
public string InstanceId { get; }
```

- *Type:* string

---

##### `ListenerId`<sup>Required</sup> <a name="ListenerId" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference.property.listenerId"></a>

```csharp
public string ListenerId { get; }
```

- *Type:* string

---

##### `LoadBalancerId`<sup>Required</sup> <a name="LoadBalancerId" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference.property.loadBalancerId"></a>

```csharp
public string LoadBalancerId { get; }
```

- *Type:* string

---

##### `NetworkLoadBalancerId`<sup>Required</sup> <a name="NetworkLoadBalancerId" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference.property.networkLoadBalancerId"></a>

```csharp
public string NetworkLoadBalancerId { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference.property.subnetId"></a>

```csharp
public string SubnetId { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `VlanId`<sup>Required</sup> <a name="VlanId" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference.property.vlanId"></a>

```csharp
public string VlanId { get; }
```

- *Type:* string

---

##### `VnicId`<sup>Required</sup> <a name="VnicId" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference.property.vnicId"></a>

```csharp
public string VnicId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference.property.internalValue"></a>

```csharp
public DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpoint InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpoint">DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpoint</a>

---


### DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionList <a name="DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionList" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionList.get"></a>

```csharp
private DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionOutputReference <a name="DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsList">DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollection">DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionOutputReference.property.items"></a>

```csharp
public DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsList Items { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsList">DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionOutputReference.property.internalValue"></a>

```csharp
public DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollection InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollection">DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollection</a>

---



