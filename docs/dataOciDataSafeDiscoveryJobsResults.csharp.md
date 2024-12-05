# `dataOciDataSafeDiscoveryJobsResults` Submodule <a name="`dataOciDataSafeDiscoveryJobsResults` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDataSafeDiscoveryJobsResults <a name="DataOciDataSafeDiscoveryJobsResults" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_discovery_jobs_results oci_data_safe_discovery_jobs_results}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeDiscoveryJobsResults(Construct Scope, string Id, DataOciDataSafeDiscoveryJobsResultsConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsConfig">DataOciDataSafeDiscoveryJobsResultsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsConfig">DataOciDataSafeDiscoveryJobsResultsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.resetColumnName">ResetColumnName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.resetDiscoveryType">ResetDiscoveryType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.resetIsResultApplied">ResetIsResultApplied</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.resetObject">ResetObject</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.resetPlannedAction">ResetPlannedAction</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.resetSchemaName">ResetSchemaName</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.putFilter"></a>

```csharp
private void PutFilter(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.putFilter.parameter.value"></a>

- *Type:* object

---

##### `ResetColumnName` <a name="ResetColumnName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.resetColumnName"></a>

```csharp
private void ResetColumnName()
```

##### `ResetDiscoveryType` <a name="ResetDiscoveryType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.resetDiscoveryType"></a>

```csharp
private void ResetDiscoveryType()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIsResultApplied` <a name="ResetIsResultApplied" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.resetIsResultApplied"></a>

```csharp
private void ResetIsResultApplied()
```

##### `ResetObject` <a name="ResetObject" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.resetObject"></a>

```csharp
private void ResetObject()
```

##### `ResetPlannedAction` <a name="ResetPlannedAction" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.resetPlannedAction"></a>

```csharp
private void ResetPlannedAction()
```

##### `ResetSchemaName` <a name="ResetSchemaName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.resetSchemaName"></a>

```csharp
private void ResetSchemaName()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDataSafeDiscoveryJobsResults resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDataSafeDiscoveryJobsResults.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDataSafeDiscoveryJobsResults.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDataSafeDiscoveryJobsResults.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDataSafeDiscoveryJobsResults.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciDataSafeDiscoveryJobsResults resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciDataSafeDiscoveryJobsResults to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciDataSafeDiscoveryJobsResults that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_discovery_jobs_results#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDataSafeDiscoveryJobsResults to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.property.discoveryJobResultCollection">DiscoveryJobResultCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionList">DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterList">DataOciDataSafeDiscoveryJobsResultsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.property.columnNameInput">ColumnNameInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.property.discoveryJobIdInput">DiscoveryJobIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.property.discoveryTypeInput">DiscoveryTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.property.filterInput">FilterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.property.isResultAppliedInput">IsResultAppliedInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.property.objectInput">ObjectInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.property.plannedActionInput">PlannedActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.property.schemaNameInput">SchemaNameInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.property.columnName">ColumnName</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.property.discoveryJobId">DiscoveryJobId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.property.discoveryType">DiscoveryType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.property.isResultApplied">IsResultApplied</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.property.object">Object</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.property.plannedAction">PlannedAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.property.schemaName">SchemaName</a></code> | <code>string[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `DiscoveryJobResultCollection`<sup>Required</sup> <a name="DiscoveryJobResultCollection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.property.discoveryJobResultCollection"></a>

