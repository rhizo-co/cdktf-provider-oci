# `dataOciMysqlMysqlDbSystems` Submodule <a name="`dataOciMysqlMysqlDbSystems` Submodule" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciMysqlMysqlDbSystems <a name="DataOciMysqlMysqlDbSystems" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_db_systems oci_mysql_mysql_db_systems}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciMysqlMysqlDbSystems(Construct Scope, string Id, DataOciMysqlMysqlDbSystemsConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsConfig">DataOciMysqlMysqlDbSystemsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsConfig">DataOciMysqlMysqlDbSystemsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.resetConfigurationId">ResetConfigurationId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.resetDatabaseManagement">ResetDatabaseManagement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.resetDbSystemId">ResetDbSystemId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.resetIsHeatWaveClusterAttached">ResetIsHeatWaveClusterAttached</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.resetIsUpToDate">ResetIsUpToDate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.resetState">ResetState</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.putFilter"></a>

```csharp
private void PutFilter(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.putFilter.parameter.value"></a>

- *Type:* object

---

##### `ResetConfigurationId` <a name="ResetConfigurationId" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.resetConfigurationId"></a>

```csharp
private void ResetConfigurationId()
```

##### `ResetDatabaseManagement` <a name="ResetDatabaseManagement" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.resetDatabaseManagement"></a>

```csharp
private void ResetDatabaseManagement()
```

##### `ResetDbSystemId` <a name="ResetDbSystemId" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.resetDbSystemId"></a>

```csharp
private void ResetDbSystemId()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIsHeatWaveClusterAttached` <a name="ResetIsHeatWaveClusterAttached" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.resetIsHeatWaveClusterAttached"></a>

```csharp
private void ResetIsHeatWaveClusterAttached()
```

##### `ResetIsUpToDate` <a name="ResetIsUpToDate" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.resetIsUpToDate"></a>

```csharp
private void ResetIsUpToDate()
```

##### `ResetState` <a name="ResetState" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.resetState"></a>

```csharp
private void ResetState()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciMysqlMysqlDbSystems resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciMysqlMysqlDbSystems.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciMysqlMysqlDbSystems.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciMysqlMysqlDbSystems.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciMysqlMysqlDbSystems.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciMysqlMysqlDbSystems resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciMysqlMysqlDbSystems to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciMysqlMysqlDbSystems that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_db_systems#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciMysqlMysqlDbSystems to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.property.dbSystems">DbSystems</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsList">DataOciMysqlMysqlDbSystemsDbSystemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterList">DataOciMysqlMysqlDbSystemsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.property.configurationIdInput">ConfigurationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.property.databaseManagementInput">DatabaseManagementInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.property.dbSystemIdInput">DbSystemIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.property.filterInput">FilterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.property.isHeatWaveClusterAttachedInput">IsHeatWaveClusterAttachedInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.property.isUpToDateInput">IsUpToDateInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.property.stateInput">StateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.property.configurationId">ConfigurationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.property.databaseManagement">DatabaseManagement</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.property.dbSystemId">DbSystemId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.property.isHeatWaveClusterAttached">IsHeatWaveClusterAttached</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.property.isUpToDate">IsUpToDate</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.property.state">State</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `DbSystems`<sup>Required</sup> <a name="DbSystems" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.property.dbSystems"></a>

