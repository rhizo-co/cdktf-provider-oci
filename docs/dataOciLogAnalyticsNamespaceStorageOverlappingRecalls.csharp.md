# `dataOciLogAnalyticsNamespaceStorageOverlappingRecalls` Submodule <a name="`dataOciLogAnalyticsNamespaceStorageOverlappingRecalls` Submodule" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciLogAnalyticsNamespaceStorageOverlappingRecalls <a name="DataOciLogAnalyticsNamespaceStorageOverlappingRecalls" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_storage_overlapping_recalls oci_log_analytics_namespace_storage_overlapping_recalls}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciLogAnalyticsNamespaceStorageOverlappingRecalls(Construct Scope, string Id, DataOciLogAnalyticsNamespaceStorageOverlappingRecallsConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsConfig">DataOciLogAnalyticsNamespaceStorageOverlappingRecallsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsConfig">DataOciLogAnalyticsNamespaceStorageOverlappingRecallsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.resetTimeDataEnded">ResetTimeDataEnded</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.resetTimeDataStarted">ResetTimeDataStarted</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.putFilter"></a>

```csharp
private void PutFilter(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.putFilter.parameter.value"></a>

- *Type:* object

---

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeDataEnded` <a name="ResetTimeDataEnded" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.resetTimeDataEnded"></a>

```csharp
private void ResetTimeDataEnded()
```

##### `ResetTimeDataStarted` <a name="ResetTimeDataStarted" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.resetTimeDataStarted"></a>

