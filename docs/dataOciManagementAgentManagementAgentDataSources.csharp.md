# `dataOciManagementAgentManagementAgentDataSources` Submodule <a name="`dataOciManagementAgentManagementAgentDataSources` Submodule" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciManagementAgentManagementAgentDataSources <a name="DataOciManagementAgentManagementAgentDataSources" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSources"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agent_data_sources oci_management_agent_management_agent_data_sources}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSources.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciManagementAgentManagementAgentDataSources(Construct Scope, string Id, DataOciManagementAgentManagementAgentDataSourcesConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSources.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSources.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSources.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSourcesConfig">DataOciManagementAgentManagementAgentDataSourcesConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSources.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSources.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSources.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSourcesConfig">DataOciManagementAgentManagementAgentDataSourcesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSources.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSources.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSources.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSources.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSources.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSources.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSources.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSources.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSources.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSources.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSources.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSources.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSources.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSources.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSources.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSources.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSources.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSources.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSources.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSources.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSources.resetName">ResetName</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSources.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSources.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSources.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSources.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSources.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSources.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSources.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSources.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSources.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSources.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSources.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSources.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSources.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSources.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSources.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSources.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSources.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSources.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSources.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSources.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSources.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSources.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSources.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSources.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSources.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSources.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSources.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSources.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSources.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSources.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSources.putFilter"></a>

```csharp
private void PutFilter(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSources.putFilter.parameter.value"></a>

- *Type:* object

---

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSources.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSources.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetName` <a name="ResetName" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSources.resetName"></a>

