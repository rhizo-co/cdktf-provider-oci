# `dataOciLogAnalyticsNamespaceIngestTimeRule` Submodule <a name="`dataOciLogAnalyticsNamespaceIngestTimeRule` Submodule" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciLogAnalyticsNamespaceIngestTimeRule <a name="DataOciLogAnalyticsNamespaceIngestTimeRule" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRule"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_ingest_time_rule oci_log_analytics_namespace_ingest_time_rule}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRule.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciLogAnalyticsNamespaceIngestTimeRule(Construct Scope, string Id, DataOciLogAnalyticsNamespaceIngestTimeRuleConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRule.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRule.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRule.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConfig">DataOciLogAnalyticsNamespaceIngestTimeRuleConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRule.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRule.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConfig">DataOciLogAnalyticsNamespaceIngestTimeRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRule.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRule.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRule.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRule.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRule.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRule.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRule.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRule.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRule.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRule.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRule.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRule.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRule.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRule.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRule.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRule.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRule.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRule.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRule.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRule.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRule.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciLogAnalyticsNamespaceIngestTimeRule resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRule.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciLogAnalyticsNamespaceIngestTimeRule.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRule.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRule.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciLogAnalyticsNamespaceIngestTimeRule.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRule.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRule.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciLogAnalyticsNamespaceIngestTimeRule.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRule.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRule.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciLogAnalyticsNamespaceIngestTimeRule.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciLogAnalyticsNamespaceIngestTimeRule resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRule.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciLogAnalyticsNamespaceIngestTimeRule to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciLogAnalyticsNamespaceIngestTimeRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_ingest_time_rule#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRule.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciLogAnalyticsNamespaceIngestTimeRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRule.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRule.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRule.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRule.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRule.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRule.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRule.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRule.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRule.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRule.property.actions">Actions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleActionsList">DataOciLogAnalyticsNamespaceIngestTimeRuleActionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRule.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRule.property.conditions">Conditions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsList">DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRule.property.definedTags">DefinedTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRule.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRule.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRule.property.freeformTags">FreeformTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRule.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRule.property.isEnabled">IsEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRule.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRule.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRule.property.timeUpdated">TimeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRule.property.ingestTimeRuleIdInput">IngestTimeRuleIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRule.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRule.property.ingestTimeRuleId">IngestTimeRuleId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRule.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRule.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRule.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRule.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRule.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRule.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRule.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRule.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRule.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRule.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRule.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRule.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRule.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Actions`<sup>Required</sup> <a name="Actions" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRule.property.actions"></a>

```csharp
public DataOciLogAnalyticsNamespaceIngestTimeRuleActionsList Actions { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleActionsList">DataOciLogAnalyticsNamespaceIngestTimeRuleActionsList</a>

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRule.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `Conditions`<sup>Required</sup> <a name="Conditions" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRule.property.conditions"></a>

```csharp
public DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsList Conditions { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsList">DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsList</a>

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRule.property.definedTags"></a>

```csharp
public StringMap DefinedTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRule.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRule.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRule.property.freeformTags"></a>

```csharp
public StringMap FreeformTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRule.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IsEnabled`<sup>Required</sup> <a name="IsEnabled" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRule.property.isEnabled"></a>

```csharp
public IResolvable IsEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRule.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRule.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRule.property.timeUpdated"></a>

```csharp
public string TimeUpdated { get; }
```

- *Type:* string

---

##### `IngestTimeRuleIdInput`<sup>Optional</sup> <a name="IngestTimeRuleIdInput" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRule.property.ingestTimeRuleIdInput"></a>

```csharp
public string IngestTimeRuleIdInput { get; }
```

- *Type:* string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRule.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `IngestTimeRuleId`<sup>Required</sup> <a name="IngestTimeRuleId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRule.property.ingestTimeRuleId"></a>

```csharp
public string IngestTimeRuleId { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRule.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRule.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRule.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciLogAnalyticsNamespaceIngestTimeRuleActions <a name="DataOciLogAnalyticsNamespaceIngestTimeRuleActions" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleActions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleActions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciLogAnalyticsNamespaceIngestTimeRuleActions {

};
```


### DataOciLogAnalyticsNamespaceIngestTimeRuleConditions <a name="DataOciLogAnalyticsNamespaceIngestTimeRuleConditions" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciLogAnalyticsNamespaceIngestTimeRuleConditions {

};
```


### DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsAdditionalConditions <a name="DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsAdditionalConditions" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsAdditionalConditions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsAdditionalConditions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsAdditionalConditions {

};
```


