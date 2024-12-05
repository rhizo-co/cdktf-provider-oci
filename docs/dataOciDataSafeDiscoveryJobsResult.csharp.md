# `dataOciDataSafeDiscoveryJobsResult` Submodule <a name="`dataOciDataSafeDiscoveryJobsResult` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResult"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDataSafeDiscoveryJobsResult <a name="DataOciDataSafeDiscoveryJobsResult" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResult.DataOciDataSafeDiscoveryJobsResult"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_discovery_jobs_result oci_data_safe_discovery_jobs_result}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResult.DataOciDataSafeDiscoveryJobsResult.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeDiscoveryJobsResult(Construct Scope, string Id, DataOciDataSafeDiscoveryJobsResultConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResult.DataOciDataSafeDiscoveryJobsResult.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResult.DataOciDataSafeDiscoveryJobsResult.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResult.DataOciDataSafeDiscoveryJobsResult.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResult.DataOciDataSafeDiscoveryJobsResultConfig">DataOciDataSafeDiscoveryJobsResultConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResult.DataOciDataSafeDiscoveryJobsResult.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResult.DataOciDataSafeDiscoveryJobsResult.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResult.DataOciDataSafeDiscoveryJobsResult.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResult.DataOciDataSafeDiscoveryJobsResultConfig">DataOciDataSafeDiscoveryJobsResultConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResult.DataOciDataSafeDiscoveryJobsResult.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResult.DataOciDataSafeDiscoveryJobsResult.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResult.DataOciDataSafeDiscoveryJobsResult.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResult.DataOciDataSafeDiscoveryJobsResult.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResult.DataOciDataSafeDiscoveryJobsResult.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResult.DataOciDataSafeDiscoveryJobsResult.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResult.DataOciDataSafeDiscoveryJobsResult.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResult.DataOciDataSafeDiscoveryJobsResult.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResult.DataOciDataSafeDiscoveryJobsResult.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResult.DataOciDataSafeDiscoveryJobsResult.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResult.DataOciDataSafeDiscoveryJobsResult.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResult.DataOciDataSafeDiscoveryJobsResult.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResult.DataOciDataSafeDiscoveryJobsResult.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResult.DataOciDataSafeDiscoveryJobsResult.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResult.DataOciDataSafeDiscoveryJobsResult.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResult.DataOciDataSafeDiscoveryJobsResult.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResult.DataOciDataSafeDiscoveryJobsResult.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResult.DataOciDataSafeDiscoveryJobsResult.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResult.DataOciDataSafeDiscoveryJobsResult.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResult.DataOciDataSafeDiscoveryJobsResult.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResult.DataOciDataSafeDiscoveryJobsResult.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResult.DataOciDataSafeDiscoveryJobsResult.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResult.DataOciDataSafeDiscoveryJobsResult.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResult.DataOciDataSafeDiscoveryJobsResult.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResult.DataOciDataSafeDiscoveryJobsResult.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResult.DataOciDataSafeDiscoveryJobsResult.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResult.DataOciDataSafeDiscoveryJobsResult.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResult.DataOciDataSafeDiscoveryJobsResult.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResult.DataOciDataSafeDiscoveryJobsResult.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResult.DataOciDataSafeDiscoveryJobsResult.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResult.DataOciDataSafeDiscoveryJobsResult.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResult.DataOciDataSafeDiscoveryJobsResult.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResult.DataOciDataSafeDiscoveryJobsResult.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResult.DataOciDataSafeDiscoveryJobsResult.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResult.DataOciDataSafeDiscoveryJobsResult.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResult.DataOciDataSafeDiscoveryJobsResult.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResult.DataOciDataSafeDiscoveryJobsResult.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResult.DataOciDataSafeDiscoveryJobsResult.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResult.DataOciDataSafeDiscoveryJobsResult.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResult.DataOciDataSafeDiscoveryJobsResult.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResult.DataOciDataSafeDiscoveryJobsResult.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResult.DataOciDataSafeDiscoveryJobsResult.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResult.DataOciDataSafeDiscoveryJobsResult.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResult.DataOciDataSafeDiscoveryJobsResult.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResult.DataOciDataSafeDiscoveryJobsResult.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResult.DataOciDataSafeDiscoveryJobsResult.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResult.DataOciDataSafeDiscoveryJobsResult.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResult.DataOciDataSafeDiscoveryJobsResult.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResult.DataOciDataSafeDiscoveryJobsResult.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResult.DataOciDataSafeDiscoveryJobsResult.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResult.DataOciDataSafeDiscoveryJobsResult.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDataSafeDiscoveryJobsResult resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResult.DataOciDataSafeDiscoveryJobsResult.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDataSafeDiscoveryJobsResult.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResult.DataOciDataSafeDiscoveryJobsResult.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResult.DataOciDataSafeDiscoveryJobsResult.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDataSafeDiscoveryJobsResult.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResult.DataOciDataSafeDiscoveryJobsResult.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResult.DataOciDataSafeDiscoveryJobsResult.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDataSafeDiscoveryJobsResult.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResult.DataOciDataSafeDiscoveryJobsResult.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResult.DataOciDataSafeDiscoveryJobsResult.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDataSafeDiscoveryJobsResult.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciDataSafeDiscoveryJobsResult resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResult.DataOciDataSafeDiscoveryJobsResult.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResult.DataOciDataSafeDiscoveryJobsResult.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciDataSafeDiscoveryJobsResult to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResult.DataOciDataSafeDiscoveryJobsResult.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciDataSafeDiscoveryJobsResult that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_discovery_jobs_result#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResult.DataOciDataSafeDiscoveryJobsResult.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDataSafeDiscoveryJobsResult to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResult.DataOciDataSafeDiscoveryJobsResult.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResult.DataOciDataSafeDiscoveryJobsResult.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResult.DataOciDataSafeDiscoveryJobsResult.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResult.DataOciDataSafeDiscoveryJobsResult.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResult.DataOciDataSafeDiscoveryJobsResult.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResult.DataOciDataSafeDiscoveryJobsResult.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResult.DataOciDataSafeDiscoveryJobsResult.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResult.DataOciDataSafeDiscoveryJobsResult.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResult.DataOciDataSafeDiscoveryJobsResult.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResult.DataOciDataSafeDiscoveryJobsResult.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResult.DataOciDataSafeDiscoveryJobsResult.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResult.DataOciDataSafeDiscoveryJobsResult.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResult.DataOciDataSafeDiscoveryJobsResult.property.appDefinedChildColumnKeys">AppDefinedChildColumnKeys</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResult.DataOciDataSafeDiscoveryJobsResult.property.appName">AppName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResult.DataOciDataSafeDiscoveryJobsResult.property.columnName">ColumnName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResult.DataOciDataSafeDiscoveryJobsResult.property.dataType">DataType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResult.DataOciDataSafeDiscoveryJobsResult.property.dbDefinedChildColumnKeys">DbDefinedChildColumnKeys</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResult.DataOciDataSafeDiscoveryJobsResult.property.discoveryType">DiscoveryType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResult.DataOciDataSafeDiscoveryJobsResult.property.estimatedDataValueCount">EstimatedDataValueCount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResult.DataOciDataSafeDiscoveryJobsResult.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResult.DataOciDataSafeDiscoveryJobsResult.property.isResultApplied">IsResultApplied</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResult.DataOciDataSafeDiscoveryJobsResult.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResult.DataOciDataSafeDiscoveryJobsResult.property.modifiedAttributes">ModifiedAttributes</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResult.DataOciDataSafeDiscoveryJobsResultModifiedAttributesList">DataOciDataSafeDiscoveryJobsResultModifiedAttributesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResult.DataOciDataSafeDiscoveryJobsResult.property.object">Object</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResult.DataOciDataSafeDiscoveryJobsResult.property.objectType">ObjectType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResult.DataOciDataSafeDiscoveryJobsResult.property.parentColumnKeys">ParentColumnKeys</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResult.DataOciDataSafeDiscoveryJobsResult.property.plannedAction">PlannedAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResult.DataOciDataSafeDiscoveryJobsResult.property.relationType">RelationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResult.DataOciDataSafeDiscoveryJobsResult.property.sampleDataValues">SampleDataValues</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResult.DataOciDataSafeDiscoveryJobsResult.property.schemaName">SchemaName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResult.DataOciDataSafeDiscoveryJobsResult.property.sensitiveColumnkey">SensitiveColumnkey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResult.DataOciDataSafeDiscoveryJobsResult.property.sensitiveTypeId">SensitiveTypeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResult.DataOciDataSafeDiscoveryJobsResult.property.discoveryJobIdInput">DiscoveryJobIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResult.DataOciDataSafeDiscoveryJobsResult.property.resultKeyInput">ResultKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResult.DataOciDataSafeDiscoveryJobsResult.property.discoveryJobId">DiscoveryJobId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResult.DataOciDataSafeDiscoveryJobsResult.property.resultKey">ResultKey</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResult.DataOciDataSafeDiscoveryJobsResult.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResult.DataOciDataSafeDiscoveryJobsResult.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResult.DataOciDataSafeDiscoveryJobsResult.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResult.DataOciDataSafeDiscoveryJobsResult.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResult.DataOciDataSafeDiscoveryJobsResult.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResult.DataOciDataSafeDiscoveryJobsResult.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResult.DataOciDataSafeDiscoveryJobsResult.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResult.DataOciDataSafeDiscoveryJobsResult.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResult.DataOciDataSafeDiscoveryJobsResult.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResult.DataOciDataSafeDiscoveryJobsResult.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResult.DataOciDataSafeDiscoveryJobsResult.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResult.DataOciDataSafeDiscoveryJobsResult.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `AppDefinedChildColumnKeys`<sup>Required</sup> <a name="AppDefinedChildColumnKeys" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResult.DataOciDataSafeDiscoveryJobsResult.property.appDefinedChildColumnKeys"></a>

