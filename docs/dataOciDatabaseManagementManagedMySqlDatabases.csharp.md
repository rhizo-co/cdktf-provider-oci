# `dataOciDatabaseManagementManagedMySqlDatabases` Submodule <a name="`dataOciDatabaseManagementManagedMySqlDatabases` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseManagementManagedMySqlDatabases <a name="DataOciDatabaseManagementManagedMySqlDatabases" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabases"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_my_sql_databases oci_database_management_managed_my_sql_databases}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabases.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseManagementManagedMySqlDatabases(Construct Scope, string Id, DataOciDatabaseManagementManagedMySqlDatabasesConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabases.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabases.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabases.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesConfig">DataOciDatabaseManagementManagedMySqlDatabasesConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabases.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabases.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabases.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesConfig">DataOciDatabaseManagementManagedMySqlDatabasesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabases.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabases.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabases.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabases.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabases.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabases.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabases.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabases.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabases.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabases.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabases.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabases.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabases.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabases.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabases.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabases.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabases.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabases.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabases.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabases.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabases.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabases.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabases.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabases.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabases.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabases.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabases.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabases.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabases.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabases.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabases.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabases.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabases.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabases.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabases.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabases.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabases.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabases.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabases.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabases.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabases.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabases.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabases.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabases.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabases.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabases.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabases.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabases.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabases.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabases.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabases.putFilter"></a>

```csharp
private void PutFilter(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabases.putFilter.parameter.value"></a>

- *Type:* object

---

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabases.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabases.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabases.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabases.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabases.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabases.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDatabaseManagementManagedMySqlDatabases resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabases.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDatabaseManagementManagedMySqlDatabases.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabases.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabases.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDatabaseManagementManagedMySqlDatabases.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabases.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabases.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDatabaseManagementManagedMySqlDatabases.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabases.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabases.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDatabaseManagementManagedMySqlDatabases.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciDatabaseManagementManagedMySqlDatabases resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabases.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabases.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciDatabaseManagementManagedMySqlDatabases to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabases.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciDatabaseManagementManagedMySqlDatabases that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_my_sql_databases#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabases.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseManagementManagedMySqlDatabases to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabases.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabases.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabases.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabases.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabases.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabases.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabases.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabases.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabases.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabases.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabases.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabases.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabases.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesFilterList">DataOciDatabaseManagementManagedMySqlDatabasesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabases.property.managedMySqlDatabaseCollection">ManagedMySqlDatabaseCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionList">DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabases.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabases.property.filterInput">FilterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabases.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabases.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabases.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabases.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabases.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabases.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabases.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabases.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabases.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabases.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabases.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabases.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabases.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabases.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabases.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabases.property.filter"></a>

```csharp
public DataOciDatabaseManagementManagedMySqlDatabasesFilterList Filter { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesFilterList">DataOciDatabaseManagementManagedMySqlDatabasesFilterList</a>

---

##### `ManagedMySqlDatabaseCollection`<sup>Required</sup> <a name="ManagedMySqlDatabaseCollection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabases.property.managedMySqlDatabaseCollection"></a>

```csharp
public DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionList ManagedMySqlDatabaseCollection { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionList">DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionList</a>

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabases.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabases.property.filterInput"></a>

```csharp
public object FilterInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabases.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabases.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabases.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabases.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabases.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseManagementManagedMySqlDatabasesConfig <a name="DataOciDatabaseManagementManagedMySqlDatabasesConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseManagementManagedMySqlDatabasesConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string CompartmentId,
    object Filter = null,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_my_sql_databases#compartment_id DataOciDatabaseManagementManagedMySqlDatabases#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesConfig.property.filter">Filter</a></code> | <code>object</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_my_sql_databases#id DataOciDatabaseManagementManagedMySqlDatabases#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_my_sql_databases#compartment_id DataOciDatabaseManagementManagedMySqlDatabases#compartment_id}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesConfig.property.filter"></a>

```csharp
public object Filter { get; set; }
```

- *Type:* object

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_my_sql_databases#filter DataOciDatabaseManagementManagedMySqlDatabases#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_my_sql_databases#id DataOciDatabaseManagementManagedMySqlDatabases#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciDatabaseManagementManagedMySqlDatabasesFilter <a name="DataOciDatabaseManagementManagedMySqlDatabasesFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseManagementManagedMySqlDatabasesFilter {
    string Name,
    string[] Values,
    object Regex = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesFilter.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_my_sql_databases#name DataOciDatabaseManagementManagedMySqlDatabases#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesFilter.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_my_sql_databases#values DataOciDatabaseManagementManagedMySqlDatabases#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesFilter.property.regex">Regex</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_my_sql_databases#regex DataOciDatabaseManagementManagedMySqlDatabases#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesFilter.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_my_sql_databases#name DataOciDatabaseManagementManagedMySqlDatabases#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesFilter.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_my_sql_databases#values DataOciDatabaseManagementManagedMySqlDatabases#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesFilter.property.regex"></a>

```csharp
public object Regex { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_my_sql_databases#regex DataOciDatabaseManagementManagedMySqlDatabases#regex}.

---

### DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollection <a name="DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollection.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollection {

};
```


### DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItems <a name="DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItems.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItems {

};
```


### DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsHeatWaveNodes <a name="DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsHeatWaveNodes" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsHeatWaveNodes"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsHeatWaveNodes.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsHeatWaveNodes {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseManagementManagedMySqlDatabasesFilterList <a name="DataOciDatabaseManagementManagedMySqlDatabasesFilterList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesFilterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseManagementManagedMySqlDatabasesFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesFilterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesFilterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesFilterList.get"></a>

```csharp
private DataOciDatabaseManagementManagedMySqlDatabasesFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesFilterList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesFilterList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciDatabaseManagementManagedMySqlDatabasesFilterOutputReference <a name="DataOciDatabaseManagementManagedMySqlDatabasesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseManagementManagedMySqlDatabasesFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesFilterOutputReference.resetRegex"></a>