### DataOciLogAnalyticsNamespaceIngestTimeRuleConfig <a name="DataOciLogAnalyticsNamespaceIngestTimeRuleConfig" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciLogAnalyticsNamespaceIngestTimeRuleConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string IngestTimeRuleId,
    string Namespace
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConfig.property.ingestTimeRuleId">IngestTimeRuleId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_ingest_time_rule#ingest_time_rule_id DataOciLogAnalyticsNamespaceIngestTimeRule#ingest_time_rule_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConfig.property.namespace">Namespace</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_ingest_time_rule#namespace DataOciLogAnalyticsNamespaceIngestTimeRule#namespace}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `IngestTimeRuleId`<sup>Required</sup> <a name="IngestTimeRuleId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConfig.property.ingestTimeRuleId"></a>

```csharp
public string IngestTimeRuleId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_ingest_time_rule#ingest_time_rule_id DataOciLogAnalyticsNamespaceIngestTimeRule#ingest_time_rule_id}.

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConfig.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_ingest_time_rule#namespace DataOciLogAnalyticsNamespaceIngestTimeRule#namespace}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciLogAnalyticsNamespaceIngestTimeRuleActionsList <a name="DataOciLogAnalyticsNamespaceIngestTimeRuleActionsList" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleActionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleActionsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciLogAnalyticsNamespaceIngestTimeRuleActionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleActionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleActionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleActionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleActionsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleActionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleActionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleActionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleActionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleActionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleActionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleActionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleActionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleActionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleActionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleActionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleActionsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleActionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleActionsList.get"></a>

```csharp
private DataOciLogAnalyticsNamespaceIngestTimeRuleActionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleActionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleActionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleActionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleActionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleActionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciLogAnalyticsNamespaceIngestTimeRuleActionsOutputReference <a name="DataOciLogAnalyticsNamespaceIngestTimeRuleActionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleActionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciLogAnalyticsNamespaceIngestTimeRuleActionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleActionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleActionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleActionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleActionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleActionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleActionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleActionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleActionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleActionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleActionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleActionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleActionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleActionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleActionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleActionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleActionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleActionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleActionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleActionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleActionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleActionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleActionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleActionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleActionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleActionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleActionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleActionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleActionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleActionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleActionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleActionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleActionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleActionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleActionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleActionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleActionsOutputReference.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleActionsOutputReference.property.dimensions">Dimensions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleActionsOutputReference.property.metricName">MetricName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleActionsOutputReference.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleActionsOutputReference.property.resourceGroup">ResourceGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleActionsOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleActionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleActions">DataOciLogAnalyticsNamespaceIngestTimeRuleActions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleActionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleActionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleActionsOutputReference.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `Dimensions`<sup>Required</sup> <a name="Dimensions" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleActionsOutputReference.property.dimensions"></a>

```csharp
public string[] Dimensions { get; }
```

- *Type:* string[]

---

##### `MetricName`<sup>Required</sup> <a name="MetricName" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleActionsOutputReference.property.metricName"></a>