```csharp
public DataOciMysqlMysqlDbSystemsDbSystemsList DbSystems { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsList">DataOciMysqlMysqlDbSystemsDbSystemsList</a>

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.property.filter"></a>

```csharp
public DataOciMysqlMysqlDbSystemsFilterList Filter { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterList">DataOciMysqlMysqlDbSystemsFilterList</a>

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `ConfigurationIdInput`<sup>Optional</sup> <a name="ConfigurationIdInput" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.property.configurationIdInput"></a>

```csharp
public string ConfigurationIdInput { get; }
```

- *Type:* string

---

##### `DatabaseManagementInput`<sup>Optional</sup> <a name="DatabaseManagementInput" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.property.databaseManagementInput"></a>

```csharp
public string[] DatabaseManagementInput { get; }
```

- *Type:* string[]

---

##### `DbSystemIdInput`<sup>Optional</sup> <a name="DbSystemIdInput" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.property.dbSystemIdInput"></a>

```csharp
public string DbSystemIdInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.property.filterInput"></a>

```csharp
public object FilterInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IsHeatWaveClusterAttachedInput`<sup>Optional</sup> <a name="IsHeatWaveClusterAttachedInput" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.property.isHeatWaveClusterAttachedInput"></a>

```csharp
public object IsHeatWaveClusterAttachedInput { get; }
```

- *Type:* object

---

##### `IsUpToDateInput`<sup>Optional</sup> <a name="IsUpToDateInput" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.property.isUpToDateInput"></a>

```csharp
public object IsUpToDateInput { get; }
```

- *Type:* object

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.property.stateInput"></a>

```csharp
public string StateInput { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `ConfigurationId`<sup>Required</sup> <a name="ConfigurationId" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.property.configurationId"></a>

```csharp
public string ConfigurationId { get; }
```

- *Type:* string

---

##### `DatabaseManagement`<sup>Required</sup> <a name="DatabaseManagement" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.property.databaseManagement"></a>

```csharp
public string[] DatabaseManagement { get; }
```

- *Type:* string[]

---

##### `DbSystemId`<sup>Required</sup> <a name="DbSystemId" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.property.dbSystemId"></a>

```csharp
public string DbSystemId { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IsHeatWaveClusterAttached`<sup>Required</sup> <a name="IsHeatWaveClusterAttached" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.property.isHeatWaveClusterAttached"></a>

```csharp
public object IsHeatWaveClusterAttached { get; }
```

- *Type:* object

---

##### `IsUpToDate`<sup>Required</sup> <a name="IsUpToDate" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.property.isUpToDate"></a>

```csharp
public object IsUpToDate { get; }
```

- *Type:* object

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciMysqlMysqlDbSystemsConfig <a name="DataOciMysqlMysqlDbSystemsConfig" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciMysqlMysqlDbSystemsConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string CompartmentId,
    string ConfigurationId = null,
    string[] DatabaseManagement = null,
    string DbSystemId = null,
    string DisplayName = null,
    object Filter = null,
    string Id = null,
    object IsHeatWaveClusterAttached = null,
    object IsUpToDate = null,
    string State = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_db_systems#compartment_id DataOciMysqlMysqlDbSystems#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsConfig.property.configurationId">ConfigurationId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_db_systems#configuration_id DataOciMysqlMysqlDbSystems#configuration_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsConfig.property.databaseManagement">DatabaseManagement</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_db_systems#database_management DataOciMysqlMysqlDbSystems#database_management}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsConfig.property.dbSystemId">DbSystemId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_db_systems#db_system_id DataOciMysqlMysqlDbSystems#db_system_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_db_systems#display_name DataOciMysqlMysqlDbSystems#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsConfig.property.filter">Filter</a></code> | <code>object</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_db_systems#id DataOciMysqlMysqlDbSystems#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsConfig.property.isHeatWaveClusterAttached">IsHeatWaveClusterAttached</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_db_systems#is_heat_wave_cluster_attached DataOciMysqlMysqlDbSystems#is_heat_wave_cluster_attached}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsConfig.property.isUpToDate">IsUpToDate</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_db_systems#is_up_to_date DataOciMysqlMysqlDbSystems#is_up_to_date}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsConfig.property.state">State</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_db_systems#state DataOciMysqlMysqlDbSystems#state}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_db_systems#compartment_id DataOciMysqlMysqlDbSystems#compartment_id}.

---

##### `ConfigurationId`<sup>Optional</sup> <a name="ConfigurationId" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsConfig.property.configurationId"></a>

```csharp
public string ConfigurationId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_db_systems#configuration_id DataOciMysqlMysqlDbSystems#configuration_id}.

---

##### `DatabaseManagement`<sup>Optional</sup> <a name="DatabaseManagement" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsConfig.property.databaseManagement"></a>

```csharp
public string[] DatabaseManagement { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_db_systems#database_management DataOciMysqlMysqlDbSystems#database_management}.

---

##### `DbSystemId`<sup>Optional</sup> <a name="DbSystemId" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsConfig.property.dbSystemId"></a>

```csharp
public string DbSystemId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_db_systems#db_system_id DataOciMysqlMysqlDbSystems#db_system_id}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_db_systems#display_name DataOciMysqlMysqlDbSystems#display_name}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsConfig.property.filter"></a>

```csharp
public object Filter { get; set; }
```

- *Type:* object

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_db_systems#filter DataOciMysqlMysqlDbSystems#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_db_systems#id DataOciMysqlMysqlDbSystems#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IsHeatWaveClusterAttached`<sup>Optional</sup> <a name="IsHeatWaveClusterAttached" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsConfig.property.isHeatWaveClusterAttached"></a>

```csharp
public object IsHeatWaveClusterAttached { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_db_systems#is_heat_wave_cluster_attached DataOciMysqlMysqlDbSystems#is_heat_wave_cluster_attached}.

---

##### `IsUpToDate`<sup>Optional</sup> <a name="IsUpToDate" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsConfig.property.isUpToDate"></a>

```csharp
public object IsUpToDate { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_db_systems#is_up_to_date DataOciMysqlMysqlDbSystems#is_up_to_date}.

---

##### `State`<sup>Optional</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsConfig.property.state"></a>

```csharp
public string State { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_db_systems#state DataOciMysqlMysqlDbSystems#state}.

---

### DataOciMysqlMysqlDbSystemsDbSystems <a name="DataOciMysqlMysqlDbSystemsDbSystems" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystems.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciMysqlMysqlDbSystemsDbSystems {

};
```


### DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicy <a name="DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicy" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicy {

};
```


### DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicy <a name="DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicy" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicy {

};
```


### DataOciMysqlMysqlDbSystemsDbSystemsChannels <a name="DataOciMysqlMysqlDbSystemsDbSystemsChannels" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannels"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannels.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciMysqlMysqlDbSystemsDbSystemsChannels {

};
```


### DataOciMysqlMysqlDbSystemsDbSystemsChannelsSource <a name="DataOciMysqlMysqlDbSystemsDbSystemsChannelsSource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSource"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSource.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciMysqlMysqlDbSystemsDbSystemsChannelsSource {

};
```


### DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandling <a name="DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandling" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandling"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandling.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandling {

};
```


### DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificate <a name="DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificate" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificate"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificate.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificate {

};
```


### DataOciMysqlMysqlDbSystemsDbSystemsChannelsTarget <a name="DataOciMysqlMysqlDbSystemsDbSystemsChannelsTarget" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTarget"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTarget.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciMysqlMysqlDbSystemsDbSystemsChannelsTarget {

};
```


### DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFilters <a name="DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFilters" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFilters"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFilters.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFilters {

};
```


### DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacement <a name="DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacement" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacement"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacement.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacement {

};
```


### DataOciMysqlMysqlDbSystemsDbSystemsCustomerContacts <a name="DataOciMysqlMysqlDbSystemsDbSystemsCustomerContacts" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContacts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContacts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciMysqlMysqlDbSystemsDbSystemsCustomerContacts {

};
```


### DataOciMysqlMysqlDbSystemsDbSystemsDataStorage <a name="DataOciMysqlMysqlDbSystemsDbSystemsDataStorage" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorage"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorage.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciMysqlMysqlDbSystemsDbSystemsDataStorage {

};
```


### DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicy <a name="DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicy" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicy {

};
```