```csharp
public string[] AppDefinedChildColumnKeys { get; }
```

- *Type:* string[]

---

##### `AppName`<sup>Required</sup> <a name="AppName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResult.DataOciDataSafeDiscoveryJobsResult.property.appName"></a>

```csharp
public string AppName { get; }
```

- *Type:* string

---

##### `ColumnName`<sup>Required</sup> <a name="ColumnName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResult.DataOciDataSafeDiscoveryJobsResult.property.columnName"></a>

```csharp
public string ColumnName { get; }
```

- *Type:* string

---

##### `DataType`<sup>Required</sup> <a name="DataType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResult.DataOciDataSafeDiscoveryJobsResult.property.dataType"></a>

```csharp
public string DataType { get; }
```

- *Type:* string

---

##### `DbDefinedChildColumnKeys`<sup>Required</sup> <a name="DbDefinedChildColumnKeys" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResult.DataOciDataSafeDiscoveryJobsResult.property.dbDefinedChildColumnKeys"></a>

```csharp
public string[] DbDefinedChildColumnKeys { get; }
```

- *Type:* string[]

---

##### `DiscoveryType`<sup>Required</sup> <a name="DiscoveryType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResult.DataOciDataSafeDiscoveryJobsResult.property.discoveryType"></a>

```csharp
public string DiscoveryType { get; }
```

