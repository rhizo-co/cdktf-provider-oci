# `dataOciDatabaseManagementManagedMySqlDatabaseSqlData` Submodule <a name="`dataOciDatabaseManagementManagedMySqlDatabaseSqlData` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseManagementManagedMySqlDatabaseSqlData <a name="DataOciDatabaseManagementManagedMySqlDatabaseSqlData" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_my_sql_database_sql_data oci_database_management_managed_my_sql_database_sql_data}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseManagementManagedMySqlDatabaseSqlData(Construct Scope, string Id, DataOciDatabaseManagementManagedMySqlDatabaseSqlDataConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataConfig">DataOciDatabaseManagementManagedMySqlDatabaseSqlDataConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataConfig">DataOciDatabaseManagementManagedMySqlDatabaseSqlDataConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.resetFilterColumn">ResetFilterColumn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.putFilter"></a>

```csharp
private void PutFilter(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.putFilter.parameter.value"></a>

- *Type:* object

---

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetFilterColumn` <a name="ResetFilterColumn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.resetFilterColumn"></a>

```csharp
private void ResetFilterColumn()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDatabaseManagementManagedMySqlDatabaseSqlData resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDatabaseManagementManagedMySqlDatabaseSqlData.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDatabaseManagementManagedMySqlDatabaseSqlData.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDatabaseManagementManagedMySqlDatabaseSqlData.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDatabaseManagementManagedMySqlDatabaseSqlData.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciDatabaseManagementManagedMySqlDatabaseSqlData resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciDatabaseManagementManagedMySqlDatabaseSqlData to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciDatabaseManagementManagedMySqlDatabaseSqlData that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_my_sql_database_sql_data#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseManagementManagedMySqlDatabaseSqlData to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterList">DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.property.mySqlDataCollection">MySqlDataCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionList">DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.property.endTimeInput">EndTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.property.filterColumnInput">FilterColumnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.property.filterInput">FilterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.property.managedMySqlDatabaseIdInput">ManagedMySqlDatabaseIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.property.startTimeInput">StartTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.property.endTime">EndTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.property.filterColumn">FilterColumn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.property.managedMySqlDatabaseId">ManagedMySqlDatabaseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.property.startTime">StartTime</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.property.filter"></a>

```csharp
public DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterList Filter { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterList">DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterList</a>

---

##### `MySqlDataCollection`<sup>Required</sup> <a name="MySqlDataCollection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.property.mySqlDataCollection"></a>

```csharp
public DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionList MySqlDataCollection { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionList">DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionList</a>

---

##### `EndTimeInput`<sup>Optional</sup> <a name="EndTimeInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.property.endTimeInput"></a>

```csharp
public string EndTimeInput { get; }
```

- *Type:* string

---

##### `FilterColumnInput`<sup>Optional</sup> <a name="FilterColumnInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.property.filterColumnInput"></a>

```csharp
public string FilterColumnInput { get; }
```

- *Type:* string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.property.filterInput"></a>

```csharp
public object FilterInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ManagedMySqlDatabaseIdInput`<sup>Optional</sup> <a name="ManagedMySqlDatabaseIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.property.managedMySqlDatabaseIdInput"></a>

```csharp
public string ManagedMySqlDatabaseIdInput { get; }
```

- *Type:* string

---

##### `StartTimeInput`<sup>Optional</sup> <a name="StartTimeInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.property.startTimeInput"></a>

```csharp
public string StartTimeInput { get; }
```

- *Type:* string

---

##### `EndTime`<sup>Required</sup> <a name="EndTime" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.property.endTime"></a>

```csharp
public string EndTime { get; }
```

- *Type:* string

---

##### `FilterColumn`<sup>Required</sup> <a name="FilterColumn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.property.filterColumn"></a>

```csharp
public string FilterColumn { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ManagedMySqlDatabaseId`<sup>Required</sup> <a name="ManagedMySqlDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.property.managedMySqlDatabaseId"></a>

```csharp
public string ManagedMySqlDatabaseId { get; }
```

- *Type:* string

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.property.startTime"></a>

```csharp
public string StartTime { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseManagementManagedMySqlDatabaseSqlDataConfig <a name="DataOciDatabaseManagementManagedMySqlDatabaseSqlDataConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseManagementManagedMySqlDatabaseSqlDataConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string EndTime,
    string ManagedMySqlDatabaseId,
    string StartTime,
    object Filter = null,
    string FilterColumn = null,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataConfig.property.endTime">EndTime</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_my_sql_database_sql_data#end_time DataOciDatabaseManagementManagedMySqlDatabaseSqlData#end_time}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataConfig.property.managedMySqlDatabaseId">ManagedMySqlDatabaseId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_my_sql_database_sql_data#managed_my_sql_database_id DataOciDatabaseManagementManagedMySqlDatabaseSqlData#managed_my_sql_database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataConfig.property.startTime">StartTime</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_my_sql_database_sql_data#start_time DataOciDatabaseManagementManagedMySqlDatabaseSqlData#start_time}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataConfig.property.filter">Filter</a></code> | <code>object</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataConfig.property.filterColumn">FilterColumn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_my_sql_database_sql_data#filter_column DataOciDatabaseManagementManagedMySqlDatabaseSqlData#filter_column}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_my_sql_database_sql_data#id DataOciDatabaseManagementManagedMySqlDatabaseSqlData#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `EndTime`<sup>Required</sup> <a name="EndTime" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataConfig.property.endTime"></a>

```csharp
public string EndTime { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_my_sql_database_sql_data#end_time DataOciDatabaseManagementManagedMySqlDatabaseSqlData#end_time}.

---

##### `ManagedMySqlDatabaseId`<sup>Required</sup> <a name="ManagedMySqlDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataConfig.property.managedMySqlDatabaseId"></a>

```csharp
public string ManagedMySqlDatabaseId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_my_sql_database_sql_data#managed_my_sql_database_id DataOciDatabaseManagementManagedMySqlDatabaseSqlData#managed_my_sql_database_id}.

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataConfig.property.startTime"></a>

```csharp
public string StartTime { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_my_sql_database_sql_data#start_time DataOciDatabaseManagementManagedMySqlDatabaseSqlData#start_time}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataConfig.property.filter"></a>

```csharp
public object Filter { get; set; }
```

- *Type:* object

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_my_sql_database_sql_data#filter DataOciDatabaseManagementManagedMySqlDatabaseSqlData#filter}

---

##### `FilterColumn`<sup>Optional</sup> <a name="FilterColumn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataConfig.property.filterColumn"></a>

```csharp
public string FilterColumn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_my_sql_database_sql_data#filter_column DataOciDatabaseManagementManagedMySqlDatabaseSqlData#filter_column}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_my_sql_database_sql_data#id DataOciDatabaseManagementManagedMySqlDatabaseSqlData#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilter <a name="DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilter {
    string Name,
    string[] Values,
    object Regex = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilter.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_my_sql_database_sql_data#name DataOciDatabaseManagementManagedMySqlDatabaseSqlData#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilter.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_my_sql_database_sql_data#values DataOciDatabaseManagementManagedMySqlDatabaseSqlData#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilter.property.regex">Regex</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_my_sql_database_sql_data#regex DataOciDatabaseManagementManagedMySqlDatabaseSqlData#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilter.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_my_sql_database_sql_data#name DataOciDatabaseManagementManagedMySqlDatabaseSqlData#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilter.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_my_sql_database_sql_data#values DataOciDatabaseManagementManagedMySqlDatabaseSqlData#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilter.property.regex"></a>

```csharp
public object Regex { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_my_sql_database_sql_data#regex DataOciDatabaseManagementManagedMySqlDatabaseSqlData#regex}.

---

### DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollection <a name="DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollection.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollection {

};
```


### DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItems <a name="DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItems.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItems {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterList <a name="DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterList.get"></a>

```csharp
private DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference <a name="DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.resetRegex"></a>

```csharp
private void ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.property.regex">Regex</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.property.regexInput"></a>

```csharp
public object RegexInput { get; }
```

- *Type:* object

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.property.regex"></a>

```csharp
public object Regex { get; }
```

- *Type:* object

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsList <a name="DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsList.get"></a>

```csharp
private DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference <a name="DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.avgTimerWait">AvgTimerWait</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.countStar">CountStar</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.digest">Digest</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.digestText">DigestText</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.firstSeen">FirstSeen</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.heatWaveOffloaded">HeatWaveOffloaded</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.heatWaveOutOfMemory">HeatWaveOutOfMemory</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.lastSeen">LastSeen</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.maxTimerWait">MaxTimerWait</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.minTimerWait">MinTimerWait</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.quantile95">Quantile95</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.quantile99">Quantile99</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.quantile999">Quantile999</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.schemaName">SchemaName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.sumCreatedTempDiskTables">SumCreatedTempDiskTables</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.sumCreatedTempTables">SumCreatedTempTables</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.sumErrors">SumErrors</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.sumLockTime">SumLockTime</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.sumNoGoodIndexUsed">SumNoGoodIndexUsed</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.sumNoIndexUsed">SumNoIndexUsed</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.sumRowsAffected">SumRowsAffected</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.sumRowsExamined">SumRowsExamined</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.sumRowsSent">SumRowsSent</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.sumSelectFullJoin">SumSelectFullJoin</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.sumSelectFullRangeJoin">SumSelectFullRangeJoin</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.sumSelectRange">SumSelectRange</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.sumSelectRangeCheck">SumSelectRangeCheck</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.sumSelectScan">SumSelectScan</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.sumSortMergePasses">SumSortMergePasses</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.sumSortRange">SumSortRange</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.sumSortRows">SumSortRows</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.sumSortScan">SumSortScan</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.sumTimerWait">SumTimerWait</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.sumWarnings">SumWarnings</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItems">DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AvgTimerWait`<sup>Required</sup> <a name="AvgTimerWait" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.avgTimerWait"></a>

```csharp
public double AvgTimerWait { get; }
```

- *Type:* double

---

##### `CountStar`<sup>Required</sup> <a name="CountStar" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.countStar"></a>

```csharp
public double CountStar { get; }
```

- *Type:* double

---

##### `Digest`<sup>Required</sup> <a name="Digest" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.digest"></a>

```csharp
public string Digest { get; }
```

- *Type:* string

---

##### `DigestText`<sup>Required</sup> <a name="DigestText" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.digestText"></a>

```csharp
public string DigestText { get; }
```

- *Type:* string

---

##### `FirstSeen`<sup>Required</sup> <a name="FirstSeen" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.firstSeen"></a>

```csharp
public string FirstSeen { get; }
```

- *Type:* string

---

##### `HeatWaveOffloaded`<sup>Required</sup> <a name="HeatWaveOffloaded" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.heatWaveOffloaded"></a>

```csharp
public double HeatWaveOffloaded { get; }
```

- *Type:* double

---

##### `HeatWaveOutOfMemory`<sup>Required</sup> <a name="HeatWaveOutOfMemory" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.heatWaveOutOfMemory"></a>

```csharp
public double HeatWaveOutOfMemory { get; }
```

- *Type:* double

---

##### `LastSeen`<sup>Required</sup> <a name="LastSeen" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.lastSeen"></a>

```csharp
public string LastSeen { get; }
```

- *Type:* string

---

##### `MaxTimerWait`<sup>Required</sup> <a name="MaxTimerWait" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.maxTimerWait"></a>

```csharp
public double MaxTimerWait { get; }
```

- *Type:* double

---

##### `MinTimerWait`<sup>Required</sup> <a name="MinTimerWait" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.minTimerWait"></a>

```csharp
public double MinTimerWait { get; }
```

- *Type:* double

---

##### `Quantile95`<sup>Required</sup> <a name="Quantile95" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.quantile95"></a>

```csharp
public double Quantile95 { get; }
```

- *Type:* double

---

##### `Quantile99`<sup>Required</sup> <a name="Quantile99" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.quantile99"></a>

```csharp
public double Quantile99 { get; }
```

- *Type:* double

---

##### `Quantile999`<sup>Required</sup> <a name="Quantile999" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.quantile999"></a>

```csharp
public double Quantile999 { get; }
```

- *Type:* double

---

##### `SchemaName`<sup>Required</sup> <a name="SchemaName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.schemaName"></a>

```csharp
public string SchemaName { get; }
```

- *Type:* string

---

##### `SumCreatedTempDiskTables`<sup>Required</sup> <a name="SumCreatedTempDiskTables" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.sumCreatedTempDiskTables"></a>

```csharp
public double SumCreatedTempDiskTables { get; }
```

- *Type:* double

---

##### `SumCreatedTempTables`<sup>Required</sup> <a name="SumCreatedTempTables" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.sumCreatedTempTables"></a>

```csharp
public double SumCreatedTempTables { get; }
```

- *Type:* double

---

##### `SumErrors`<sup>Required</sup> <a name="SumErrors" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.sumErrors"></a>

```csharp
public double SumErrors { get; }
```

- *Type:* double

---

##### `SumLockTime`<sup>Required</sup> <a name="SumLockTime" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.sumLockTime"></a>

```csharp
public double SumLockTime { get; }
```

- *Type:* double

---

##### `SumNoGoodIndexUsed`<sup>Required</sup> <a name="SumNoGoodIndexUsed" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.sumNoGoodIndexUsed"></a>

```csharp
public double SumNoGoodIndexUsed { get; }
```

- *Type:* double

---

##### `SumNoIndexUsed`<sup>Required</sup> <a name="SumNoIndexUsed" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.sumNoIndexUsed"></a>

```csharp
public double SumNoIndexUsed { get; }
```

- *Type:* double

---

##### `SumRowsAffected`<sup>Required</sup> <a name="SumRowsAffected" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.sumRowsAffected"></a>

```csharp
public double SumRowsAffected { get; }
```

- *Type:* double

---

##### `SumRowsExamined`<sup>Required</sup> <a name="SumRowsExamined" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.sumRowsExamined"></a>

```csharp
public double SumRowsExamined { get; }
```

- *Type:* double

---

##### `SumRowsSent`<sup>Required</sup> <a name="SumRowsSent" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.sumRowsSent"></a>

```csharp
public double SumRowsSent { get; }
```

- *Type:* double

---

##### `SumSelectFullJoin`<sup>Required</sup> <a name="SumSelectFullJoin" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.sumSelectFullJoin"></a>

```csharp
public double SumSelectFullJoin { get; }
```

- *Type:* double

---

##### `SumSelectFullRangeJoin`<sup>Required</sup> <a name="SumSelectFullRangeJoin" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.sumSelectFullRangeJoin"></a>

```csharp
public double SumSelectFullRangeJoin { get; }
```

- *Type:* double

---

##### `SumSelectRange`<sup>Required</sup> <a name="SumSelectRange" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.sumSelectRange"></a>

```csharp
public double SumSelectRange { get; }
```

- *Type:* double

---

##### `SumSelectRangeCheck`<sup>Required</sup> <a name="SumSelectRangeCheck" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.sumSelectRangeCheck"></a>

```csharp
public double SumSelectRangeCheck { get; }
```

- *Type:* double

---

##### `SumSelectScan`<sup>Required</sup> <a name="SumSelectScan" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.sumSelectScan"></a>

```csharp
public double SumSelectScan { get; }
```

- *Type:* double

---

##### `SumSortMergePasses`<sup>Required</sup> <a name="SumSortMergePasses" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.sumSortMergePasses"></a>

```csharp
public double SumSortMergePasses { get; }
```

- *Type:* double

---

##### `SumSortRange`<sup>Required</sup> <a name="SumSortRange" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.sumSortRange"></a>

```csharp
public double SumSortRange { get; }
```

- *Type:* double

---

##### `SumSortRows`<sup>Required</sup> <a name="SumSortRows" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.sumSortRows"></a>

```csharp
public double SumSortRows { get; }
```

- *Type:* double

---

##### `SumSortScan`<sup>Required</sup> <a name="SumSortScan" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.sumSortScan"></a>

```csharp
public double SumSortScan { get; }
```

- *Type:* double

---

##### `SumTimerWait`<sup>Required</sup> <a name="SumTimerWait" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.sumTimerWait"></a>

```csharp
public double SumTimerWait { get; }
```

- *Type:* double

---

##### `SumWarnings`<sup>Required</sup> <a name="SumWarnings" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.sumWarnings"></a>

```csharp
public double SumWarnings { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.internalValue"></a>

```csharp
public DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItems InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItems">DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItems</a>

---


### DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionList <a name="DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionList.get"></a>

```csharp
private DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference <a name="DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsList">DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollection">DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference.property.items"></a>

```csharp
public DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsList Items { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsList">DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference.property.internalValue"></a>

```csharp
public DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollection InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollection">DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollection</a>

---