```csharp
private void ResetName()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSources.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSources.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSources.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSources.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciManagementAgentManagementAgentDataSources resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSources.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciManagementAgentManagementAgentDataSources.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSources.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSources.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciManagementAgentManagementAgentDataSources.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSources.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSources.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciManagementAgentManagementAgentDataSources.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSources.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSources.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciManagementAgentManagementAgentDataSources.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciManagementAgentManagementAgentDataSources resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSources.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSources.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciManagementAgentManagementAgentDataSources to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSources.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciManagementAgentManagementAgentDataSources that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agent_data_sources#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSources.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciManagementAgentManagementAgentDataSources to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSources.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSources.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSources.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSources.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSources.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSources.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSources.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSources.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSources.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSources.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSources.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSources.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSources.property.dataSources">DataSources</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSourcesDataSourcesList">DataOciManagementAgentManagementAgentDataSourcesDataSourcesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSources.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSourcesFilterList">DataOciManagementAgentManagementAgentDataSourcesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSources.property.filterInput">FilterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSources.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSources.property.managementAgentIdInput">ManagementAgentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSources.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSources.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSources.property.managementAgentId">ManagementAgentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSources.property.name">Name</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSources.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSources.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSources.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSources.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSources.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSources.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSources.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSources.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSources.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSources.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSources.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSources.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `DataSources`<sup>Required</sup> <a name="DataSources" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSources.property.dataSources"></a>

```csharp
public DataOciManagementAgentManagementAgentDataSourcesDataSourcesList DataSources { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSourcesDataSourcesList">DataOciManagementAgentManagementAgentDataSourcesDataSourcesList</a>

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSources.property.filter"></a>

```csharp
public DataOciManagementAgentManagementAgentDataSourcesFilterList Filter { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSourcesFilterList">DataOciManagementAgentManagementAgentDataSourcesFilterList</a>

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSources.property.filterInput"></a>

```csharp
public object FilterInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSources.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ManagementAgentIdInput`<sup>Optional</sup> <a name="ManagementAgentIdInput" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSources.property.managementAgentIdInput"></a>

```csharp
public string ManagementAgentIdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSources.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSources.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ManagementAgentId`<sup>Required</sup> <a name="ManagementAgentId" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSources.property.managementAgentId"></a>

```csharp
public string ManagementAgentId { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSources.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSources.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSources.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciManagementAgentManagementAgentDataSourcesConfig <a name="DataOciManagementAgentManagementAgentDataSourcesConfig" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSourcesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSourcesConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciManagementAgentManagementAgentDataSourcesConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ManagementAgentId,
    object Filter = null,
    string Id = null,
    string Name = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSourcesConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSourcesConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSourcesConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSourcesConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSourcesConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSourcesConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSourcesConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSourcesConfig.property.managementAgentId">ManagementAgentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agent_data_sources#management_agent_id DataOciManagementAgentManagementAgentDataSources#management_agent_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSourcesConfig.property.filter">Filter</a></code> | <code>object</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSourcesConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agent_data_sources#id DataOciManagementAgentManagementAgentDataSources#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSourcesConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agent_data_sources#name DataOciManagementAgentManagementAgentDataSources#name}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSourcesConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSourcesConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSourcesConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSourcesConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSourcesConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSourcesConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSourcesConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ManagementAgentId`<sup>Required</sup> <a name="ManagementAgentId" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSourcesConfig.property.managementAgentId"></a>

```csharp
public string ManagementAgentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agent_data_sources#management_agent_id DataOciManagementAgentManagementAgentDataSources#management_agent_id}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSourcesConfig.property.filter"></a>

```csharp
public object Filter { get; set; }
```

- *Type:* object

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agent_data_sources#filter DataOciManagementAgentManagementAgentDataSources#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSourcesConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agent_data_sources#id DataOciManagementAgentManagementAgentDataSources#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSourcesConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agent_data_sources#name DataOciManagementAgentManagementAgentDataSources#name}.

---

### DataOciManagementAgentManagementAgentDataSourcesDataSources <a name="DataOciManagementAgentManagementAgentDataSourcesDataSources" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSourcesDataSources"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSourcesDataSources.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciManagementAgentManagementAgentDataSourcesDataSources {

};
```


### DataOciManagementAgentManagementAgentDataSourcesFilter <a name="DataOciManagementAgentManagementAgentDataSourcesFilter" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSourcesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSourcesFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciManagementAgentManagementAgentDataSourcesFilter {
    string Name,
    string[] Values,
    object Regex = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSourcesFilter.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agent_data_sources#name DataOciManagementAgentManagementAgentDataSources#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSourcesFilter.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agent_data_sources#values DataOciManagementAgentManagementAgentDataSources#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSourcesFilter.property.regex">Regex</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agent_data_sources#regex DataOciManagementAgentManagementAgentDataSources#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSourcesFilter.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agent_data_sources#name DataOciManagementAgentManagementAgentDataSources#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSourcesFilter.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agent_data_sources#values DataOciManagementAgentManagementAgentDataSources#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSourcesFilter.property.regex"></a>

```csharp
public object Regex { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agent_data_sources#regex DataOciManagementAgentManagementAgentDataSources#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciManagementAgentManagementAgentDataSourcesDataSourcesList <a name="DataOciManagementAgentManagementAgentDataSourcesDataSourcesList" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSourcesDataSourcesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSourcesDataSourcesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciManagementAgentManagementAgentDataSourcesDataSourcesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSourcesDataSourcesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSourcesDataSourcesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSourcesDataSourcesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSourcesDataSourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSourcesDataSourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSourcesDataSourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSourcesDataSourcesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSourcesDataSourcesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSourcesDataSourcesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSourcesDataSourcesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSourcesDataSourcesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSourcesDataSourcesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSourcesDataSourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSourcesDataSourcesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSourcesDataSourcesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSourcesDataSourcesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSourcesDataSourcesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSourcesDataSourcesList.get"></a>

```csharp
private DataOciManagementAgentManagementAgentDataSourcesDataSourcesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSourcesDataSourcesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSourcesDataSourcesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSourcesDataSourcesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSourcesDataSourcesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSourcesDataSourcesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciManagementAgentManagementAgentDataSourcesDataSourcesOutputReference <a name="DataOciManagementAgentManagementAgentDataSourcesDataSourcesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSourcesDataSourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSourcesDataSourcesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciManagementAgentManagementAgentDataSourcesDataSourcesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSourcesDataSourcesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSourcesDataSourcesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSourcesDataSourcesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSourcesDataSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSourcesDataSourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSourcesDataSourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSourcesDataSourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSourcesDataSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSourcesDataSourcesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSourcesDataSourcesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSourcesDataSourcesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSourcesDataSourcesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSourcesDataSourcesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSourcesDataSourcesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSourcesDataSourcesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSourcesDataSourcesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSourcesDataSourcesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSourcesDataSourcesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSourcesDataSourcesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSourcesDataSourcesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSourcesDataSourcesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSourcesDataSourcesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSourcesDataSourcesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSourcesDataSourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSourcesDataSourcesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSourcesDataSourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSourcesDataSourcesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSourcesDataSourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSourcesDataSourcesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSourcesDataSourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSourcesDataSourcesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSourcesDataSourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSourcesDataSourcesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSourcesDataSourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSourcesDataSourcesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSourcesDataSourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSourcesDataSourcesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSourcesDataSourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSourcesDataSourcesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSourcesDataSourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSourcesDataSourcesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSourcesDataSourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSourcesDataSourcesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSourcesDataSourcesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSourcesDataSourcesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSourcesDataSourcesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSourcesDataSourcesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSourcesDataSourcesOutputReference.property.dataSourceKey">DataSourceKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSourcesDataSourcesOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSourcesDataSourcesOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSourcesDataSourcesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSourcesDataSources">DataOciManagementAgentManagementAgentDataSourcesDataSources</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSourcesDataSourcesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSourcesDataSourcesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DataSourceKey`<sup>Required</sup> <a name="DataSourceKey" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSourcesDataSourcesOutputReference.property.dataSourceKey"></a>

```csharp
public string DataSourceKey { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSourcesDataSourcesOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSourcesDataSourcesOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSourcesDataSourcesOutputReference.property.internalValue"></a>

```csharp
public DataOciManagementAgentManagementAgentDataSourcesDataSources InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSourcesDataSources">DataOciManagementAgentManagementAgentDataSourcesDataSources</a>

---


### DataOciManagementAgentManagementAgentDataSourcesFilterList <a name="DataOciManagementAgentManagementAgentDataSourcesFilterList" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSourcesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSourcesFilterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciManagementAgentManagementAgentDataSourcesFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSourcesFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSourcesFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSourcesFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSourcesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSourcesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSourcesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSourcesFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSourcesFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSourcesFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSourcesFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSourcesFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSourcesFilterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSourcesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSourcesFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSourcesFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSourcesFilterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSourcesFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSourcesFilterList.get"></a>

```csharp
private DataOciManagementAgentManagementAgentDataSourcesFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSourcesFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSourcesFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSourcesFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSourcesFilterList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSourcesFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSourcesFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSourcesFilterList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciManagementAgentManagementAgentDataSourcesFilterOutputReference <a name="DataOciManagementAgentManagementAgentDataSourcesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSourcesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSourcesFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciManagementAgentManagementAgentDataSourcesFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSourcesFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSourcesFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSourcesFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSourcesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSourcesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSourcesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSourcesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSourcesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSourcesFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSourcesFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSourcesFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSourcesFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSourcesFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSourcesFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSourcesFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSourcesFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSourcesFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSourcesFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSourcesFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSourcesFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSourcesFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSourcesFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSourcesFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSourcesFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSourcesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSourcesFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSourcesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSourcesFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSourcesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSourcesFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSourcesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSourcesFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSourcesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSourcesFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSourcesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSourcesFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSourcesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSourcesFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSourcesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSourcesFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSourcesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSourcesFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSourcesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSourcesFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSourcesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSourcesFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSourcesFilterOutputReference.resetRegex"></a>

```csharp
private void ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSourcesFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSourcesFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSourcesFilterOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSourcesFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSourcesFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSourcesFilterOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSourcesFilterOutputReference.property.regex">Regex</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSourcesFilterOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSourcesFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSourcesFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSourcesFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSourcesFilterOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSourcesFilterOutputReference.property.regexInput"></a>

```csharp
public object RegexInput { get; }
```

- *Type:* object

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSourcesFilterOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSourcesFilterOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSourcesFilterOutputReference.property.regex"></a>

```csharp
public object Regex { get; }
```

- *Type:* object

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSourcesFilterOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSources.DataOciManagementAgentManagementAgentDataSourcesFilterOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