- *Type:* string

---

##### `EstimatedDataValueCount`<sup>Required</sup> <a name="EstimatedDataValueCount" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResult.DataOciDataSafeDiscoveryJobsResult.property.estimatedDataValueCount"></a>

```csharp
public string EstimatedDataValueCount { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResult.DataOciDataSafeDiscoveryJobsResult.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IsResultApplied`<sup>Required</sup> <a name="IsResultApplied" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResult.DataOciDataSafeDiscoveryJobsResult.property.isResultApplied"></a>

```csharp
public IResolvable IsResultApplied { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Key`<sup>Required</sup> <a name="Key" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResult.DataOciDataSafeDiscoveryJobsResult.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `ModifiedAttributes`<sup>Required</sup> <a name="ModifiedAttributes" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResult.DataOciDataSafeDiscoveryJobsResult.property.modifiedAttributes"></a>

```csharp
public DataOciDataSafeDiscoveryJobsResultModifiedAttributesList ModifiedAttributes { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResult.DataOciDataSafeDiscoveryJobsResultModifiedAttributesList">DataOciDataSafeDiscoveryJobsResultModifiedAttributesList</a>

---

##### `Object`<sup>Required</sup> <a name="Object" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResult.DataOciDataSafeDiscoveryJobsResult.property.object"></a>

```csharp
public string Object { get; }
```

- *Type:* string

---

##### `ObjectType`<sup>Required</sup> <a name="ObjectType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResult.DataOciDataSafeDiscoveryJobsResult.property.objectType"></a>

```csharp
public string ObjectType { get; }
```

- *Type:* string

---

##### `ParentColumnKeys`<sup>Required</sup> <a name="ParentColumnKeys" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResult.DataOciDataSafeDiscoveryJobsResult.property.parentColumnKeys"></a>

```csharp
public string[] ParentColumnKeys { get; }
```

- *Type:* string[]

---

##### `PlannedAction`<sup>Required</sup> <a name="PlannedAction" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResult.DataOciDataSafeDiscoveryJobsResult.property.plannedAction"></a>

```csharp
public string PlannedAction { get; }
```

- *Type:* string

---

##### `RelationType`<sup>Required</sup> <a name="RelationType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResult.DataOciDataSafeDiscoveryJobsResult.property.relationType"></a>

```csharp
public string RelationType { get; }
```

- *Type:* string

---

##### `SampleDataValues`<sup>Required</sup> <a name="SampleDataValues" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResult.DataOciDataSafeDiscoveryJobsResult.property.sampleDataValues"></a>

```csharp
public string[] SampleDataValues { get; }
```

- *Type:* string[]

---

##### `SchemaName`<sup>Required</sup> <a name="SchemaName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResult.DataOciDataSafeDiscoveryJobsResult.property.schemaName"></a>

```csharp
public string SchemaName { get; }
```

- *Type:* string

---

##### `SensitiveColumnkey`<sup>Required</sup> <a name="SensitiveColumnkey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResult.DataOciDataSafeDiscoveryJobsResult.property.sensitiveColumnkey"></a>

```csharp
public string SensitiveColumnkey { get; }
```

- *Type:* string

---

##### `SensitiveTypeId`<sup>Required</sup> <a name="SensitiveTypeId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResult.DataOciDataSafeDiscoveryJobsResult.property.sensitiveTypeId"></a>

```csharp
public string SensitiveTypeId { get; }
```

- *Type:* string

---

##### `DiscoveryJobIdInput`<sup>Optional</sup> <a name="DiscoveryJobIdInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResult.DataOciDataSafeDiscoveryJobsResult.property.discoveryJobIdInput"></a>

```csharp
public string DiscoveryJobIdInput { get; }
```

- *Type:* string

---

##### `ResultKeyInput`<sup>Optional</sup> <a name="ResultKeyInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResult.DataOciDataSafeDiscoveryJobsResult.property.resultKeyInput"></a>

```csharp
public string ResultKeyInput { get; }
```

- *Type:* string

---

##### `DiscoveryJobId`<sup>Required</sup> <a name="DiscoveryJobId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResult.DataOciDataSafeDiscoveryJobsResult.property.discoveryJobId"></a>

```csharp
public string DiscoveryJobId { get; }
```

- *Type:* string

---

##### `ResultKey`<sup>Required</sup> <a name="ResultKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResult.DataOciDataSafeDiscoveryJobsResult.property.resultKey"></a>

```csharp
public string ResultKey { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResult.DataOciDataSafeDiscoveryJobsResult.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResult.DataOciDataSafeDiscoveryJobsResult.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDataSafeDiscoveryJobsResultConfig <a name="DataOciDataSafeDiscoveryJobsResultConfig" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResult.DataOciDataSafeDiscoveryJobsResultConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResult.DataOciDataSafeDiscoveryJobsResultConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeDiscoveryJobsResultConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string DiscoveryJobId,
    string ResultKey
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResult.DataOciDataSafeDiscoveryJobsResultConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResult.DataOciDataSafeDiscoveryJobsResultConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResult.DataOciDataSafeDiscoveryJobsResultConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResult.DataOciDataSafeDiscoveryJobsResultConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResult.DataOciDataSafeDiscoveryJobsResultConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResult.DataOciDataSafeDiscoveryJobsResultConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResult.DataOciDataSafeDiscoveryJobsResultConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResult.DataOciDataSafeDiscoveryJobsResultConfig.property.discoveryJobId">DiscoveryJobId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_discovery_jobs_result#discovery_job_id DataOciDataSafeDiscoveryJobsResult#discovery_job_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResult.DataOciDataSafeDiscoveryJobsResultConfig.property.resultKey">ResultKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_discovery_jobs_result#result_key DataOciDataSafeDiscoveryJobsResult#result_key}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResult.DataOciDataSafeDiscoveryJobsResultConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResult.DataOciDataSafeDiscoveryJobsResultConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResult.DataOciDataSafeDiscoveryJobsResultConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResult.DataOciDataSafeDiscoveryJobsResultConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResult.DataOciDataSafeDiscoveryJobsResultConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResult.DataOciDataSafeDiscoveryJobsResultConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResult.DataOciDataSafeDiscoveryJobsResultConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `DiscoveryJobId`<sup>Required</sup> <a name="DiscoveryJobId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResult.DataOciDataSafeDiscoveryJobsResultConfig.property.discoveryJobId"></a>

```csharp
public string DiscoveryJobId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_discovery_jobs_result#discovery_job_id DataOciDataSafeDiscoveryJobsResult#discovery_job_id}.

---

##### `ResultKey`<sup>Required</sup> <a name="ResultKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResult.DataOciDataSafeDiscoveryJobsResultConfig.property.resultKey"></a>

```csharp
public string ResultKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_discovery_jobs_result#result_key DataOciDataSafeDiscoveryJobsResult#result_key}.

---

### DataOciDataSafeDiscoveryJobsResultModifiedAttributes <a name="DataOciDataSafeDiscoveryJobsResultModifiedAttributes" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResult.DataOciDataSafeDiscoveryJobsResultModifiedAttributes"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResult.DataOciDataSafeDiscoveryJobsResultModifiedAttributes.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeDiscoveryJobsResultModifiedAttributes {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDataSafeDiscoveryJobsResultModifiedAttributesList <a name="DataOciDataSafeDiscoveryJobsResultModifiedAttributesList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResult.DataOciDataSafeDiscoveryJobsResultModifiedAttributesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResult.DataOciDataSafeDiscoveryJobsResultModifiedAttributesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeDiscoveryJobsResultModifiedAttributesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResult.DataOciDataSafeDiscoveryJobsResultModifiedAttributesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResult.DataOciDataSafeDiscoveryJobsResultModifiedAttributesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResult.DataOciDataSafeDiscoveryJobsResultModifiedAttributesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResult.DataOciDataSafeDiscoveryJobsResultModifiedAttributesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResult.DataOciDataSafeDiscoveryJobsResultModifiedAttributesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResult.DataOciDataSafeDiscoveryJobsResultModifiedAttributesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResult.DataOciDataSafeDiscoveryJobsResultModifiedAttributesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResult.DataOciDataSafeDiscoveryJobsResultModifiedAttributesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResult.DataOciDataSafeDiscoveryJobsResultModifiedAttributesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResult.DataOciDataSafeDiscoveryJobsResultModifiedAttributesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResult.DataOciDataSafeDiscoveryJobsResultModifiedAttributesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResult.DataOciDataSafeDiscoveryJobsResultModifiedAttributesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResult.DataOciDataSafeDiscoveryJobsResultModifiedAttributesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResult.DataOciDataSafeDiscoveryJobsResultModifiedAttributesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResult.DataOciDataSafeDiscoveryJobsResultModifiedAttributesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResult.DataOciDataSafeDiscoveryJobsResultModifiedAttributesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResult.DataOciDataSafeDiscoveryJobsResultModifiedAttributesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResult.DataOciDataSafeDiscoveryJobsResultModifiedAttributesList.get"></a>

```csharp
private DataOciDataSafeDiscoveryJobsResultModifiedAttributesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResult.DataOciDataSafeDiscoveryJobsResultModifiedAttributesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResult.DataOciDataSafeDiscoveryJobsResultModifiedAttributesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResult.DataOciDataSafeDiscoveryJobsResultModifiedAttributesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResult.DataOciDataSafeDiscoveryJobsResultModifiedAttributesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResult.DataOciDataSafeDiscoveryJobsResultModifiedAttributesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDataSafeDiscoveryJobsResultModifiedAttributesOutputReference <a name="DataOciDataSafeDiscoveryJobsResultModifiedAttributesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResult.DataOciDataSafeDiscoveryJobsResultModifiedAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResult.DataOciDataSafeDiscoveryJobsResultModifiedAttributesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeDiscoveryJobsResultModifiedAttributesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResult.DataOciDataSafeDiscoveryJobsResultModifiedAttributesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResult.DataOciDataSafeDiscoveryJobsResultModifiedAttributesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResult.DataOciDataSafeDiscoveryJobsResultModifiedAttributesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResult.DataOciDataSafeDiscoveryJobsResultModifiedAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResult.DataOciDataSafeDiscoveryJobsResultModifiedAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResult.DataOciDataSafeDiscoveryJobsResultModifiedAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResult.DataOciDataSafeDiscoveryJobsResultModifiedAttributesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResult.DataOciDataSafeDiscoveryJobsResultModifiedAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResult.DataOciDataSafeDiscoveryJobsResultModifiedAttributesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResult.DataOciDataSafeDiscoveryJobsResultModifiedAttributesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResult.DataOciDataSafeDiscoveryJobsResultModifiedAttributesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResult.DataOciDataSafeDiscoveryJobsResultModifiedAttributesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResult.DataOciDataSafeDiscoveryJobsResultModifiedAttributesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResult.DataOciDataSafeDiscoveryJobsResultModifiedAttributesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResult.DataOciDataSafeDiscoveryJobsResultModifiedAttributesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResult.DataOciDataSafeDiscoveryJobsResultModifiedAttributesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResult.DataOciDataSafeDiscoveryJobsResultModifiedAttributesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResult.DataOciDataSafeDiscoveryJobsResultModifiedAttributesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResult.DataOciDataSafeDiscoveryJobsResultModifiedAttributesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResult.DataOciDataSafeDiscoveryJobsResultModifiedAttributesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResult.DataOciDataSafeDiscoveryJobsResultModifiedAttributesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResult.DataOciDataSafeDiscoveryJobsResultModifiedAttributesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResult.DataOciDataSafeDiscoveryJobsResultModifiedAttributesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResult.DataOciDataSafeDiscoveryJobsResultModifiedAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResult.DataOciDataSafeDiscoveryJobsResultModifiedAttributesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResult.DataOciDataSafeDiscoveryJobsResultModifiedAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResult.DataOciDataSafeDiscoveryJobsResultModifiedAttributesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResult.DataOciDataSafeDiscoveryJobsResultModifiedAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResult.DataOciDataSafeDiscoveryJobsResultModifiedAttributesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResult.DataOciDataSafeDiscoveryJobsResultModifiedAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResult.DataOciDataSafeDiscoveryJobsResultModifiedAttributesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResult.DataOciDataSafeDiscoveryJobsResultModifiedAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResult.DataOciDataSafeDiscoveryJobsResultModifiedAttributesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResult.DataOciDataSafeDiscoveryJobsResultModifiedAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResult.DataOciDataSafeDiscoveryJobsResultModifiedAttributesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResult.DataOciDataSafeDiscoveryJobsResultModifiedAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResult.DataOciDataSafeDiscoveryJobsResultModifiedAttributesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResult.DataOciDataSafeDiscoveryJobsResultModifiedAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResult.DataOciDataSafeDiscoveryJobsResultModifiedAttributesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResult.DataOciDataSafeDiscoveryJobsResultModifiedAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResult.DataOciDataSafeDiscoveryJobsResultModifiedAttributesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResult.DataOciDataSafeDiscoveryJobsResultModifiedAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResult.DataOciDataSafeDiscoveryJobsResultModifiedAttributesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResult.DataOciDataSafeDiscoveryJobsResultModifiedAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResult.DataOciDataSafeDiscoveryJobsResultModifiedAttributesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResult.DataOciDataSafeDiscoveryJobsResultModifiedAttributesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResult.DataOciDataSafeDiscoveryJobsResultModifiedAttributesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResult.DataOciDataSafeDiscoveryJobsResultModifiedAttributesOutputReference.property.appDefinedChildColumnKeys">AppDefinedChildColumnKeys</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResult.DataOciDataSafeDiscoveryJobsResultModifiedAttributesOutputReference.property.dbDefinedChildColumnKeys">DbDefinedChildColumnKeys</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResult.DataOciDataSafeDiscoveryJobsResultModifiedAttributesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResult.DataOciDataSafeDiscoveryJobsResultModifiedAttributes">DataOciDataSafeDiscoveryJobsResultModifiedAttributes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResult.DataOciDataSafeDiscoveryJobsResultModifiedAttributesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResult.DataOciDataSafeDiscoveryJobsResultModifiedAttributesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AppDefinedChildColumnKeys`<sup>Required</sup> <a name="AppDefinedChildColumnKeys" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResult.DataOciDataSafeDiscoveryJobsResultModifiedAttributesOutputReference.property.appDefinedChildColumnKeys"></a>

```csharp
public string[] AppDefinedChildColumnKeys { get; }
```

- *Type:* string[]

---

##### `DbDefinedChildColumnKeys`<sup>Required</sup> <a name="DbDefinedChildColumnKeys" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResult.DataOciDataSafeDiscoveryJobsResultModifiedAttributesOutputReference.property.dbDefinedChildColumnKeys"></a>

```csharp
public string[] DbDefinedChildColumnKeys { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResult.DataOciDataSafeDiscoveryJobsResultModifiedAttributesOutputReference.property.internalValue"></a>

```csharp
public DataOciDataSafeDiscoveryJobsResultModifiedAttributes InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResult.DataOciDataSafeDiscoveryJobsResultModifiedAttributes">DataOciDataSafeDiscoveryJobsResultModifiedAttributes</a>

---