### DataOciMysqlMysqlDbSystemsDbSystemsEndpoints <a name="DataOciMysqlMysqlDbSystemsDbSystemsEndpoints" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpoints"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpoints.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciMysqlMysqlDbSystemsDbSystemsEndpoints {

};
```


### DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveCluster <a name="DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveCluster" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveCluster"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveCluster.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveCluster {

};
```


### DataOciMysqlMysqlDbSystemsDbSystemsMaintenance <a name="DataOciMysqlMysqlDbSystemsDbSystemsMaintenance" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenance"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenance.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciMysqlMysqlDbSystemsDbSystemsMaintenance {

};
```


### DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetails <a name="DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetails" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetails {

};
```


### DataOciMysqlMysqlDbSystemsDbSystemsSecureConnections <a name="DataOciMysqlMysqlDbSystemsDbSystemsSecureConnections" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnections"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnections.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciMysqlMysqlDbSystemsDbSystemsSecureConnections {

};
```


### DataOciMysqlMysqlDbSystemsDbSystemsSource <a name="DataOciMysqlMysqlDbSystemsDbSystemsSource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSource"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSource.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciMysqlMysqlDbSystemsDbSystemsSource {

};
```


### DataOciMysqlMysqlDbSystemsFilter <a name="DataOciMysqlMysqlDbSystemsFilter" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciMysqlMysqlDbSystemsFilter {
    string Name,
    string[] Values,
    object Regex = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilter.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_db_systems#name DataOciMysqlMysqlDbSystems#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilter.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_db_systems#values DataOciMysqlMysqlDbSystems#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilter.property.regex">Regex</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_db_systems#regex DataOciMysqlMysqlDbSystems#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilter.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_db_systems#name DataOciMysqlMysqlDbSystems#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilter.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_db_systems#values DataOciMysqlMysqlDbSystems#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilter.property.regex"></a>

```csharp
public object Regex { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_db_systems#regex DataOciMysqlMysqlDbSystems#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyList <a name="DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyList" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyList.get"></a>

```csharp
private DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyOutputReference <a name="DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyOutputReference.property.definedTags">DefinedTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyOutputReference.property.freeformTags">FreeformTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyOutputReference.property.isEnabled">IsEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyOutputReference.property.pitrPolicy">PitrPolicy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyList">DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyOutputReference.property.retentionInDays">RetentionInDays</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyOutputReference.property.windowStartTime">WindowStartTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicy">DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyOutputReference.property.definedTags"></a>

```csharp
public StringMap DefinedTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyOutputReference.property.freeformTags"></a>

```csharp
public StringMap FreeformTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `IsEnabled`<sup>Required</sup> <a name="IsEnabled" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyOutputReference.property.isEnabled"></a>

