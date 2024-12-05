# `dataOciLogAnalyticsNamespaceIngestTimeRules` Submodule <a name="`dataOciLogAnalyticsNamespaceIngestTimeRules` Submodule" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciLogAnalyticsNamespaceIngestTimeRules <a name="DataOciLogAnalyticsNamespaceIngestTimeRules" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_ingest_time_rules oci_log_analytics_namespace_ingest_time_rules}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciLogAnalyticsNamespaceIngestTimeRules(Construct Scope, string Id, DataOciLogAnalyticsNamespaceIngestTimeRulesConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesConfig">DataOciLogAnalyticsNamespaceIngestTimeRulesConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesConfig">DataOciLogAnalyticsNamespaceIngestTimeRulesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.resetConditionKind">ResetConditionKind</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.resetFieldName">ResetFieldName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.resetFieldValue">ResetFieldValue</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.resetState">ResetState</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.putFilter"></a>

```csharp
private void PutFilter(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.putFilter.parameter.value"></a>

- *Type:* object

---

##### `ResetConditionKind` <a name="ResetConditionKind" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.resetConditionKind"></a>

```csharp
private void ResetConditionKind()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetFieldName` <a name="ResetFieldName" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.resetFieldName"></a>

```csharp
private void ResetFieldName()
```

##### `ResetFieldValue` <a name="ResetFieldValue" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.resetFieldValue"></a>

```csharp
private void ResetFieldValue()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetState` <a name="ResetState" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.resetState"></a>

```csharp
private void ResetState()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciLogAnalyticsNamespaceIngestTimeRules resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciLogAnalyticsNamespaceIngestTimeRules.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciLogAnalyticsNamespaceIngestTimeRules.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciLogAnalyticsNamespaceIngestTimeRules.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciLogAnalyticsNamespaceIngestTimeRules.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciLogAnalyticsNamespaceIngestTimeRules resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciLogAnalyticsNamespaceIngestTimeRules to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciLogAnalyticsNamespaceIngestTimeRules that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_ingest_time_rules#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciLogAnalyticsNamespaceIngestTimeRules to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilterList">DataOciLogAnalyticsNamespaceIngestTimeRulesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.property.ingestTimeRuleSummaryCollection">IngestTimeRuleSummaryCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionList">DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.property.conditionKindInput">ConditionKindInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.property.fieldNameInput">FieldNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.property.fieldValueInput">FieldValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.property.filterInput">FilterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.property.stateInput">StateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.property.conditionKind">ConditionKind</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.property.fieldName">FieldName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.property.fieldValue">FieldValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.property.state">State</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.property.filter"></a>