```csharp
public DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionList DiscoveryJobResultCollection { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionList">DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionList</a>

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.property.filter"></a>

```csharp
public DataOciDataSafeDiscoveryJobsResultsFilterList Filter { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterList">DataOciDataSafeDiscoveryJobsResultsFilterList</a>

---

##### `ColumnNameInput`<sup>Optional</sup> <a name="ColumnNameInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.property.columnNameInput"></a>

```csharp
public string[] ColumnNameInput { get; }
```

- *Type:* string[]

---

##### `DiscoveryJobIdInput`<sup>Optional</sup> <a name="DiscoveryJobIdInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.property.discoveryJobIdInput"></a>

```csharp
public string DiscoveryJobIdInput { get; }
```

- *Type:* string

---

##### `DiscoveryTypeInput`<sup>Optional</sup> <a name="DiscoveryTypeInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.property.discoveryTypeInput"></a>

```csharp
public string DiscoveryTypeInput { get; }
```

- *Type:* string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.property.filterInput"></a>

```csharp
public object FilterInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IsResultAppliedInput`<sup>Optional</sup> <a name="IsResultAppliedInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.property.isResultAppliedInput"></a>

```csharp
public object IsResultAppliedInput { get; }
```

- *Type:* object

---

##### `ObjectInput`<sup>Optional</sup> <a name="ObjectInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.property.objectInput"></a>

```csharp
public string[] ObjectInput { get; }
```

- *Type:* string[]

---

##### `PlannedActionInput`<sup>Optional</sup> <a name="PlannedActionInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.property.plannedActionInput"></a>

```csharp
public string PlannedActionInput { get; }
```

- *Type:* string

---

##### `SchemaNameInput`<sup>Optional</sup> <a name="SchemaNameInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.property.schemaNameInput"></a>

```csharp
public string[] SchemaNameInput { get; }
```

- *Type:* string[]

---

##### `ColumnName`<sup>Required</sup> <a name="ColumnName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.property.columnName"></a>

```csharp
public string[] ColumnName { get; }
```

- *Type:* string[]

---

##### `DiscoveryJobId`<sup>Required</sup> <a name="DiscoveryJobId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.property.discoveryJobId"></a>

```csharp
public string DiscoveryJobId { get; }
```

- *Type:* string

---

##### `DiscoveryType`<sup>Required</sup> <a name="DiscoveryType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.property.discoveryType"></a>

```csharp
public string DiscoveryType { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IsResultApplied`<sup>Required</sup> <a name="IsResultApplied" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.property.isResultApplied"></a>

```csharp
public object IsResultApplied { get; }
```

- *Type:* object

---

##### `Object`<sup>Required</sup> <a name="Object" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.property.object"></a>

```csharp
public string[] Object { get; }
```

- *Type:* string[]

---

##### `PlannedAction`<sup>Required</sup> <a name="PlannedAction" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.property.plannedAction"></a>

```csharp
public string PlannedAction { get; }
```

- *Type:* string

---

##### `SchemaName`<sup>Required</sup> <a name="SchemaName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.property.schemaName"></a>

```csharp
public string[] SchemaName { get; }
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDataSafeDiscoveryJobsResultsConfig <a name="DataOciDataSafeDiscoveryJobsResultsConfig" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeDiscoveryJobsResultsConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string DiscoveryJobId,
    string[] ColumnName = null,
    string DiscoveryType = null,
    object Filter = null,
    string Id = null,
    object IsResultApplied = null,
    string[] Object = null,
    string PlannedAction = null,
    string[] SchemaName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsConfig.property.discoveryJobId">DiscoveryJobId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_discovery_jobs_results#discovery_job_id DataOciDataSafeDiscoveryJobsResults#discovery_job_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsConfig.property.columnName">ColumnName</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_discovery_jobs_results#column_name DataOciDataSafeDiscoveryJobsResults#column_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsConfig.property.discoveryType">DiscoveryType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_discovery_jobs_results#discovery_type DataOciDataSafeDiscoveryJobsResults#discovery_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsConfig.property.filter">Filter</a></code> | <code>object</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_discovery_jobs_results#id DataOciDataSafeDiscoveryJobsResults#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsConfig.property.isResultApplied">IsResultApplied</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_discovery_jobs_results#is_result_applied DataOciDataSafeDiscoveryJobsResults#is_result_applied}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsConfig.property.object">Object</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_discovery_jobs_results#object DataOciDataSafeDiscoveryJobsResults#object}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsConfig.property.plannedAction">PlannedAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_discovery_jobs_results#planned_action DataOciDataSafeDiscoveryJobsResults#planned_action}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsConfig.property.schemaName">SchemaName</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_discovery_jobs_results#schema_name DataOciDataSafeDiscoveryJobsResults#schema_name}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `DiscoveryJobId`<sup>Required</sup> <a name="DiscoveryJobId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsConfig.property.discoveryJobId"></a>

```csharp
public string DiscoveryJobId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_discovery_jobs_results#discovery_job_id DataOciDataSafeDiscoveryJobsResults#discovery_job_id}.

---

##### `ColumnName`<sup>Optional</sup> <a name="ColumnName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsConfig.property.columnName"></a>

```csharp
public string[] ColumnName { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_discovery_jobs_results#column_name DataOciDataSafeDiscoveryJobsResults#column_name}.

---

##### `DiscoveryType`<sup>Optional</sup> <a name="DiscoveryType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsConfig.property.discoveryType"></a>

```csharp
public string DiscoveryType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_discovery_jobs_results#discovery_type DataOciDataSafeDiscoveryJobsResults#discovery_type}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsConfig.property.filter"></a>

```csharp
public object Filter { get; set; }
```

- *Type:* object

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_discovery_jobs_results#filter DataOciDataSafeDiscoveryJobsResults#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_discovery_jobs_results#id DataOciDataSafeDiscoveryJobsResults#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IsResultApplied`<sup>Optional</sup> <a name="IsResultApplied" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsConfig.property.isResultApplied"></a>

```csharp
public object IsResultApplied { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_discovery_jobs_results#is_result_applied DataOciDataSafeDiscoveryJobsResults#is_result_applied}.

---

##### `Object`<sup>Optional</sup> <a name="Object" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsConfig.property.object"></a>

```csharp
public string[] Object { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_discovery_jobs_results#object DataOciDataSafeDiscoveryJobsResults#object}.

---

##### `PlannedAction`<sup>Optional</sup> <a name="PlannedAction" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsConfig.property.plannedAction"></a>

```csharp
public string PlannedAction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_discovery_jobs_results#planned_action DataOciDataSafeDiscoveryJobsResults#planned_action}.

---

##### `SchemaName`<sup>Optional</sup> <a name="SchemaName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsConfig.property.schemaName"></a>

```csharp
public string[] SchemaName { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_discovery_jobs_results#schema_name DataOciDataSafeDiscoveryJobsResults#schema_name}.

---

### DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollection <a name="DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollection.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollection {

};
```


### DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItems <a name="DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItems.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItems {

};
```


### DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributes <a name="DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributes" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributes"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributes.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributes {

};
```


### DataOciDataSafeDiscoveryJobsResultsFilter <a name="DataOciDataSafeDiscoveryJobsResultsFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeDiscoveryJobsResultsFilter {
    string Name,
    string[] Values,
    object Regex = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilter.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_discovery_jobs_results#name DataOciDataSafeDiscoveryJobsResults#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilter.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_discovery_jobs_results#values DataOciDataSafeDiscoveryJobsResults#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilter.property.regex">Regex</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_discovery_jobs_results#regex DataOciDataSafeDiscoveryJobsResults#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilter.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_discovery_jobs_results#name DataOciDataSafeDiscoveryJobsResults#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilter.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_discovery_jobs_results#values DataOciDataSafeDiscoveryJobsResults#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilter.property.regex"></a>

```csharp
public object Regex { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_discovery_jobs_results#regex DataOciDataSafeDiscoveryJobsResults#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsList <a name="DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsList.get"></a>

```csharp
private DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesList <a name="DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesList.get"></a>

```csharp
private DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesOutputReference <a name="DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesOutputReference.property.appDefinedChildColumnKeys">AppDefinedChildColumnKeys</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesOutputReference.property.dbDefinedChildColumnKeys">DbDefinedChildColumnKeys</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributes">DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AppDefinedChildColumnKeys`<sup>Required</sup> <a name="AppDefinedChildColumnKeys" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesOutputReference.property.appDefinedChildColumnKeys"></a>

```csharp
public string[] AppDefinedChildColumnKeys { get; }
```

- *Type:* string[]

---

##### `DbDefinedChildColumnKeys`<sup>Required</sup> <a name="DbDefinedChildColumnKeys" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesOutputReference.property.dbDefinedChildColumnKeys"></a>

```csharp
public string[] DbDefinedChildColumnKeys { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesOutputReference.property.internalValue"></a>

```csharp
public DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributes InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributes">DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributes</a>

---


### DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference <a name="DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.property.appDefinedChildColumnKeys">AppDefinedChildColumnKeys</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.property.appName">AppName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.property.columnName">ColumnName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.property.dataType">DataType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.property.dbDefinedChildColumnKeys">DbDefinedChildColumnKeys</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.property.discoveryJobId">DiscoveryJobId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.property.discoveryType">DiscoveryType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.property.estimatedDataValueCount">EstimatedDataValueCount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.property.isResultApplied">IsResultApplied</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.property.modifiedAttributes">ModifiedAttributes</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesList">DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.property.object">Object</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.property.objectType">ObjectType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.property.parentColumnKeys">ParentColumnKeys</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.property.plannedAction">PlannedAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.property.relationType">RelationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.property.sampleDataValues">SampleDataValues</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.property.schemaName">SchemaName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.property.sensitiveColumnkey">SensitiveColumnkey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.property.sensitiveTypeId">SensitiveTypeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItems">DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AppDefinedChildColumnKeys`<sup>Required</sup> <a name="AppDefinedChildColumnKeys" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.property.appDefinedChildColumnKeys"></a>

```csharp
public string[] AppDefinedChildColumnKeys { get; }
```

- *Type:* string[]

---

##### `AppName`<sup>Required</sup> <a name="AppName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.property.appName"></a>

```csharp
public string AppName { get; }
```

- *Type:* string

---

##### `ColumnName`<sup>Required</sup> <a name="ColumnName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.property.columnName"></a>

```csharp
public string ColumnName { get; }
```

- *Type:* string

---

##### `DataType`<sup>Required</sup> <a name="DataType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.property.dataType"></a>

```csharp
public string DataType { get; }
```

- *Type:* string

---

##### `DbDefinedChildColumnKeys`<sup>Required</sup> <a name="DbDefinedChildColumnKeys" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.property.dbDefinedChildColumnKeys"></a>

```csharp
public string[] DbDefinedChildColumnKeys { get; }
```

- *Type:* string[]

---

##### `DiscoveryJobId`<sup>Required</sup> <a name="DiscoveryJobId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.property.discoveryJobId"></a>

```csharp
public string DiscoveryJobId { get; }
```

- *Type:* string

---

##### `DiscoveryType`<sup>Required</sup> <a name="DiscoveryType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.property.discoveryType"></a>

```csharp
public string DiscoveryType { get; }
```

- *Type:* string

---

##### `EstimatedDataValueCount`<sup>Required</sup> <a name="EstimatedDataValueCount" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.property.estimatedDataValueCount"></a>

```csharp
public string EstimatedDataValueCount { get; }
```

- *Type:* string

---

##### `IsResultApplied`<sup>Required</sup> <a name="IsResultApplied" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.property.isResultApplied"></a>

```csharp
public IResolvable IsResultApplied { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Key`<sup>Required</sup> <a name="Key" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `ModifiedAttributes`<sup>Required</sup> <a name="ModifiedAttributes" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.property.modifiedAttributes"></a>

```csharp
public DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesList ModifiedAttributes { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesList">DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesList</a>

---

##### `Object`<sup>Required</sup> <a name="Object" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.property.object"></a>

```csharp
public string Object { get; }
```

- *Type:* string

---

##### `ObjectType`<sup>Required</sup> <a name="ObjectType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.property.objectType"></a>

```csharp
public string ObjectType { get; }
```

- *Type:* string

---

##### `ParentColumnKeys`<sup>Required</sup> <a name="ParentColumnKeys" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.property.parentColumnKeys"></a>

```csharp
public string[] ParentColumnKeys { get; }
```

- *Type:* string[]

---

##### `PlannedAction`<sup>Required</sup> <a name="PlannedAction" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.property.plannedAction"></a>

```csharp
public string PlannedAction { get; }
```

- *Type:* string

---

##### `RelationType`<sup>Required</sup> <a name="RelationType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.property.relationType"></a>

```csharp
public string RelationType { get; }
```

- *Type:* string

---

##### `SampleDataValues`<sup>Required</sup> <a name="SampleDataValues" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.property.sampleDataValues"></a>

```csharp
public string[] SampleDataValues { get; }
```

- *Type:* string[]

---

##### `SchemaName`<sup>Required</sup> <a name="SchemaName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.property.schemaName"></a>

```csharp
public string SchemaName { get; }
```

- *Type:* string

---

##### `SensitiveColumnkey`<sup>Required</sup> <a name="SensitiveColumnkey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.property.sensitiveColumnkey"></a>

```csharp
public string SensitiveColumnkey { get; }
```

- *Type:* string

---

##### `SensitiveTypeId`<sup>Required</sup> <a name="SensitiveTypeId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.property.sensitiveTypeId"></a>

```csharp
public string SensitiveTypeId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.property.internalValue"></a>

```csharp
public DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItems InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItems">DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItems</a>

---


### DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionList <a name="DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionList.get"></a>

```csharp
private DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionOutputReference <a name="DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsList">DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollection">DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionOutputReference.property.items"></a>

```csharp
public DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsList Items { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsList">DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionOutputReference.property.internalValue"></a>

```csharp
public DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollection InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollection">DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollection</a>

---


### DataOciDataSafeDiscoveryJobsResultsFilterList <a name="DataOciDataSafeDiscoveryJobsResultsFilterList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeDiscoveryJobsResultsFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterList.get"></a>

```csharp
private DataOciDataSafeDiscoveryJobsResultsFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciDataSafeDiscoveryJobsResultsFilterOutputReference <a name="DataOciDataSafeDiscoveryJobsResultsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeDiscoveryJobsResultsFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterOutputReference.resetRegex"></a>

```csharp
private void ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterOutputReference.property.regex">Regex</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterOutputReference.property.regexInput"></a>

```csharp
public object RegexInput { get; }
```

- *Type:* object

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterOutputReference.property.regex"></a>

```csharp
public object Regex { get; }
```

- *Type:* object

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