```csharp
private void ResetTimeDataStarted()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciLogAnalyticsNamespaceStorageOverlappingRecalls resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciLogAnalyticsNamespaceStorageOverlappingRecalls resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciLogAnalyticsNamespaceStorageOverlappingRecalls to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciLogAnalyticsNamespaceStorageOverlappingRecalls that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_storage_overlapping_recalls#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciLogAnalyticsNamespaceStorageOverlappingRecalls to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterList">DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.property.overlappingRecallCollection">OverlappingRecallCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionList">DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.property.filterInput">FilterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.property.timeDataEndedInput">TimeDataEndedInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.property.timeDataStartedInput">TimeDataStartedInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.property.timeDataEnded">TimeDataEnded</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.property.timeDataStarted">TimeDataStarted</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.property.filter"></a>

```csharp
public DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterList Filter { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterList">DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterList</a>

---

##### `OverlappingRecallCollection`<sup>Required</sup> <a name="OverlappingRecallCollection" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.property.overlappingRecallCollection"></a>

```csharp
public DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionList OverlappingRecallCollection { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionList">DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionList</a>

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.property.filterInput"></a>

```csharp
public object FilterInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `TimeDataEndedInput`<sup>Optional</sup> <a name="TimeDataEndedInput" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.property.timeDataEndedInput"></a>

```csharp
public string TimeDataEndedInput { get; }
```

- *Type:* string

---

##### `TimeDataStartedInput`<sup>Optional</sup> <a name="TimeDataStartedInput" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.property.timeDataStartedInput"></a>

```csharp
public string TimeDataStartedInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `TimeDataEnded`<sup>Required</sup> <a name="TimeDataEnded" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.property.timeDataEnded"></a>

```csharp
public string TimeDataEnded { get; }
```

- *Type:* string

---

##### `TimeDataStarted`<sup>Required</sup> <a name="TimeDataStarted" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.property.timeDataStarted"></a>

```csharp
public string TimeDataStarted { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciLogAnalyticsNamespaceStorageOverlappingRecallsConfig <a name="DataOciLogAnalyticsNamespaceStorageOverlappingRecallsConfig" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciLogAnalyticsNamespaceStorageOverlappingRecallsConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Namespace,
    object Filter = null,
    string Id = null,
    string TimeDataEnded = null,
    string TimeDataStarted = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsConfig.property.namespace">Namespace</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_storage_overlapping_recalls#namespace DataOciLogAnalyticsNamespaceStorageOverlappingRecalls#namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsConfig.property.filter">Filter</a></code> | <code>object</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_storage_overlapping_recalls#id DataOciLogAnalyticsNamespaceStorageOverlappingRecalls#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsConfig.property.timeDataEnded">TimeDataEnded</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_storage_overlapping_recalls#time_data_ended DataOciLogAnalyticsNamespaceStorageOverlappingRecalls#time_data_ended}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsConfig.property.timeDataStarted">TimeDataStarted</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_storage_overlapping_recalls#time_data_started DataOciLogAnalyticsNamespaceStorageOverlappingRecalls#time_data_started}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsConfig.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_storage_overlapping_recalls#namespace DataOciLogAnalyticsNamespaceStorageOverlappingRecalls#namespace}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsConfig.property.filter"></a>

```csharp
public object Filter { get; set; }
```

- *Type:* object

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_storage_overlapping_recalls#filter DataOciLogAnalyticsNamespaceStorageOverlappingRecalls#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_storage_overlapping_recalls#id DataOciLogAnalyticsNamespaceStorageOverlappingRecalls#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `TimeDataEnded`<sup>Optional</sup> <a name="TimeDataEnded" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsConfig.property.timeDataEnded"></a>

```csharp
public string TimeDataEnded { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_storage_overlapping_recalls#time_data_ended DataOciLogAnalyticsNamespaceStorageOverlappingRecalls#time_data_ended}.

---

##### `TimeDataStarted`<sup>Optional</sup> <a name="TimeDataStarted" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsConfig.property.timeDataStarted"></a>

```csharp
public string TimeDataStarted { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_storage_overlapping_recalls#time_data_started DataOciLogAnalyticsNamespaceStorageOverlappingRecalls#time_data_started}.

---

### DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilter <a name="DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilter" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilter {
    string Name,
    string[] Values,
    object Regex = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilter.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_storage_overlapping_recalls#name DataOciLogAnalyticsNamespaceStorageOverlappingRecalls#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilter.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_storage_overlapping_recalls#values DataOciLogAnalyticsNamespaceStorageOverlappingRecalls#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilter.property.regex">Regex</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_storage_overlapping_recalls#regex DataOciLogAnalyticsNamespaceStorageOverlappingRecalls#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilter.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_storage_overlapping_recalls#name DataOciLogAnalyticsNamespaceStorageOverlappingRecalls#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilter.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_storage_overlapping_recalls#values DataOciLogAnalyticsNamespaceStorageOverlappingRecalls#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilter.property.regex"></a>

```csharp
public object Regex { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_storage_overlapping_recalls#regex DataOciLogAnalyticsNamespaceStorageOverlappingRecalls#regex}.

---

### DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollection <a name="DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollection" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollection.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollection {

};
```


### DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItems <a name="DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItems.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItems {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterList <a name="DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterList" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterList.get"></a>

```csharp
private DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterOutputReference <a name="DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterOutputReference.resetRegex"></a>

```csharp
private void ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterOutputReference.property.regex">Regex</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterOutputReference.property.regexInput"></a>

```csharp
public object RegexInput { get; }
```

- *Type:* object

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterOutputReference.property.regex"></a>

```csharp
public object Regex { get; }
```

- *Type:* object

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsList <a name="DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsList.get"></a>

```csharp
private DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsOutputReference <a name="DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsOutputReference.property.collectionId">CollectionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsOutputReference.property.createdBy">CreatedBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsOutputReference.property.logSets">LogSets</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsOutputReference.property.purpose">Purpose</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsOutputReference.property.queryString">QueryString</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsOutputReference.property.recallId">RecallId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsOutputReference.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsOutputReference.property.timeDataEnded">TimeDataEnded</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsOutputReference.property.timeDataStarted">TimeDataStarted</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsOutputReference.property.timeStarted">TimeStarted</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItems">DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CollectionId`<sup>Required</sup> <a name="CollectionId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsOutputReference.property.collectionId"></a>

```csharp
public string CollectionId { get; }
```

- *Type:* string

---

##### `CreatedBy`<sup>Required</sup> <a name="CreatedBy" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsOutputReference.property.createdBy"></a>

```csharp
public string CreatedBy { get; }
```

- *Type:* string

---

##### `LogSets`<sup>Required</sup> <a name="LogSets" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsOutputReference.property.logSets"></a>

```csharp
public string LogSets { get; }
```

- *Type:* string

---

##### `Purpose`<sup>Required</sup> <a name="Purpose" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsOutputReference.property.purpose"></a>

```csharp
public string Purpose { get; }
```

- *Type:* string

---

##### `QueryString`<sup>Required</sup> <a name="QueryString" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsOutputReference.property.queryString"></a>

```csharp
public string QueryString { get; }
```

- *Type:* string

---

##### `RecallId`<sup>Required</sup> <a name="RecallId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsOutputReference.property.recallId"></a>

```csharp
public string RecallId { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsOutputReference.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `TimeDataEnded`<sup>Required</sup> <a name="TimeDataEnded" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsOutputReference.property.timeDataEnded"></a>

```csharp
public string TimeDataEnded { get; }
```

- *Type:* string

---

##### `TimeDataStarted`<sup>Required</sup> <a name="TimeDataStarted" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsOutputReference.property.timeDataStarted"></a>

```csharp
public string TimeDataStarted { get; }
```

- *Type:* string

---

##### `TimeStarted`<sup>Required</sup> <a name="TimeStarted" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsOutputReference.property.timeStarted"></a>

```csharp
public string TimeStarted { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsOutputReference.property.internalValue"></a>

```csharp
public DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItems InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItems">DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItems</a>

---


### DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionList <a name="DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionList" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionList.get"></a>

```csharp
private DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionOutputReference <a name="DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsList">DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollection">DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionOutputReference.property.items"></a>

```csharp
public DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsList Items { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsList">DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionOutputReference.property.internalValue"></a>

```csharp
public DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollection InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollection">DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollection</a>

---