```csharp
public DataOciLogAnalyticsNamespaceIngestTimeRulesFilterList Filter { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilterList">DataOciLogAnalyticsNamespaceIngestTimeRulesFilterList</a>

---

##### `IngestTimeRuleSummaryCollection`<sup>Required</sup> <a name="IngestTimeRuleSummaryCollection" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.property.ingestTimeRuleSummaryCollection"></a>

```csharp
public DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionList IngestTimeRuleSummaryCollection { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionList">DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionList</a>

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `ConditionKindInput`<sup>Optional</sup> <a name="ConditionKindInput" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.property.conditionKindInput"></a>

```csharp
public string ConditionKindInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `FieldNameInput`<sup>Optional</sup> <a name="FieldNameInput" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.property.fieldNameInput"></a>

```csharp
public string FieldNameInput { get; }
```

- *Type:* string

---

##### `FieldValueInput`<sup>Optional</sup> <a name="FieldValueInput" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.property.fieldValueInput"></a>

```csharp
public string FieldValueInput { get; }
```

- *Type:* string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.property.filterInput"></a>

```csharp
public object FilterInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.property.stateInput"></a>

```csharp
public string StateInput { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `ConditionKind`<sup>Required</sup> <a name="ConditionKind" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.property.conditionKind"></a>

```csharp
public string ConditionKind { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `FieldName`<sup>Required</sup> <a name="FieldName" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.property.fieldName"></a>

```csharp
public string FieldName { get; }
```

- *Type:* string

---

##### `FieldValue`<sup>Required</sup> <a name="FieldValue" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.property.fieldValue"></a>

```csharp
public string FieldValue { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciLogAnalyticsNamespaceIngestTimeRulesConfig <a name="DataOciLogAnalyticsNamespaceIngestTimeRulesConfig" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciLogAnalyticsNamespaceIngestTimeRulesConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string CompartmentId,
    string Namespace,
    string ConditionKind = null,
    string DisplayName = null,
    string FieldName = null,
    string FieldValue = null,
    object Filter = null,
    string Id = null,
    string State = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_ingest_time_rules#compartment_id DataOciLogAnalyticsNamespaceIngestTimeRules#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesConfig.property.namespace">Namespace</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_ingest_time_rules#namespace DataOciLogAnalyticsNamespaceIngestTimeRules#namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesConfig.property.conditionKind">ConditionKind</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_ingest_time_rules#condition_kind DataOciLogAnalyticsNamespaceIngestTimeRules#condition_kind}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_ingest_time_rules#display_name DataOciLogAnalyticsNamespaceIngestTimeRules#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesConfig.property.fieldName">FieldName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_ingest_time_rules#field_name DataOciLogAnalyticsNamespaceIngestTimeRules#field_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesConfig.property.fieldValue">FieldValue</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_ingest_time_rules#field_value DataOciLogAnalyticsNamespaceIngestTimeRules#field_value}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesConfig.property.filter">Filter</a></code> | <code>object</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_ingest_time_rules#id DataOciLogAnalyticsNamespaceIngestTimeRules#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesConfig.property.state">State</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_ingest_time_rules#state DataOciLogAnalyticsNamespaceIngestTimeRules#state}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_ingest_time_rules#compartment_id DataOciLogAnalyticsNamespaceIngestTimeRules#compartment_id}.

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesConfig.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_ingest_time_rules#namespace DataOciLogAnalyticsNamespaceIngestTimeRules#namespace}.

---

##### `ConditionKind`<sup>Optional</sup> <a name="ConditionKind" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesConfig.property.conditionKind"></a>

```csharp
public string ConditionKind { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_ingest_time_rules#condition_kind DataOciLogAnalyticsNamespaceIngestTimeRules#condition_kind}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_ingest_time_rules#display_name DataOciLogAnalyticsNamespaceIngestTimeRules#display_name}.

---

##### `FieldName`<sup>Optional</sup> <a name="FieldName" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesConfig.property.fieldName"></a>

```csharp
public string FieldName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_ingest_time_rules#field_name DataOciLogAnalyticsNamespaceIngestTimeRules#field_name}.

---

##### `FieldValue`<sup>Optional</sup> <a name="FieldValue" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesConfig.property.fieldValue"></a>

```csharp
public string FieldValue { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_ingest_time_rules#field_value DataOciLogAnalyticsNamespaceIngestTimeRules#field_value}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesConfig.property.filter"></a>

```csharp
public object Filter { get; set; }
```

- *Type:* object

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_ingest_time_rules#filter DataOciLogAnalyticsNamespaceIngestTimeRules#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_ingest_time_rules#id DataOciLogAnalyticsNamespaceIngestTimeRules#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `State`<sup>Optional</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesConfig.property.state"></a>

```csharp
public string State { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_ingest_time_rules#state DataOciLogAnalyticsNamespaceIngestTimeRules#state}.

---

### DataOciLogAnalyticsNamespaceIngestTimeRulesFilter <a name="DataOciLogAnalyticsNamespaceIngestTimeRulesFilter" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciLogAnalyticsNamespaceIngestTimeRulesFilter {
    string Name,
    string[] Values,
    object Regex = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilter.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_ingest_time_rules#name DataOciLogAnalyticsNamespaceIngestTimeRules#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilter.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_ingest_time_rules#values DataOciLogAnalyticsNamespaceIngestTimeRules#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilter.property.regex">Regex</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_ingest_time_rules#regex DataOciLogAnalyticsNamespaceIngestTimeRules#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilter.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_ingest_time_rules#name DataOciLogAnalyticsNamespaceIngestTimeRules#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilter.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_ingest_time_rules#values DataOciLogAnalyticsNamespaceIngestTimeRules#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilter.property.regex"></a>

```csharp
public object Regex { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_ingest_time_rules#regex DataOciLogAnalyticsNamespaceIngestTimeRules#regex}.

---

### DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollection <a name="DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollection" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollection.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollection {

};
```


### DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItems <a name="DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItems.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItems {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciLogAnalyticsNamespaceIngestTimeRulesFilterList <a name="DataOciLogAnalyticsNamespaceIngestTimeRulesFilterList" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciLogAnalyticsNamespaceIngestTimeRulesFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilterList.get"></a>

```csharp
private DataOciLogAnalyticsNamespaceIngestTimeRulesFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilterList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilterList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciLogAnalyticsNamespaceIngestTimeRulesFilterOutputReference <a name="DataOciLogAnalyticsNamespaceIngestTimeRulesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciLogAnalyticsNamespaceIngestTimeRulesFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilterOutputReference.resetRegex"></a>

```csharp
private void ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilterOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilterOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilterOutputReference.property.regex">Regex</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilterOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilterOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilterOutputReference.property.regexInput"></a>

```csharp
public object RegexInput { get; }
```

- *Type:* object

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilterOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilterOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilterOutputReference.property.regex"></a>

```csharp
public object Regex { get; }
```

- *Type:* object

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilterOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilterOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsList <a name="DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsList.get"></a>

```csharp
private DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsOutputReference <a name="DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsOutputReference.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsOutputReference.property.conditionKind">ConditionKind</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsOutputReference.property.definedTags">DefinedTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsOutputReference.property.fieldName">FieldName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsOutputReference.property.fieldValue">FieldValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsOutputReference.property.freeformTags">FreeformTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsOutputReference.property.isEnabled">IsEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsOutputReference.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsOutputReference.property.timeUpdated">TimeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItems">DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsOutputReference.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `ConditionKind`<sup>Required</sup> <a name="ConditionKind" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsOutputReference.property.conditionKind"></a>

```csharp
public string ConditionKind { get; }
```

- *Type:* string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsOutputReference.property.definedTags"></a>

```csharp
public StringMap DefinedTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `FieldName`<sup>Required</sup> <a name="FieldName" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsOutputReference.property.fieldName"></a>

```csharp
public string FieldName { get; }
```

- *Type:* string

---

##### `FieldValue`<sup>Required</sup> <a name="FieldValue" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsOutputReference.property.fieldValue"></a>

```csharp
public string FieldValue { get; }
```

- *Type:* string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsOutputReference.property.freeformTags"></a>

```csharp
public StringMap FreeformTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IsEnabled`<sup>Required</sup> <a name="IsEnabled" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsOutputReference.property.isEnabled"></a>

```csharp
public IResolvable IsEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsOutputReference.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsOutputReference.property.timeUpdated"></a>

```csharp
public string TimeUpdated { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsOutputReference.property.internalValue"></a>

```csharp
public DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItems InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItems">DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItems</a>

---


### DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionList <a name="DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionList" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionList.get"></a>

```csharp
private DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionOutputReference <a name="DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsList">DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollection">DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionOutputReference.property.items"></a>

```csharp
public DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsList Items { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsList">DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionOutputReference.property.internalValue"></a>

```csharp
public DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollection InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollection">DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollection</a>

---