```csharp
private void ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesFilterOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesFilterOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesFilterOutputReference.property.regex">Regex</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesFilterOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesFilterOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesFilterOutputReference.property.regexInput"></a>

```csharp
public object RegexInput { get; }
```

- *Type:* object

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesFilterOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesFilterOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesFilterOutputReference.property.regex"></a>

```csharp
public object Regex { get; }
```

- *Type:* object

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesFilterOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesFilterOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsHeatWaveNodesList <a name="DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsHeatWaveNodesList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsHeatWaveNodesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsHeatWaveNodesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsHeatWaveNodesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsHeatWaveNodesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsHeatWaveNodesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsHeatWaveNodesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsHeatWaveNodesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsHeatWaveNodesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsHeatWaveNodesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsHeatWaveNodesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsHeatWaveNodesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsHeatWaveNodesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsHeatWaveNodesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsHeatWaveNodesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsHeatWaveNodesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsHeatWaveNodesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsHeatWaveNodesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsHeatWaveNodesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsHeatWaveNodesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsHeatWaveNodesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsHeatWaveNodesList.get"></a>

```csharp
private DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsHeatWaveNodesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsHeatWaveNodesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsHeatWaveNodesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsHeatWaveNodesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsHeatWaveNodesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsHeatWaveNodesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsHeatWaveNodesOutputReference <a name="DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsHeatWaveNodesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsHeatWaveNodesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsHeatWaveNodesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsHeatWaveNodesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsHeatWaveNodesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsHeatWaveNodesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsHeatWaveNodesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsHeatWaveNodesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsHeatWaveNodesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsHeatWaveNodesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsHeatWaveNodesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsHeatWaveNodesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsHeatWaveNodesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsHeatWaveNodesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsHeatWaveNodesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsHeatWaveNodesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsHeatWaveNodesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsHeatWaveNodesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsHeatWaveNodesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsHeatWaveNodesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsHeatWaveNodesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsHeatWaveNodesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsHeatWaveNodesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsHeatWaveNodesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsHeatWaveNodesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsHeatWaveNodesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsHeatWaveNodesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsHeatWaveNodesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsHeatWaveNodesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsHeatWaveNodesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsHeatWaveNodesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsHeatWaveNodesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsHeatWaveNodesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsHeatWaveNodesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsHeatWaveNodesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsHeatWaveNodesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsHeatWaveNodesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsHeatWaveNodesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsHeatWaveNodesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsHeatWaveNodesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsHeatWaveNodesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsHeatWaveNodesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsHeatWaveNodesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsHeatWaveNodesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsHeatWaveNodesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsHeatWaveNodesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsHeatWaveNodesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsHeatWaveNodesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsHeatWaveNodesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsHeatWaveNodesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsHeatWaveNodesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsHeatWaveNodesOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsHeatWaveNodesOutputReference.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsHeatWaveNodesOutputReference.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsHeatWaveNodesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsHeatWaveNodes">DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsHeatWaveNodes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsHeatWaveNodesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsHeatWaveNodesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsHeatWaveNodesOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsHeatWaveNodesOutputReference.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsHeatWaveNodesOutputReference.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsHeatWaveNodesOutputReference.property.internalValue"></a>

