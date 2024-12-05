# `dataOciLogAnalyticsNamespaceEffectiveProperties` Submodule <a name="`dataOciLogAnalyticsNamespaceEffectiveProperties` Submodule" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciLogAnalyticsNamespaceEffectiveProperties <a name="DataOciLogAnalyticsNamespaceEffectiveProperties" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_effective_properties oci_log_analytics_namespace_effective_properties}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciLogAnalyticsNamespaceEffectiveProperties(Construct Scope, string Id, DataOciLogAnalyticsNamespaceEffectivePropertiesConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesConfig">DataOciLogAnalyticsNamespaceEffectivePropertiesConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesConfig">DataOciLogAnalyticsNamespaceEffectivePropertiesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.resetAgentId">ResetAgentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.resetEntityId">ResetEntityId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.resetIsIncludePatterns">ResetIsIncludePatterns</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.resetPatternId">ResetPatternId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.resetSourceName">ResetSourceName</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.putFilter"></a>

```csharp
private void PutFilter(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.putFilter.parameter.value"></a>

- *Type:* object

---

##### `ResetAgentId` <a name="ResetAgentId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.resetAgentId"></a>

```csharp
private void ResetAgentId()
```

##### `ResetEntityId` <a name="ResetEntityId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.resetEntityId"></a>

```csharp
private void ResetEntityId()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIsIncludePatterns` <a name="ResetIsIncludePatterns" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.resetIsIncludePatterns"></a>

```csharp
private void ResetIsIncludePatterns()
```

##### `ResetName` <a name="ResetName" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetPatternId` <a name="ResetPatternId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.resetPatternId"></a>

```csharp
private void ResetPatternId()
```

##### `ResetSourceName` <a name="ResetSourceName" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.resetSourceName"></a>

