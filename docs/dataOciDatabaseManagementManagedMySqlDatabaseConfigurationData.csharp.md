# `dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData` Submodule <a name="`dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData <a name="DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_my_sql_database_configuration_data oci_database_management_managed_my_sql_database_configuration_data}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData(Construct Scope, string Id, DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataConfig">DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataConfig">DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.putFilter"></a>

```csharp
private void PutFilter(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.putFilter.parameter.value"></a>

- *Type:* object

---

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_my_sql_database_configuration_data#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterList">DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.property.mySqlConfigurationDataCollection">MySqlConfigurationDataCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionList">DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.property.filterInput">FilterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.property.managedMySqlDatabaseIdInput">ManagedMySqlDatabaseIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.property.managedMySqlDatabaseId">ManagedMySqlDatabaseId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.property.filter"></a>

```csharp
public DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterList Filter { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterList">DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterList</a>

---

##### `MySqlConfigurationDataCollection`<sup>Required</sup> <a name="MySqlConfigurationDataCollection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.property.mySqlConfigurationDataCollection"></a>

```csharp
public DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionList MySqlConfigurationDataCollection { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionList">DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionList</a>

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.property.filterInput"></a>

```csharp
public object FilterInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ManagedMySqlDatabaseIdInput`<sup>Optional</sup> <a name="ManagedMySqlDatabaseIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.property.managedMySqlDatabaseIdInput"></a>

```csharp
public string ManagedMySqlDatabaseIdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ManagedMySqlDatabaseId`<sup>Required</sup> <a name="ManagedMySqlDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.property.managedMySqlDatabaseId"></a>

```csharp
public string ManagedMySqlDatabaseId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataConfig <a name="DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ManagedMySqlDatabaseId,
    object Filter = null,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataConfig.property.managedMySqlDatabaseId">ManagedMySqlDatabaseId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_my_sql_database_configuration_data#managed_my_sql_database_id DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData#managed_my_sql_database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataConfig.property.filter">Filter</a></code> | <code>object</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_my_sql_database_configuration_data#id DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ManagedMySqlDatabaseId`<sup>Required</sup> <a name="ManagedMySqlDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataConfig.property.managedMySqlDatabaseId"></a>

```csharp
public string ManagedMySqlDatabaseId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_my_sql_database_configuration_data#managed_my_sql_database_id DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData#managed_my_sql_database_id}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataConfig.property.filter"></a>

```csharp
public object Filter { get; set; }
```

- *Type:* object

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_my_sql_database_configuration_data#filter DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_my_sql_database_configuration_data#id DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilter <a name="DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilter {
    string Name,
    string[] Values,
    object Regex = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilter.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_my_sql_database_configuration_data#name DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilter.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_my_sql_database_configuration_data#values DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilter.property.regex">Regex</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_my_sql_database_configuration_data#regex DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilter.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_my_sql_database_configuration_data#name DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilter.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_my_sql_database_configuration_data#values DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilter.property.regex"></a>

```csharp
public object Regex { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_my_sql_database_configuration_data#regex DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData#regex}.

---

### DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollection <a name="DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollection.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollection {

};
```


### DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItems <a name="DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItems.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItems {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterList <a name="DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterList.get"></a>

```csharp
private DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterOutputReference <a name="DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterOutputReference.resetRegex"></a>

```csharp
private void ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterOutputReference.property.regex">Regex</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterOutputReference.property.regexInput"></a>

```csharp
public object RegexInput { get; }
```

- *Type:* object

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterOutputReference.property.regex"></a>

```csharp
public object Regex { get; }
```

- *Type:* object

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsList <a name="DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsList.get"></a>

```csharp
private DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsOutputReference <a name="DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsOutputReference.property.defaultValue">DefaultValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsOutputReference.property.hostSet">HostSet</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsOutputReference.property.isConfigurable">IsConfigurable</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsOutputReference.property.isDynamic">IsDynamic</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsOutputReference.property.isInit">IsInit</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsOutputReference.property.maxValue">MaxValue</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsOutputReference.property.minValue">MinValue</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsOutputReference.property.path">Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsOutputReference.property.possibleValues">PossibleValues</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsOutputReference.property.source">Source</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsOutputReference.property.supportedVersions">SupportedVersions</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsOutputReference.property.timeSet">TimeSet</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsOutputReference.property.userSet">UserSet</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItems">DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DefaultValue`<sup>Required</sup> <a name="DefaultValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsOutputReference.property.defaultValue"></a>

```csharp
public string DefaultValue { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `HostSet`<sup>Required</sup> <a name="HostSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsOutputReference.property.hostSet"></a>

```csharp
public string HostSet { get; }
```

- *Type:* string

---

##### `IsConfigurable`<sup>Required</sup> <a name="IsConfigurable" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsOutputReference.property.isConfigurable"></a>

```csharp
public IResolvable IsConfigurable { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IsDynamic`<sup>Required</sup> <a name="IsDynamic" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsOutputReference.property.isDynamic"></a>

```csharp
public IResolvable IsDynamic { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IsInit`<sup>Required</sup> <a name="IsInit" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsOutputReference.property.isInit"></a>

```csharp
public IResolvable IsInit { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `MaxValue`<sup>Required</sup> <a name="MaxValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsOutputReference.property.maxValue"></a>

```csharp
public double MaxValue { get; }
```

- *Type:* double

---

##### `MinValue`<sup>Required</sup> <a name="MinValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsOutputReference.property.minValue"></a>

```csharp
public double MinValue { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsOutputReference.property.path"></a>

```csharp
public string Path { get; }
```

- *Type:* string

---

##### `PossibleValues`<sup>Required</sup> <a name="PossibleValues" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsOutputReference.property.possibleValues"></a>

```csharp
public string PossibleValues { get; }
```

- *Type:* string

---

##### `Source`<sup>Required</sup> <a name="Source" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsOutputReference.property.source"></a>

```csharp
public string Source { get; }
```

- *Type:* string

---

##### `SupportedVersions`<sup>Required</sup> <a name="SupportedVersions" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsOutputReference.property.supportedVersions"></a>

```csharp
public string SupportedVersions { get; }
```

- *Type:* string

---

##### `TimeSet`<sup>Required</sup> <a name="TimeSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsOutputReference.property.timeSet"></a>

```csharp
public string TimeSet { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `UserSet`<sup>Required</sup> <a name="UserSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsOutputReference.property.userSet"></a>

```csharp
public string UserSet { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsOutputReference.property.internalValue"></a>

```csharp
public DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItems InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItems">DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItems</a>

---


### DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionList <a name="DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionList.get"></a>

```csharp
private DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionOutputReference <a name="DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsList">DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollection">DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionOutputReference.property.items"></a>

```csharp
public DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsList Items { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsList">DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionOutputReference.property.internalValue"></a>

```csharp
public DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollection InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollection">DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollection</a>

---