```csharp
public IResolvable IsEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `PitrPolicy`<sup>Required</sup> <a name="PitrPolicy" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyOutputReference.property.pitrPolicy"></a>

```csharp
public DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyList PitrPolicy { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyList">DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyList</a>

---

##### `RetentionInDays`<sup>Required</sup> <a name="RetentionInDays" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyOutputReference.property.retentionInDays"></a>

```csharp
public double RetentionInDays { get; }
```

- *Type:* double

---

##### `WindowStartTime`<sup>Required</sup> <a name="WindowStartTime" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyOutputReference.property.windowStartTime"></a>

```csharp
public string WindowStartTime { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyOutputReference.property.internalValue"></a>

```csharp
public DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicy InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicy">DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicy</a>

---


### DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyList <a name="DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyList" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyList.get"></a>

```csharp
private DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyOutputReference <a name="DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyOutputReference.property.isEnabled">IsEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicy">DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IsEnabled`<sup>Required</sup> <a name="IsEnabled" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyOutputReference.property.isEnabled"></a>

```csharp
public IResolvable IsEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyOutputReference.property.internalValue"></a>

```csharp
public DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicy InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicy">DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicy</a>

---


### DataOciMysqlMysqlDbSystemsDbSystemsChannelsList <a name="DataOciMysqlMysqlDbSystemsDbSystemsChannelsList" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciMysqlMysqlDbSystemsDbSystemsChannelsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsList.get"></a>

```csharp
private DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference <a name="DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.property.definedTags">DefinedTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.property.freeformTags">FreeformTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.property.isEnabled">IsEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.property.lifecycleDetails">LifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.property.source">Source</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceList">DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.property.target">Target</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetList">DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.property.timeUpdated">TimeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannels">DataOciMysqlMysqlDbSystemsDbSystemsChannels</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.property.definedTags"></a>

```csharp
public StringMap DefinedTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.property.freeformTags"></a>

```csharp
public StringMap FreeformTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IsEnabled`<sup>Required</sup> <a name="IsEnabled" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.property.isEnabled"></a>

```csharp
public IResolvable IsEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.property.lifecycleDetails"></a>

```csharp
public string LifecycleDetails { get; }
```

- *Type:* string

---

##### `Source`<sup>Required</sup> <a name="Source" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.property.source"></a>

```csharp
public DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceList Source { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceList">DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceList</a>

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `Target`<sup>Required</sup> <a name="Target" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.property.target"></a>

```csharp
public DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetList Target { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetList">DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetList</a>

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.property.timeUpdated"></a>

```csharp
public string TimeUpdated { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.property.internalValue"></a>

```csharp
public DataOciMysqlMysqlDbSystemsDbSystemsChannels InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannels">DataOciMysqlMysqlDbSystemsDbSystemsChannels</a>

---


### DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingList <a name="DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingList" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingList.get"></a>

```csharp
private DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingOutputReference <a name="DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingOutputReference.property.lastConfiguredLogFilename">LastConfiguredLogFilename</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingOutputReference.property.lastConfiguredLogOffset">LastConfiguredLogOffset</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingOutputReference.property.policy">Policy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingOutputReference.property.uuid">Uuid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandling">DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandling</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LastConfiguredLogFilename`<sup>Required</sup> <a name="LastConfiguredLogFilename" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingOutputReference.property.lastConfiguredLogFilename"></a>

```csharp
public string LastConfiguredLogFilename { get; }
```

- *Type:* string

---

##### `LastConfiguredLogOffset`<sup>Required</sup> <a name="LastConfiguredLogOffset" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingOutputReference.property.lastConfiguredLogOffset"></a>

```csharp
public string LastConfiguredLogOffset { get; }
```

- *Type:* string

---

##### `Policy`<sup>Required</sup> <a name="Policy" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingOutputReference.property.policy"></a>

```csharp
public string Policy { get; }
```

- *Type:* string

---

##### `Uuid`<sup>Required</sup> <a name="Uuid" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingOutputReference.property.uuid"></a>

```csharp
public string Uuid { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingOutputReference.property.internalValue"></a>

```csharp
public DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandling InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandling">DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandling</a>

---


### DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceList <a name="DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceList" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceList.get"></a>

```csharp
private DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceOutputReference <a name="DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceOutputReference.property.anonymousTransactionsHandling">AnonymousTransactionsHandling</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingList">DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceOutputReference.property.hostname">Hostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceOutputReference.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceOutputReference.property.sourceType">SourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceOutputReference.property.sslCaCertificate">SslCaCertificate</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateList">DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceOutputReference.property.sslMode">SslMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceOutputReference.property.username">Username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSource">DataOciMysqlMysqlDbSystemsDbSystemsChannelsSource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AnonymousTransactionsHandling`<sup>Required</sup> <a name="AnonymousTransactionsHandling" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceOutputReference.property.anonymousTransactionsHandling"></a>

```csharp
public DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingList AnonymousTransactionsHandling { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingList">DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingList</a>

---

##### `Hostname`<sup>Required</sup> <a name="Hostname" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceOutputReference.property.hostname"></a>

```csharp
public string Hostname { get; }
```

- *Type:* string

---

##### `Port`<sup>Required</sup> <a name="Port" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceOutputReference.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `SourceType`<sup>Required</sup> <a name="SourceType" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceOutputReference.property.sourceType"></a>

```csharp
public string SourceType { get; }
```

- *Type:* string

---

##### `SslCaCertificate`<sup>Required</sup> <a name="SslCaCertificate" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceOutputReference.property.sslCaCertificate"></a>

```csharp
public DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateList SslCaCertificate { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateList">DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateList</a>

---

##### `SslMode`<sup>Required</sup> <a name="SslMode" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceOutputReference.property.sslMode"></a>

```csharp
public string SslMode { get; }
```

- *Type:* string

---

##### `Username`<sup>Required</sup> <a name="Username" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceOutputReference.property.username"></a>

```csharp
public string Username { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceOutputReference.property.internalValue"></a>

```csharp
public DataOciMysqlMysqlDbSystemsDbSystemsChannelsSource InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSource">DataOciMysqlMysqlDbSystemsDbSystemsChannelsSource</a>

---


### DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateList <a name="DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateList" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateList.get"></a>

```csharp
private DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateOutputReference <a name="DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateOutputReference.property.certificateType">CertificateType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateOutputReference.property.contents">Contents</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificate">DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificate</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CertificateType`<sup>Required</sup> <a name="CertificateType" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateOutputReference.property.certificateType"></a>

```csharp
public string CertificateType { get; }
```

- *Type:* string

---

##### `Contents`<sup>Required</sup> <a name="Contents" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateOutputReference.property.contents"></a>

```csharp
public string Contents { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateOutputReference.property.internalValue"></a>

```csharp
public DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificate InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificate">DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificate</a>

---


### DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersList <a name="DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersList" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersList.get"></a>

```csharp
private DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersOutputReference <a name="DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFilters">DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFilters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersOutputReference.property.internalValue"></a>

```csharp
public DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFilters InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFilters">DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFilters</a>

---


### DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetList <a name="DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetList" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetList.get"></a>

```csharp
private DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetOutputReference <a name="DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetOutputReference.property.applierUsername">ApplierUsername</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetOutputReference.property.channelName">ChannelName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetOutputReference.property.dbSystemId">DbSystemId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetOutputReference.property.delayInSeconds">DelayInSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetOutputReference.property.filters">Filters</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersList">DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetOutputReference.property.tablesWithoutPrimaryKeyHandling">TablesWithoutPrimaryKeyHandling</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetOutputReference.property.targetType">TargetType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTarget">DataOciMysqlMysqlDbSystemsDbSystemsChannelsTarget</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ApplierUsername`<sup>Required</sup> <a name="ApplierUsername" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetOutputReference.property.applierUsername"></a>

```csharp
public string ApplierUsername { get; }
```

- *Type:* string

---

##### `ChannelName`<sup>Required</sup> <a name="ChannelName" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetOutputReference.property.channelName"></a>

```csharp
public string ChannelName { get; }
```

- *Type:* string

---

##### `DbSystemId`<sup>Required</sup> <a name="DbSystemId" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetOutputReference.property.dbSystemId"></a>

```csharp
public string DbSystemId { get; }
```

- *Type:* string

---

##### `DelayInSeconds`<sup>Required</sup> <a name="DelayInSeconds" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetOutputReference.property.delayInSeconds"></a>

```csharp
public double DelayInSeconds { get; }
```

- *Type:* double

---

##### `Filters`<sup>Required</sup> <a name="Filters" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetOutputReference.property.filters"></a>

```csharp
public DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersList Filters { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersList">DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersList</a>

---

##### `TablesWithoutPrimaryKeyHandling`<sup>Required</sup> <a name="TablesWithoutPrimaryKeyHandling" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetOutputReference.property.tablesWithoutPrimaryKeyHandling"></a>

```csharp
public string TablesWithoutPrimaryKeyHandling { get; }
```

- *Type:* string

---

##### `TargetType`<sup>Required</sup> <a name="TargetType" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetOutputReference.property.targetType"></a>

```csharp
public string TargetType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetOutputReference.property.internalValue"></a>

```csharp
public DataOciMysqlMysqlDbSystemsDbSystemsChannelsTarget InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTarget">DataOciMysqlMysqlDbSystemsDbSystemsChannelsTarget</a>

---


### DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementList <a name="DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementList" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementList.get"></a>

```csharp
private DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementOutputReference <a name="DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementOutputReference.property.availabilityDomain">AvailabilityDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementOutputReference.property.faultDomain">FaultDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacement">DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacement</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AvailabilityDomain`<sup>Required</sup> <a name="AvailabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementOutputReference.property.availabilityDomain"></a>

```csharp
public string AvailabilityDomain { get; }
```

- *Type:* string

---

##### `FaultDomain`<sup>Required</sup> <a name="FaultDomain" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementOutputReference.property.faultDomain"></a>

```csharp
public string FaultDomain { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementOutputReference.property.internalValue"></a>

```csharp
public DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacement InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacement">DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacement</a>

---


### DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsList <a name="DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsList" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsList.get"></a>

```csharp
private DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsOutputReference <a name="DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsOutputReference.property.email">Email</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContacts">DataOciMysqlMysqlDbSystemsDbSystemsCustomerContacts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Email`<sup>Required</sup> <a name="Email" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsOutputReference.property.email"></a>

```csharp
public string Email { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsOutputReference.property.internalValue"></a>

```csharp
public DataOciMysqlMysqlDbSystemsDbSystemsCustomerContacts InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContacts">DataOciMysqlMysqlDbSystemsDbSystemsCustomerContacts</a>

---


### DataOciMysqlMysqlDbSystemsDbSystemsDataStorageList <a name="DataOciMysqlMysqlDbSystemsDbSystemsDataStorageList" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciMysqlMysqlDbSystemsDbSystemsDataStorageList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageList.get"></a>

```csharp
private DataOciMysqlMysqlDbSystemsDbSystemsDataStorageOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciMysqlMysqlDbSystemsDbSystemsDataStorageOutputReference <a name="DataOciMysqlMysqlDbSystemsDbSystemsDataStorageOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciMysqlMysqlDbSystemsDbSystemsDataStorageOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageOutputReference.property.allocatedStorageSizeInGbs">AllocatedStorageSizeInGbs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageOutputReference.property.dataStorageSizeInGb">DataStorageSizeInGb</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageOutputReference.property.dataStorageSizeLimitInGbs">DataStorageSizeLimitInGbs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageOutputReference.property.isAutoExpandStorageEnabled">IsAutoExpandStorageEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageOutputReference.property.maxStorageSizeInGbs">MaxStorageSizeInGbs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorage">DataOciMysqlMysqlDbSystemsDbSystemsDataStorage</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AllocatedStorageSizeInGbs`<sup>Required</sup> <a name="AllocatedStorageSizeInGbs" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageOutputReference.property.allocatedStorageSizeInGbs"></a>

```csharp
public double AllocatedStorageSizeInGbs { get; }
```

- *Type:* double

---

##### `DataStorageSizeInGb`<sup>Required</sup> <a name="DataStorageSizeInGb" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageOutputReference.property.dataStorageSizeInGb"></a>

```csharp
public double DataStorageSizeInGb { get; }
```

- *Type:* double

---

##### `DataStorageSizeLimitInGbs`<sup>Required</sup> <a name="DataStorageSizeLimitInGbs" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageOutputReference.property.dataStorageSizeLimitInGbs"></a>

```csharp
public double DataStorageSizeLimitInGbs { get; }
```

- *Type:* double

---

##### `IsAutoExpandStorageEnabled`<sup>Required</sup> <a name="IsAutoExpandStorageEnabled" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageOutputReference.property.isAutoExpandStorageEnabled"></a>

```csharp
public IResolvable IsAutoExpandStorageEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `MaxStorageSizeInGbs`<sup>Required</sup> <a name="MaxStorageSizeInGbs" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageOutputReference.property.maxStorageSizeInGbs"></a>

```csharp
public double MaxStorageSizeInGbs { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageOutputReference.property.internalValue"></a>

```csharp
public DataOciMysqlMysqlDbSystemsDbSystemsDataStorage InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorage">DataOciMysqlMysqlDbSystemsDbSystemsDataStorage</a>

---


### DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyList <a name="DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyList" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyList.get"></a>

```csharp
private DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyOutputReference <a name="DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyOutputReference.property.automaticBackupRetention">AutomaticBackupRetention</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyOutputReference.property.finalBackup">FinalBackup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyOutputReference.property.isDeleteProtected">IsDeleteProtected</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicy">DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AutomaticBackupRetention`<sup>Required</sup> <a name="AutomaticBackupRetention" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyOutputReference.property.automaticBackupRetention"></a>

```csharp
public string AutomaticBackupRetention { get; }
```

- *Type:* string

---

##### `FinalBackup`<sup>Required</sup> <a name="FinalBackup" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyOutputReference.property.finalBackup"></a>

```csharp
public string FinalBackup { get; }
```

- *Type:* string

---

##### `IsDeleteProtected`<sup>Required</sup> <a name="IsDeleteProtected" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyOutputReference.property.isDeleteProtected"></a>

```csharp
public IResolvable IsDeleteProtected { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyOutputReference.property.internalValue"></a>

```csharp
public DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicy InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicy">DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicy</a>

---


### DataOciMysqlMysqlDbSystemsDbSystemsEndpointsList <a name="DataOciMysqlMysqlDbSystemsDbSystemsEndpointsList" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciMysqlMysqlDbSystemsDbSystemsEndpointsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsList.get"></a>

```csharp
private DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference <a name="DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference.property.hostname">Hostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference.property.ipAddress">IpAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference.property.modes">Modes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference.property.portX">PortX</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference.property.resourceId">ResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference.property.resourceType">ResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference.property.statusDetails">StatusDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpoints">DataOciMysqlMysqlDbSystemsDbSystemsEndpoints</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Hostname`<sup>Required</sup> <a name="Hostname" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference.property.hostname"></a>

```csharp
public string Hostname { get; }
```

- *Type:* string

---

##### `IpAddress`<sup>Required</sup> <a name="IpAddress" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference.property.ipAddress"></a>

```csharp
public string IpAddress { get; }
```

- *Type:* string

---

##### `Modes`<sup>Required</sup> <a name="Modes" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference.property.modes"></a>

```csharp
public string[] Modes { get; }
```

- *Type:* string[]

---

##### `Port`<sup>Required</sup> <a name="Port" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `PortX`<sup>Required</sup> <a name="PortX" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference.property.portX"></a>

```csharp
public double PortX { get; }
```

- *Type:* double

---

##### `ResourceId`<sup>Required</sup> <a name="ResourceId" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference.property.resourceId"></a>

```csharp
public string ResourceId { get; }
```

- *Type:* string

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference.property.resourceType"></a>

```csharp
public string ResourceType { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `StatusDetails`<sup>Required</sup> <a name="StatusDetails" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference.property.statusDetails"></a>

```csharp
public string StatusDetails { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference.property.internalValue"></a>

```csharp
public DataOciMysqlMysqlDbSystemsDbSystemsEndpoints InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpoints">DataOciMysqlMysqlDbSystemsDbSystemsEndpoints</a>

---


### DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterList <a name="DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterList" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterList.get"></a>

```csharp
private DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterOutputReference <a name="DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterOutputReference.property.clusterSize">ClusterSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterOutputReference.property.isLakehouseEnabled">IsLakehouseEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterOutputReference.property.shapeName">ShapeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterOutputReference.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterOutputReference.property.timeUpdated">TimeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveCluster">DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveCluster</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ClusterSize`<sup>Required</sup> <a name="ClusterSize" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterOutputReference.property.clusterSize"></a>

```csharp
public double ClusterSize { get; }
```

- *Type:* double

---

##### `IsLakehouseEnabled`<sup>Required</sup> <a name="IsLakehouseEnabled" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterOutputReference.property.isLakehouseEnabled"></a>

```csharp
public IResolvable IsLakehouseEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `ShapeName`<sup>Required</sup> <a name="ShapeName" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterOutputReference.property.shapeName"></a>

```csharp
public string ShapeName { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterOutputReference.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterOutputReference.property.timeUpdated"></a>

```csharp
public string TimeUpdated { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterOutputReference.property.internalValue"></a>

```csharp
public DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveCluster InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveCluster">DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveCluster</a>

---


### DataOciMysqlMysqlDbSystemsDbSystemsList <a name="DataOciMysqlMysqlDbSystemsDbSystemsList" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciMysqlMysqlDbSystemsDbSystemsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsList.get"></a>

```csharp
private DataOciMysqlMysqlDbSystemsDbSystemsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceList <a name="DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceList" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceList.get"></a>

```csharp
private DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceOutputReference <a name="DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceOutputReference.property.windowStartTime">WindowStartTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenance">DataOciMysqlMysqlDbSystemsDbSystemsMaintenance</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `WindowStartTime`<sup>Required</sup> <a name="WindowStartTime" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceOutputReference.property.windowStartTime"></a>

```csharp
public string WindowStartTime { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceOutputReference.property.internalValue"></a>

```csharp
public DataOciMysqlMysqlDbSystemsDbSystemsMaintenance InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenance">DataOciMysqlMysqlDbSystemsDbSystemsMaintenance</a>

---


### DataOciMysqlMysqlDbSystemsDbSystemsOutputReference <a name="DataOciMysqlMysqlDbSystemsDbSystemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciMysqlMysqlDbSystemsDbSystemsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.adminPassword">AdminPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.adminUsername">AdminUsername</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.availabilityDomain">AvailabilityDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.backupPolicy">BackupPolicy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyList">DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.channels">Channels</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsList">DataOciMysqlMysqlDbSystemsDbSystemsChannelsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.configurationId">ConfigurationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.crashRecovery">CrashRecovery</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.currentPlacement">CurrentPlacement</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementList">DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.customerContacts">CustomerContacts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsList">DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.databaseManagement">DatabaseManagement</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.dataStorage">DataStorage</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageList">DataOciMysqlMysqlDbSystemsDbSystemsDataStorageList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.dataStorageSizeInGb">DataStorageSizeInGb</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.definedTags">DefinedTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.deletionPolicy">DeletionPolicy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyList">DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.endpoints">Endpoints</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsList">DataOciMysqlMysqlDbSystemsDbSystemsEndpointsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.faultDomain">FaultDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.freeformTags">FreeformTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.heatWaveCluster">HeatWaveCluster</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterList">DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.hostnameLabel">HostnameLabel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.ipAddress">IpAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.isHeatWaveClusterAttached">IsHeatWaveClusterAttached</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.isHighlyAvailable">IsHighlyAvailable</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.lifecycleDetails">LifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.maintenance">Maintenance</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceList">DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.mysqlVersion">MysqlVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.pointInTimeRecoveryDetails">PointInTimeRecoveryDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsList">DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.portX">PortX</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.secureConnections">SecureConnections</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsList">DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.shapeName">ShapeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.shutdownType">ShutdownType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.source">Source</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceList">DataOciMysqlMysqlDbSystemsDbSystemsSourceList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.subnetId">SubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.timeUpdated">TimeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystems">DataOciMysqlMysqlDbSystemsDbSystems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AdminPassword`<sup>Required</sup> <a name="AdminPassword" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.adminPassword"></a>

```csharp
public string AdminPassword { get; }
```

- *Type:* string

---

##### `AdminUsername`<sup>Required</sup> <a name="AdminUsername" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.adminUsername"></a>

```csharp
public string AdminUsername { get; }
```

- *Type:* string

---

##### `AvailabilityDomain`<sup>Required</sup> <a name="AvailabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.availabilityDomain"></a>

```csharp
public string AvailabilityDomain { get; }
```

- *Type:* string

---

##### `BackupPolicy`<sup>Required</sup> <a name="BackupPolicy" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.backupPolicy"></a>

```csharp
public DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyList BackupPolicy { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyList">DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyList</a>

---

##### `Channels`<sup>Required</sup> <a name="Channels" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.channels"></a>

```csharp
public DataOciMysqlMysqlDbSystemsDbSystemsChannelsList Channels { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsList">DataOciMysqlMysqlDbSystemsDbSystemsChannelsList</a>

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `ConfigurationId`<sup>Required</sup> <a name="ConfigurationId" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.configurationId"></a>

```csharp
public string ConfigurationId { get; }
```

- *Type:* string

---

##### `CrashRecovery`<sup>Required</sup> <a name="CrashRecovery" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.crashRecovery"></a>

```csharp
public string CrashRecovery { get; }
```

- *Type:* string

---

##### `CurrentPlacement`<sup>Required</sup> <a name="CurrentPlacement" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.currentPlacement"></a>

```csharp
public DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementList CurrentPlacement { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementList">DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementList</a>

---

##### `CustomerContacts`<sup>Required</sup> <a name="CustomerContacts" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.customerContacts"></a>

```csharp
public DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsList CustomerContacts { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsList">DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsList</a>

---

##### `DatabaseManagement`<sup>Required</sup> <a name="DatabaseManagement" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.databaseManagement"></a>

```csharp
public string DatabaseManagement { get; }
```

- *Type:* string

---

##### `DataStorage`<sup>Required</sup> <a name="DataStorage" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.dataStorage"></a>

```csharp
public DataOciMysqlMysqlDbSystemsDbSystemsDataStorageList DataStorage { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageList">DataOciMysqlMysqlDbSystemsDbSystemsDataStorageList</a>

---

##### `DataStorageSizeInGb`<sup>Required</sup> <a name="DataStorageSizeInGb" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.dataStorageSizeInGb"></a>

```csharp
public double DataStorageSizeInGb { get; }
```

- *Type:* double

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.definedTags"></a>

```csharp
public StringMap DefinedTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.deletionPolicy"></a>

```csharp
public DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyList DeletionPolicy { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyList">DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyList</a>

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Endpoints`<sup>Required</sup> <a name="Endpoints" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.endpoints"></a>

```csharp
public DataOciMysqlMysqlDbSystemsDbSystemsEndpointsList Endpoints { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsList">DataOciMysqlMysqlDbSystemsDbSystemsEndpointsList</a>

---

##### `FaultDomain`<sup>Required</sup> <a name="FaultDomain" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.faultDomain"></a>

```csharp
public string FaultDomain { get; }
```

- *Type:* string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.freeformTags"></a>

```csharp
public StringMap FreeformTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `HeatWaveCluster`<sup>Required</sup> <a name="HeatWaveCluster" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.heatWaveCluster"></a>

```csharp
public DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterList HeatWaveCluster { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterList">DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterList</a>

---

##### `HostnameLabel`<sup>Required</sup> <a name="HostnameLabel" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.hostnameLabel"></a>

```csharp
public string HostnameLabel { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IpAddress`<sup>Required</sup> <a name="IpAddress" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.ipAddress"></a>

```csharp
public string IpAddress { get; }
```

- *Type:* string

---

##### `IsHeatWaveClusterAttached`<sup>Required</sup> <a name="IsHeatWaveClusterAttached" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.isHeatWaveClusterAttached"></a>

```csharp
public IResolvable IsHeatWaveClusterAttached { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IsHighlyAvailable`<sup>Required</sup> <a name="IsHighlyAvailable" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.isHighlyAvailable"></a>

```csharp
public IResolvable IsHighlyAvailable { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.lifecycleDetails"></a>

```csharp
public string LifecycleDetails { get; }
```

- *Type:* string

---

##### `Maintenance`<sup>Required</sup> <a name="Maintenance" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.maintenance"></a>

```csharp
public DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceList Maintenance { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceList">DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceList</a>

---

##### `MysqlVersion`<sup>Required</sup> <a name="MysqlVersion" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.mysqlVersion"></a>

```csharp
public string MysqlVersion { get; }
```

- *Type:* string

---

##### `PointInTimeRecoveryDetails`<sup>Required</sup> <a name="PointInTimeRecoveryDetails" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.pointInTimeRecoveryDetails"></a>

```csharp
public DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsList PointInTimeRecoveryDetails { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsList">DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsList</a>

---

##### `Port`<sup>Required</sup> <a name="Port" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `PortX`<sup>Required</sup> <a name="PortX" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.portX"></a>

```csharp
public double PortX { get; }
```

- *Type:* double

---

##### `SecureConnections`<sup>Required</sup> <a name="SecureConnections" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.secureConnections"></a>

```csharp
public DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsList SecureConnections { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsList">DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsList</a>

---

##### `ShapeName`<sup>Required</sup> <a name="ShapeName" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.shapeName"></a>

```csharp
public string ShapeName { get; }
```

- *Type:* string

---

##### `ShutdownType`<sup>Required</sup> <a name="ShutdownType" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.shutdownType"></a>

```csharp
public string ShutdownType { get; }
```

- *Type:* string

---

##### `Source`<sup>Required</sup> <a name="Source" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.source"></a>

```csharp
public DataOciMysqlMysqlDbSystemsDbSystemsSourceList Source { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceList">DataOciMysqlMysqlDbSystemsDbSystemsSourceList</a>

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.subnetId"></a>

```csharp
public string SubnetId { get; }
```

- *Type:* string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.timeUpdated"></a>

```csharp
public string TimeUpdated { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.internalValue"></a>

```csharp
public DataOciMysqlMysqlDbSystemsDbSystems InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystems">DataOciMysqlMysqlDbSystemsDbSystems</a>

---


### DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsList <a name="DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsList" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsList.get"></a>

```csharp
private DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsOutputReference <a name="DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsOutputReference.property.timeEarliestRecoveryPoint">TimeEarliestRecoveryPoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsOutputReference.property.timeLatestRecoveryPoint">TimeLatestRecoveryPoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetails">DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TimeEarliestRecoveryPoint`<sup>Required</sup> <a name="TimeEarliestRecoveryPoint" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsOutputReference.property.timeEarliestRecoveryPoint"></a>

```csharp
public string TimeEarliestRecoveryPoint { get; }
```

- *Type:* string

---

##### `TimeLatestRecoveryPoint`<sup>Required</sup> <a name="TimeLatestRecoveryPoint" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsOutputReference.property.timeLatestRecoveryPoint"></a>

```csharp
public string TimeLatestRecoveryPoint { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsOutputReference.property.internalValue"></a>

```csharp
public DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetails InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetails">DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetails</a>

---


### DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsList <a name="DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsList" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsList.get"></a>

```csharp
private DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsOutputReference <a name="DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsOutputReference.property.certificateGenerationType">CertificateGenerationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsOutputReference.property.certificateId">CertificateId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnections">DataOciMysqlMysqlDbSystemsDbSystemsSecureConnections</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CertificateGenerationType`<sup>Required</sup> <a name="CertificateGenerationType" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsOutputReference.property.certificateGenerationType"></a>

```csharp
public string CertificateGenerationType { get; }
```

- *Type:* string

---

##### `CertificateId`<sup>Required</sup> <a name="CertificateId" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsOutputReference.property.certificateId"></a>

```csharp
public string CertificateId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsOutputReference.property.internalValue"></a>

```csharp
public DataOciMysqlMysqlDbSystemsDbSystemsSecureConnections InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnections">DataOciMysqlMysqlDbSystemsDbSystemsSecureConnections</a>

---


### DataOciMysqlMysqlDbSystemsDbSystemsSourceList <a name="DataOciMysqlMysqlDbSystemsDbSystemsSourceList" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciMysqlMysqlDbSystemsDbSystemsSourceList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceList.get"></a>

```csharp
private DataOciMysqlMysqlDbSystemsDbSystemsSourceOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciMysqlMysqlDbSystemsDbSystemsSourceOutputReference <a name="DataOciMysqlMysqlDbSystemsDbSystemsSourceOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciMysqlMysqlDbSystemsDbSystemsSourceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceOutputReference.property.backupId">BackupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceOutputReference.property.dbSystemId">DbSystemId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceOutputReference.property.recoveryPoint">RecoveryPoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceOutputReference.property.sourceType">SourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceOutputReference.property.sourceUrl">SourceUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSource">DataOciMysqlMysqlDbSystemsDbSystemsSource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BackupId`<sup>Required</sup> <a name="BackupId" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceOutputReference.property.backupId"></a>

```csharp
public string BackupId { get; }
```

- *Type:* string

---

##### `DbSystemId`<sup>Required</sup> <a name="DbSystemId" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceOutputReference.property.dbSystemId"></a>

```csharp
public string DbSystemId { get; }
```

- *Type:* string

---

##### `RecoveryPoint`<sup>Required</sup> <a name="RecoveryPoint" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceOutputReference.property.recoveryPoint"></a>

```csharp
public string RecoveryPoint { get; }
```

- *Type:* string

---

##### `SourceType`<sup>Required</sup> <a name="SourceType" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceOutputReference.property.sourceType"></a>

```csharp
public string SourceType { get; }
```

- *Type:* string

---

##### `SourceUrl`<sup>Required</sup> <a name="SourceUrl" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceOutputReference.property.sourceUrl"></a>

```csharp
public string SourceUrl { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceOutputReference.property.internalValue"></a>

```csharp
public DataOciMysqlMysqlDbSystemsDbSystemsSource InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSource">DataOciMysqlMysqlDbSystemsDbSystemsSource</a>

---


### DataOciMysqlMysqlDbSystemsFilterList <a name="DataOciMysqlMysqlDbSystemsFilterList" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciMysqlMysqlDbSystemsFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterList.get"></a>

```csharp
private DataOciMysqlMysqlDbSystemsFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciMysqlMysqlDbSystemsFilterOutputReference <a name="DataOciMysqlMysqlDbSystemsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciMysqlMysqlDbSystemsFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterOutputReference.resetRegex"></a>

```csharp
private void ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterOutputReference.property.regex">Regex</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterOutputReference.property.regexInput"></a>

```csharp
public object RegexInput { get; }
```

- *Type:* object

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterOutputReference.property.regex"></a>

```csharp
public object Regex { get; }
```

- *Type:* object

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