```csharp
public DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsHeatWaveNodes InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsHeatWaveNodes">DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsHeatWaveNodes</a>

---


### DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsList <a name="DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsList.get"></a>

```csharp
private DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsOutputReference <a name="DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsOutputReference.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsOutputReference.property.dbName">DbName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsOutputReference.property.dbVersion">DbVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsOutputReference.property.heatWaveClusterDisplayName">HeatWaveClusterDisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsOutputReference.property.heatWaveMemorySize">HeatWaveMemorySize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsOutputReference.property.heatWaveNodes">HeatWaveNodes</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsHeatWaveNodesList">DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsHeatWaveNodesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsOutputReference.property.heatWaveNodeShape">HeatWaveNodeShape</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsOutputReference.property.isHeatWaveActive">IsHeatWaveActive</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsOutputReference.property.isHeatWaveEnabled">IsHeatWaveEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsOutputReference.property.isLakehouseEnabled">IsLakehouseEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsOutputReference.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsOutputReference.property.timeCreatedHeatWave">TimeCreatedHeatWave</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItems">DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsOutputReference.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `DbName`<sup>Required</sup> <a name="DbName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsOutputReference.property.dbName"></a>

```csharp
public string DbName { get; }
```

- *Type:* string

---

##### `DbVersion`<sup>Required</sup> <a name="DbVersion" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsOutputReference.property.dbVersion"></a>

```csharp
public string DbVersion { get; }
```

- *Type:* string

---

##### `HeatWaveClusterDisplayName`<sup>Required</sup> <a name="HeatWaveClusterDisplayName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsOutputReference.property.heatWaveClusterDisplayName"></a>

```csharp
public string HeatWaveClusterDisplayName { get; }
```

- *Type:* string

---

##### `HeatWaveMemorySize`<sup>Required</sup> <a name="HeatWaveMemorySize" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsOutputReference.property.heatWaveMemorySize"></a>

```csharp
public double HeatWaveMemorySize { get; }
```

- *Type:* double

---

##### `HeatWaveNodes`<sup>Required</sup> <a name="HeatWaveNodes" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsOutputReference.property.heatWaveNodes"></a>

```csharp
public DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsHeatWaveNodesList HeatWaveNodes { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsHeatWaveNodesList">DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsHeatWaveNodesList</a>

---

##### `HeatWaveNodeShape`<sup>Required</sup> <a name="HeatWaveNodeShape" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsOutputReference.property.heatWaveNodeShape"></a>

```csharp
public string HeatWaveNodeShape { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IsHeatWaveActive`<sup>Required</sup> <a name="IsHeatWaveActive" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsOutputReference.property.isHeatWaveActive"></a>

```csharp
public IResolvable IsHeatWaveActive { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IsHeatWaveEnabled`<sup>Required</sup> <a name="IsHeatWaveEnabled" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsOutputReference.property.isHeatWaveEnabled"></a>

```csharp
public IResolvable IsHeatWaveEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IsLakehouseEnabled`<sup>Required</sup> <a name="IsLakehouseEnabled" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsOutputReference.property.isLakehouseEnabled"></a>

```csharp
public IResolvable IsLakehouseEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsOutputReference.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `TimeCreatedHeatWave`<sup>Required</sup> <a name="TimeCreatedHeatWave" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsOutputReference.property.timeCreatedHeatWave"></a>

```csharp
public string TimeCreatedHeatWave { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsOutputReference.property.internalValue"></a>

```csharp
public DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItems InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItems">DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItems</a>

---


### DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionList <a name="DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionList.get"></a>

```csharp
private DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionOutputReference <a name="DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsList">DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollection">DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionOutputReference.property.items"></a>

```csharp
public DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsList Items { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsList">DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollectionOutputReference.property.internalValue"></a>

```csharp
public DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollection InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabases.DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollection">DataOciDatabaseManagementManagedMySqlDatabasesManagedMySqlDatabaseCollection</a>

---