```csharp
private void ResetSourceName()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciLogAnalyticsNamespaceEffectiveProperties resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciLogAnalyticsNamespaceEffectiveProperties.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciLogAnalyticsNamespaceEffectiveProperties.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciLogAnalyticsNamespaceEffectiveProperties.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciLogAnalyticsNamespaceEffectiveProperties.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciLogAnalyticsNamespaceEffectiveProperties resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciLogAnalyticsNamespaceEffectiveProperties to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciLogAnalyticsNamespaceEffectiveProperties that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_effective_properties#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciLogAnalyticsNamespaceEffectiveProperties to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.property.effectivePropertyCollection">EffectivePropertyCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionList">DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilterList">DataOciLogAnalyticsNamespaceEffectivePropertiesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.property.agentIdInput">AgentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.property.entityIdInput">EntityIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.property.filterInput">FilterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.property.isIncludePatternsInput">IsIncludePatternsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.property.patternIdInput">PatternIdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.property.sourceNameInput">SourceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.property.agentId">AgentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.property.entityId">EntityId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.property.isIncludePatterns">IsIncludePatterns</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.property.patternId">PatternId</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.property.sourceName">SourceName</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `EffectivePropertyCollection`<sup>Required</sup> <a name="EffectivePropertyCollection" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.property.effectivePropertyCollection"></a>

```csharp
public DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionList EffectivePropertyCollection { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionList">DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionList</a>

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.property.filter"></a>

```csharp
public DataOciLogAnalyticsNamespaceEffectivePropertiesFilterList Filter { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilterList">DataOciLogAnalyticsNamespaceEffectivePropertiesFilterList</a>

---

##### `AgentIdInput`<sup>Optional</sup> <a name="AgentIdInput" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.property.agentIdInput"></a>

```csharp
public string AgentIdInput { get; }
```

- *Type:* string

---

##### `EntityIdInput`<sup>Optional</sup> <a name="EntityIdInput" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.property.entityIdInput"></a>

```csharp
public string EntityIdInput { get; }
```

- *Type:* string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.property.filterInput"></a>

```csharp
public object FilterInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IsIncludePatternsInput`<sup>Optional</sup> <a name="IsIncludePatternsInput" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.property.isIncludePatternsInput"></a>

```csharp
public object IsIncludePatternsInput { get; }
```

- *Type:* object

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `PatternIdInput`<sup>Optional</sup> <a name="PatternIdInput" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.property.patternIdInput"></a>

```csharp
public double PatternIdInput { get; }
```

- *Type:* double

---

##### `SourceNameInput`<sup>Optional</sup> <a name="SourceNameInput" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.property.sourceNameInput"></a>

```csharp
public string SourceNameInput { get; }
```

- *Type:* string

---

##### `AgentId`<sup>Required</sup> <a name="AgentId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.property.agentId"></a>

```csharp
public string AgentId { get; }
```

- *Type:* string

---

##### `EntityId`<sup>Required</sup> <a name="EntityId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.property.entityId"></a>

```csharp
public string EntityId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IsIncludePatterns`<sup>Required</sup> <a name="IsIncludePatterns" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.property.isIncludePatterns"></a>

```csharp
public object IsIncludePatterns { get; }
```

- *Type:* object

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `PatternId`<sup>Required</sup> <a name="PatternId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.property.patternId"></a>

```csharp
public double PatternId { get; }
```

- *Type:* double

---

##### `SourceName`<sup>Required</sup> <a name="SourceName" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.property.sourceName"></a>

```csharp
public string SourceName { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciLogAnalyticsNamespaceEffectivePropertiesConfig <a name="DataOciLogAnalyticsNamespaceEffectivePropertiesConfig" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciLogAnalyticsNamespaceEffectivePropertiesConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Namespace,
    string AgentId = null,
    string EntityId = null,
    object Filter = null,
    string Id = null,
    object IsIncludePatterns = null,
    string Name = null,
    double PatternId = null,
    string SourceName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesConfig.property.namespace">Namespace</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_effective_properties#namespace DataOciLogAnalyticsNamespaceEffectiveProperties#namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesConfig.property.agentId">AgentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_effective_properties#agent_id DataOciLogAnalyticsNamespaceEffectiveProperties#agent_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesConfig.property.entityId">EntityId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_effective_properties#entity_id DataOciLogAnalyticsNamespaceEffectiveProperties#entity_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesConfig.property.filter">Filter</a></code> | <code>object</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_effective_properties#id DataOciLogAnalyticsNamespaceEffectiveProperties#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesConfig.property.isIncludePatterns">IsIncludePatterns</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_effective_properties#is_include_patterns DataOciLogAnalyticsNamespaceEffectiveProperties#is_include_patterns}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_effective_properties#name DataOciLogAnalyticsNamespaceEffectiveProperties#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesConfig.property.patternId">PatternId</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_effective_properties#pattern_id DataOciLogAnalyticsNamespaceEffectiveProperties#pattern_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesConfig.property.sourceName">SourceName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_effective_properties#source_name DataOciLogAnalyticsNamespaceEffectiveProperties#source_name}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesConfig.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_effective_properties#namespace DataOciLogAnalyticsNamespaceEffectiveProperties#namespace}.

---

##### `AgentId`<sup>Optional</sup> <a name="AgentId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesConfig.property.agentId"></a>

```csharp
public string AgentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_effective_properties#agent_id DataOciLogAnalyticsNamespaceEffectiveProperties#agent_id}.

---

##### `EntityId`<sup>Optional</sup> <a name="EntityId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesConfig.property.entityId"></a>

```csharp
public string EntityId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_effective_properties#entity_id DataOciLogAnalyticsNamespaceEffectiveProperties#entity_id}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesConfig.property.filter"></a>

```csharp
public object Filter { get; set; }
```

- *Type:* object

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_effective_properties#filter DataOciLogAnalyticsNamespaceEffectiveProperties#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_effective_properties#id DataOciLogAnalyticsNamespaceEffectiveProperties#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IsIncludePatterns`<sup>Optional</sup> <a name="IsIncludePatterns" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesConfig.property.isIncludePatterns"></a>

```csharp
public object IsIncludePatterns { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_effective_properties#is_include_patterns DataOciLogAnalyticsNamespaceEffectiveProperties#is_include_patterns}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_effective_properties#name DataOciLogAnalyticsNamespaceEffectiveProperties#name}.

---

##### `PatternId`<sup>Optional</sup> <a name="PatternId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesConfig.property.patternId"></a>

```csharp
public double PatternId { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_effective_properties#pattern_id DataOciLogAnalyticsNamespaceEffectiveProperties#pattern_id}.

---

##### `SourceName`<sup>Optional</sup> <a name="SourceName" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesConfig.property.sourceName"></a>

```csharp
public string SourceName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_effective_properties#source_name DataOciLogAnalyticsNamespaceEffectiveProperties#source_name}.

---

### DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollection <a name="DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollection" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollection.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollection {

};
```


### DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItems <a name="DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItems.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItems {

};
```


### DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatterns <a name="DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatterns" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatterns"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatterns.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatterns {

};
```


### DataOciLogAnalyticsNamespaceEffectivePropertiesFilter <a name="DataOciLogAnalyticsNamespaceEffectivePropertiesFilter" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciLogAnalyticsNamespaceEffectivePropertiesFilter {
    string Name,
    string[] Values,
    object Regex = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilter.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_effective_properties#name DataOciLogAnalyticsNamespaceEffectiveProperties#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilter.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_effective_properties#values DataOciLogAnalyticsNamespaceEffectiveProperties#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilter.property.regex">Regex</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_effective_properties#regex DataOciLogAnalyticsNamespaceEffectiveProperties#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilter.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_effective_properties#name DataOciLogAnalyticsNamespaceEffectiveProperties#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilter.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_effective_properties#values DataOciLogAnalyticsNamespaceEffectiveProperties#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilter.property.regex"></a>

```csharp
public object Regex { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_effective_properties#regex DataOciLogAnalyticsNamespaceEffectiveProperties#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsList <a name="DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsList.get"></a>

```csharp
private DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsOutputReference <a name="DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsOutputReference.property.effectiveLevel">EffectiveLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsOutputReference.property.patterns">Patterns</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatternsList">DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatternsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItems">DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EffectiveLevel`<sup>Required</sup> <a name="EffectiveLevel" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsOutputReference.property.effectiveLevel"></a>

```csharp
public string EffectiveLevel { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Patterns`<sup>Required</sup> <a name="Patterns" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsOutputReference.property.patterns"></a>

```csharp
public DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatternsList Patterns { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatternsList">DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatternsList</a>

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsOutputReference.property.internalValue"></a>

```csharp
public DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItems InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItems">DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItems</a>

---


### DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatternsList <a name="DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatternsList" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatternsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatternsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatternsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatternsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatternsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatternsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatternsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatternsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatternsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatternsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatternsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatternsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatternsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatternsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatternsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatternsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatternsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatternsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatternsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatternsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatternsList.get"></a>

```csharp
private DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatternsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatternsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatternsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatternsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatternsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatternsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatternsOutputReference <a name="DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatternsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatternsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatternsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatternsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatternsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatternsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatternsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatternsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatternsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatternsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatternsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatternsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatternsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatternsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatternsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatternsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatternsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatternsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatternsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatternsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatternsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatternsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatternsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatternsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatternsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatternsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatternsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatternsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatternsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatternsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatternsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatternsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatternsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatternsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatternsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatternsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatternsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatternsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatternsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatternsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatternsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatternsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatternsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatternsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatternsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatternsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatternsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatternsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatternsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatternsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatternsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatternsOutputReference.property.effectiveLevel">EffectiveLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatternsOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatternsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatternsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatterns">DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatterns</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatternsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatternsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EffectiveLevel`<sup>Required</sup> <a name="EffectiveLevel" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatternsOutputReference.property.effectiveLevel"></a>

```csharp
public string EffectiveLevel { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatternsOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatternsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatternsOutputReference.property.internalValue"></a>

```csharp
public DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatterns InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatterns">DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatterns</a>

---


### DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionList <a name="DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionList" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionList.get"></a>

```csharp
private DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionOutputReference <a name="DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsList">DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollection">DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionOutputReference.property.items"></a>

```csharp
public DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsList Items { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsList">DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionOutputReference.property.internalValue"></a>

```csharp
public DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollection InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollection">DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollection</a>

---


### DataOciLogAnalyticsNamespaceEffectivePropertiesFilterList <a name="DataOciLogAnalyticsNamespaceEffectivePropertiesFilterList" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciLogAnalyticsNamespaceEffectivePropertiesFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilterList.get"></a>

```csharp
private DataOciLogAnalyticsNamespaceEffectivePropertiesFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilterList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilterList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciLogAnalyticsNamespaceEffectivePropertiesFilterOutputReference <a name="DataOciLogAnalyticsNamespaceEffectivePropertiesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciLogAnalyticsNamespaceEffectivePropertiesFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilterOutputReference.resetRegex"></a>

```csharp
private void ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilterOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilterOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilterOutputReference.property.regex">Regex</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilterOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilterOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilterOutputReference.property.regexInput"></a>

```csharp
public object RegexInput { get; }
```

- *Type:* object

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilterOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilterOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilterOutputReference.property.regex"></a>

```csharp
public object Regex { get; }
```

- *Type:* object

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilterOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilterOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