```csharp
public string MetricName { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleActionsOutputReference.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `ResourceGroup`<sup>Required</sup> <a name="ResourceGroup" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleActionsOutputReference.property.resourceGroup"></a>

```csharp
public string ResourceGroup { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleActionsOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleActionsOutputReference.property.internalValue"></a>

```csharp
public DataOciLogAnalyticsNamespaceIngestTimeRuleActions InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleActions">DataOciLogAnalyticsNamespaceIngestTimeRuleActions</a>

---


### DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsAdditionalConditionsList <a name="DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsAdditionalConditionsList" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsAdditionalConditionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsAdditionalConditionsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsAdditionalConditionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsAdditionalConditionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsAdditionalConditionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsAdditionalConditionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsAdditionalConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsAdditionalConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsAdditionalConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsAdditionalConditionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsAdditionalConditionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsAdditionalConditionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsAdditionalConditionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsAdditionalConditionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsAdditionalConditionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsAdditionalConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsAdditionalConditionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsAdditionalConditionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsAdditionalConditionsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsAdditionalConditionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsAdditionalConditionsList.get"></a>

```csharp
private DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsAdditionalConditionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsAdditionalConditionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsAdditionalConditionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsAdditionalConditionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsAdditionalConditionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsAdditionalConditionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsAdditionalConditionsOutputReference <a name="DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsAdditionalConditionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsAdditionalConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsAdditionalConditionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsAdditionalConditionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsAdditionalConditionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsAdditionalConditionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsAdditionalConditionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsAdditionalConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsAdditionalConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsAdditionalConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsAdditionalConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsAdditionalConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsAdditionalConditionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsAdditionalConditionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsAdditionalConditionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsAdditionalConditionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsAdditionalConditionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsAdditionalConditionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsAdditionalConditionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsAdditionalConditionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsAdditionalConditionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsAdditionalConditionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsAdditionalConditionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsAdditionalConditionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsAdditionalConditionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsAdditionalConditionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsAdditionalConditionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsAdditionalConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsAdditionalConditionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsAdditionalConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsAdditionalConditionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsAdditionalConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsAdditionalConditionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsAdditionalConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsAdditionalConditionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsAdditionalConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsAdditionalConditionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsAdditionalConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsAdditionalConditionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsAdditionalConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsAdditionalConditionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsAdditionalConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsAdditionalConditionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsAdditionalConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsAdditionalConditionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsAdditionalConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsAdditionalConditionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsAdditionalConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsAdditionalConditionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsAdditionalConditionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsAdditionalConditionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsAdditionalConditionsOutputReference.property.conditionField">ConditionField</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsAdditionalConditionsOutputReference.property.conditionOperator">ConditionOperator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsAdditionalConditionsOutputReference.property.conditionValue">ConditionValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsAdditionalConditionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsAdditionalConditions">DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsAdditionalConditions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsAdditionalConditionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsAdditionalConditionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ConditionField`<sup>Required</sup> <a name="ConditionField" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsAdditionalConditionsOutputReference.property.conditionField"></a>

```csharp
public string ConditionField { get; }
```

- *Type:* string

---

##### `ConditionOperator`<sup>Required</sup> <a name="ConditionOperator" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsAdditionalConditionsOutputReference.property.conditionOperator"></a>

```csharp
public string ConditionOperator { get; }
```

- *Type:* string

---

##### `ConditionValue`<sup>Required</sup> <a name="ConditionValue" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsAdditionalConditionsOutputReference.property.conditionValue"></a>

```csharp
public string ConditionValue { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsAdditionalConditionsOutputReference.property.internalValue"></a>

```csharp
public DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsAdditionalConditions InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsAdditionalConditions">DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsAdditionalConditions</a>

---


### DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsList <a name="DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsList" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsList.get"></a>

```csharp
private DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsOutputReference <a name="DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsOutputReference.property.additionalConditions">AdditionalConditions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsAdditionalConditionsList">DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsAdditionalConditionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsOutputReference.property.fieldName">FieldName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsOutputReference.property.fieldOperator">FieldOperator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsOutputReference.property.fieldValue">FieldValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsOutputReference.property.kind">Kind</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditions">DataOciLogAnalyticsNamespaceIngestTimeRuleConditions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AdditionalConditions`<sup>Required</sup> <a name="AdditionalConditions" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsOutputReference.property.additionalConditions"></a>

```csharp
public DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsAdditionalConditionsList AdditionalConditions { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsAdditionalConditionsList">DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsAdditionalConditionsList</a>

---

##### `FieldName`<sup>Required</sup> <a name="FieldName" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsOutputReference.property.fieldName"></a>

```csharp
public string FieldName { get; }
```

- *Type:* string

---

##### `FieldOperator`<sup>Required</sup> <a name="FieldOperator" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsOutputReference.property.fieldOperator"></a>

```csharp
public string FieldOperator { get; }
```

- *Type:* string

---

##### `FieldValue`<sup>Required</sup> <a name="FieldValue" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsOutputReference.property.fieldValue"></a>

```csharp
public string FieldValue { get; }
```

- *Type:* string

---

##### `Kind`<sup>Required</sup> <a name="Kind" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsOutputReference.property.kind"></a>

```csharp
public string Kind { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsOutputReference.property.internalValue"></a>

```csharp
public DataOciLogAnalyticsNamespaceIngestTimeRuleConditions InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditions">DataOciLogAnalyticsNamespaceIngestTimeRuleConditions</a>

---



