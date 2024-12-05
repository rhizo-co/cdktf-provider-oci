# `dataOciDatabaseManagementManagedMySqlDatabase` Submodule <a name="`dataOciDatabaseManagementManagedMySqlDatabase` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabase"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseManagementManagedMySqlDatabase <a name="DataOciDatabaseManagementManagedMySqlDatabase" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabase.DataOciDatabaseManagementManagedMySqlDatabase"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_my_sql_database oci_database_management_managed_my_sql_database}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabase.DataOciDatabaseManagementManagedMySqlDatabase.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseManagementManagedMySqlDatabase(Construct Scope, string Id, DataOciDatabaseManagementManagedMySqlDatabaseConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabase.DataOciDatabaseManagementManagedMySqlDatabase.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabase.DataOciDatabaseManagementManagedMySqlDatabase.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabase.DataOciDatabaseManagementManagedMySqlDatabase.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabase.DataOciDatabaseManagementManagedMySqlDatabaseConfig">DataOciDatabaseManagementManagedMySqlDatabaseConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabase.DataOciDatabaseManagementManagedMySqlDatabase.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabase.DataOciDatabaseManagementManagedMySqlDatabase.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabase.DataOciDatabaseManagementManagedMySqlDatabase.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabase.DataOciDatabaseManagementManagedMySqlDatabaseConfig">DataOciDatabaseManagementManagedMySqlDatabaseConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabase.DataOciDatabaseManagementManagedMySqlDatabase.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabase.DataOciDatabaseManagementManagedMySqlDatabase.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabase.DataOciDatabaseManagementManagedMySqlDatabase.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabase.DataOciDatabaseManagementManagedMySqlDatabase.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabase.DataOciDatabaseManagementManagedMySqlDatabase.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabase.DataOciDatabaseManagementManagedMySqlDatabase.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabase.DataOciDatabaseManagementManagedMySqlDatabase.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabase.DataOciDatabaseManagementManagedMySqlDatabase.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabase.DataOciDatabaseManagementManagedMySqlDatabase.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabase.DataOciDatabaseManagementManagedMySqlDatabase.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabase.DataOciDatabaseManagementManagedMySqlDatabase.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabase.DataOciDatabaseManagementManagedMySqlDatabase.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabase.DataOciDatabaseManagementManagedMySqlDatabase.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabase.DataOciDatabaseManagementManagedMySqlDatabase.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabase.DataOciDatabaseManagementManagedMySqlDatabase.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabase.DataOciDatabaseManagementManagedMySqlDatabase.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabase.DataOciDatabaseManagementManagedMySqlDatabase.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabase.DataOciDatabaseManagementManagedMySqlDatabase.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabase.DataOciDatabaseManagementManagedMySqlDatabase.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabase.DataOciDatabaseManagementManagedMySqlDatabase.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabase.DataOciDatabaseManagementManagedMySqlDatabase.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabase.DataOciDatabaseManagementManagedMySqlDatabase.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabase.DataOciDatabaseManagementManagedMySqlDatabase.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabase.DataOciDatabaseManagementManagedMySqlDatabase.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabase.DataOciDatabaseManagementManagedMySqlDatabase.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabase.DataOciDatabaseManagementManagedMySqlDatabase.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabase.DataOciDatabaseManagementManagedMySqlDatabase.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabase.DataOciDatabaseManagementManagedMySqlDatabase.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabase.DataOciDatabaseManagementManagedMySqlDatabase.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabase.DataOciDatabaseManagementManagedMySqlDatabase.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabase.DataOciDatabaseManagementManagedMySqlDatabase.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabase.DataOciDatabaseManagementManagedMySqlDatabase.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabase.DataOciDatabaseManagementManagedMySqlDatabase.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabase.DataOciDatabaseManagementManagedMySqlDatabase.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabase.DataOciDatabaseManagementManagedMySqlDatabase.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabase.DataOciDatabaseManagementManagedMySqlDatabase.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabase.DataOciDatabaseManagementManagedMySqlDatabase.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabase.DataOciDatabaseManagementManagedMySqlDatabase.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabase.DataOciDatabaseManagementManagedMySqlDatabase.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabase.DataOciDatabaseManagementManagedMySqlDatabase.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabase.DataOciDatabaseManagementManagedMySqlDatabase.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabase.DataOciDatabaseManagementManagedMySqlDatabase.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabase.DataOciDatabaseManagementManagedMySqlDatabase.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabase.DataOciDatabaseManagementManagedMySqlDatabase.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabase.DataOciDatabaseManagementManagedMySqlDatabase.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabase.DataOciDatabaseManagementManagedMySqlDatabase.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabase.DataOciDatabaseManagementManagedMySqlDatabase.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabase.DataOciDatabaseManagementManagedMySqlDatabase.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabase.DataOciDatabaseManagementManagedMySqlDatabase.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabase.DataOciDatabaseManagementManagedMySqlDatabase.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabase.DataOciDatabaseManagementManagedMySqlDatabase.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabase.DataOciDatabaseManagementManagedMySqlDatabase.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabase.DataOciDatabaseManagementManagedMySqlDatabase.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDatabaseManagementManagedMySqlDatabase resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabase.DataOciDatabaseManagementManagedMySqlDatabase.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDatabaseManagementManagedMySqlDatabase.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabase.DataOciDatabaseManagementManagedMySqlDatabase.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabase.DataOciDatabaseManagementManagedMySqlDatabase.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDatabaseManagementManagedMySqlDatabase.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabase.DataOciDatabaseManagementManagedMySqlDatabase.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabase.DataOciDatabaseManagementManagedMySqlDatabase.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDatabaseManagementManagedMySqlDatabase.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabase.DataOciDatabaseManagementManagedMySqlDatabase.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabase.DataOciDatabaseManagementManagedMySqlDatabase.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDatabaseManagementManagedMySqlDatabase.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciDatabaseManagementManagedMySqlDatabase resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabase.DataOciDatabaseManagementManagedMySqlDatabase.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabase.DataOciDatabaseManagementManagedMySqlDatabase.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciDatabaseManagementManagedMySqlDatabase to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabase.DataOciDatabaseManagementManagedMySqlDatabase.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciDatabaseManagementManagedMySqlDatabase that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_my_sql_database#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabase.DataOciDatabaseManagementManagedMySqlDatabase.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseManagementManagedMySqlDatabase to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabase.DataOciDatabaseManagementManagedMySqlDatabase.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabase.DataOciDatabaseManagementManagedMySqlDatabase.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabase.DataOciDatabaseManagementManagedMySqlDatabase.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabase.DataOciDatabaseManagementManagedMySqlDatabase.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabase.DataOciDatabaseManagementManagedMySqlDatabase.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabase.DataOciDatabaseManagementManagedMySqlDatabase.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabase.DataOciDatabaseManagementManagedMySqlDatabase.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabase.DataOciDatabaseManagementManagedMySqlDatabase.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabase.DataOciDatabaseManagementManagedMySqlDatabase.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabase.DataOciDatabaseManagementManagedMySqlDatabase.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabase.DataOciDatabaseManagementManagedMySqlDatabase.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabase.DataOciDatabaseManagementManagedMySqlDatabase.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabase.DataOciDatabaseManagementManagedMySqlDatabase.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabase.DataOciDatabaseManagementManagedMySqlDatabase.property.dbName">DbName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabase.DataOciDatabaseManagementManagedMySqlDatabase.property.dbVersion">DbVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabase.DataOciDatabaseManagementManagedMySqlDatabase.property.heatWaveClusterDisplayName">HeatWaveClusterDisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabase.DataOciDatabaseManagementManagedMySqlDatabase.property.heatWaveMemorySize">HeatWaveMemorySize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabase.DataOciDatabaseManagementManagedMySqlDatabase.property.heatWaveNodes">HeatWaveNodes</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabase.DataOciDatabaseManagementManagedMySqlDatabaseHeatWaveNodesList">DataOciDatabaseManagementManagedMySqlDatabaseHeatWaveNodesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabase.DataOciDatabaseManagementManagedMySqlDatabase.property.heatWaveNodeShape">HeatWaveNodeShape</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabase.DataOciDatabaseManagementManagedMySqlDatabase.property.isHeatWaveActive">IsHeatWaveActive</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabase.DataOciDatabaseManagementManagedMySqlDatabase.property.isHeatWaveEnabled">IsHeatWaveEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabase.DataOciDatabaseManagementManagedMySqlDatabase.property.isLakehouseEnabled">IsLakehouseEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabase.DataOciDatabaseManagementManagedMySqlDatabase.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabase.DataOciDatabaseManagementManagedMySqlDatabase.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabase.DataOciDatabaseManagementManagedMySqlDatabase.property.timeCreatedHeatWave">TimeCreatedHeatWave</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabase.DataOciDatabaseManagementManagedMySqlDatabase.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabase.DataOciDatabaseManagementManagedMySqlDatabase.property.managedMySqlDatabaseIdInput">ManagedMySqlDatabaseIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabase.DataOciDatabaseManagementManagedMySqlDatabase.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabase.DataOciDatabaseManagementManagedMySqlDatabase.property.managedMySqlDatabaseId">ManagedMySqlDatabaseId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabase.DataOciDatabaseManagementManagedMySqlDatabase.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabase.DataOciDatabaseManagementManagedMySqlDatabase.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabase.DataOciDatabaseManagementManagedMySqlDatabase.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabase.DataOciDatabaseManagementManagedMySqlDatabase.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabase.DataOciDatabaseManagementManagedMySqlDatabase.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabase.DataOciDatabaseManagementManagedMySqlDatabase.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabase.DataOciDatabaseManagementManagedMySqlDatabase.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabase.DataOciDatabaseManagementManagedMySqlDatabase.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabase.DataOciDatabaseManagementManagedMySqlDatabase.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabase.DataOciDatabaseManagementManagedMySqlDatabase.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabase.DataOciDatabaseManagementManagedMySqlDatabase.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabase.DataOciDatabaseManagementManagedMySqlDatabase.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabase.DataOciDatabaseManagementManagedMySqlDatabase.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `DbName`<sup>Required</sup> <a name="DbName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabase.DataOciDatabaseManagementManagedMySqlDatabase.property.dbName"></a>

```csharp
public string DbName { get; }
```

- *Type:* string

---

##### `DbVersion`<sup>Required</sup> <a name="DbVersion" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabase.DataOciDatabaseManagementManagedMySqlDatabase.property.dbVersion"></a>

```csharp
public string DbVersion { get; }
```

- *Type:* string

---

##### `HeatWaveClusterDisplayName`<sup>Required</sup> <a name="HeatWaveClusterDisplayName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabase.DataOciDatabaseManagementManagedMySqlDatabase.property.heatWaveClusterDisplayName"></a>

```csharp
public string HeatWaveClusterDisplayName { get; }
```

- *Type:* string

---

##### `HeatWaveMemorySize`<sup>Required</sup> <a name="HeatWaveMemorySize" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabase.DataOciDatabaseManagementManagedMySqlDatabase.property.heatWaveMemorySize"></a>

```csharp
public double HeatWaveMemorySize { get; }
```

- *Type:* double

---

##### `HeatWaveNodes`<sup>Required</sup> <a name="HeatWaveNodes" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabase.DataOciDatabaseManagementManagedMySqlDatabase.property.heatWaveNodes"></a>

```csharp
public DataOciDatabaseManagementManagedMySqlDatabaseHeatWaveNodesList HeatWaveNodes { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabase.DataOciDatabaseManagementManagedMySqlDatabaseHeatWaveNodesList">DataOciDatabaseManagementManagedMySqlDatabaseHeatWaveNodesList</a>

---

##### `HeatWaveNodeShape`<sup>Required</sup> <a name="HeatWaveNodeShape" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabase.DataOciDatabaseManagementManagedMySqlDatabase.property.heatWaveNodeShape"></a>

```csharp
public string HeatWaveNodeShape { get; }
```

- *Type:* string

---

##### `IsHeatWaveActive`<sup>Required</sup> <a name="IsHeatWaveActive" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabase.DataOciDatabaseManagementManagedMySqlDatabase.property.isHeatWaveActive"></a>

```csharp
public IResolvable IsHeatWaveActive { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IsHeatWaveEnabled`<sup>Required</sup> <a name="IsHeatWaveEnabled" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabase.DataOciDatabaseManagementManagedMySqlDatabase.property.isHeatWaveEnabled"></a>

```csharp
public IResolvable IsHeatWaveEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IsLakehouseEnabled`<sup>Required</sup> <a name="IsLakehouseEnabled" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabase.DataOciDatabaseManagementManagedMySqlDatabase.property.isLakehouseEnabled"></a>

```csharp
public IResolvable IsLakehouseEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabase.DataOciDatabaseManagementManagedMySqlDatabase.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabase.DataOciDatabaseManagementManagedMySqlDatabase.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `TimeCreatedHeatWave`<sup>Required</sup> <a name="TimeCreatedHeatWave" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabase.DataOciDatabaseManagementManagedMySqlDatabase.property.timeCreatedHeatWave"></a>

```csharp
public string TimeCreatedHeatWave { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabase.DataOciDatabaseManagementManagedMySqlDatabase.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ManagedMySqlDatabaseIdInput`<sup>Optional</sup> <a name="ManagedMySqlDatabaseIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabase.DataOciDatabaseManagementManagedMySqlDatabase.property.managedMySqlDatabaseIdInput"></a>

```csharp
public string ManagedMySqlDatabaseIdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabase.DataOciDatabaseManagementManagedMySqlDatabase.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ManagedMySqlDatabaseId`<sup>Required</sup> <a name="ManagedMySqlDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabase.DataOciDatabaseManagementManagedMySqlDatabase.property.managedMySqlDatabaseId"></a>

```csharp
public string ManagedMySqlDatabaseId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabase.DataOciDatabaseManagementManagedMySqlDatabase.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabase.DataOciDatabaseManagementManagedMySqlDatabase.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseManagementManagedMySqlDatabaseConfig <a name="DataOciDatabaseManagementManagedMySqlDatabaseConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabase.DataOciDatabaseManagementManagedMySqlDatabaseConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabase.DataOciDatabaseManagementManagedMySqlDatabaseConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseManagementManagedMySqlDatabaseConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ManagedMySqlDatabaseId,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabase.DataOciDatabaseManagementManagedMySqlDatabaseConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabase.DataOciDatabaseManagementManagedMySqlDatabaseConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabase.DataOciDatabaseManagementManagedMySqlDatabaseConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabase.DataOciDatabaseManagementManagedMySqlDatabaseConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabase.DataOciDatabaseManagementManagedMySqlDatabaseConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabase.DataOciDatabaseManagementManagedMySqlDatabaseConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabase.DataOciDatabaseManagementManagedMySqlDatabaseConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabase.DataOciDatabaseManagementManagedMySqlDatabaseConfig.property.managedMySqlDatabaseId">ManagedMySqlDatabaseId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_my_sql_database#managed_my_sql_database_id DataOciDatabaseManagementManagedMySqlDatabase#managed_my_sql_database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabase.DataOciDatabaseManagementManagedMySqlDatabaseConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_my_sql_database#id DataOciDatabaseManagementManagedMySqlDatabase#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabase.DataOciDatabaseManagementManagedMySqlDatabaseConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabase.DataOciDatabaseManagementManagedMySqlDatabaseConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabase.DataOciDatabaseManagementManagedMySqlDatabaseConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabase.DataOciDatabaseManagementManagedMySqlDatabaseConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabase.DataOciDatabaseManagementManagedMySqlDatabaseConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabase.DataOciDatabaseManagementManagedMySqlDatabaseConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabase.DataOciDatabaseManagementManagedMySqlDatabaseConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ManagedMySqlDatabaseId`<sup>Required</sup> <a name="ManagedMySqlDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabase.DataOciDatabaseManagementManagedMySqlDatabaseConfig.property.managedMySqlDatabaseId"></a>

```csharp
public string ManagedMySqlDatabaseId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_my_sql_database#managed_my_sql_database_id DataOciDatabaseManagementManagedMySqlDatabase#managed_my_sql_database_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabase.DataOciDatabaseManagementManagedMySqlDatabaseConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_my_sql_database#id DataOciDatabaseManagementManagedMySqlDatabase#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciDatabaseManagementManagedMySqlDatabaseHeatWaveNodes <a name="DataOciDatabaseManagementManagedMySqlDatabaseHeatWaveNodes" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabase.DataOciDatabaseManagementManagedMySqlDatabaseHeatWaveNodes"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabase.DataOciDatabaseManagementManagedMySqlDatabaseHeatWaveNodes.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseManagementManagedMySqlDatabaseHeatWaveNodes {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseManagementManagedMySqlDatabaseHeatWaveNodesList <a name="DataOciDatabaseManagementManagedMySqlDatabaseHeatWaveNodesList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabase.DataOciDatabaseManagementManagedMySqlDatabaseHeatWaveNodesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabase.DataOciDatabaseManagementManagedMySqlDatabaseHeatWaveNodesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseManagementManagedMySqlDatabaseHeatWaveNodesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabase.DataOciDatabaseManagementManagedMySqlDatabaseHeatWaveNodesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabase.DataOciDatabaseManagementManagedMySqlDatabaseHeatWaveNodesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabase.DataOciDatabaseManagementManagedMySqlDatabaseHeatWaveNodesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabase.DataOciDatabaseManagementManagedMySqlDatabaseHeatWaveNodesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabase.DataOciDatabaseManagementManagedMySqlDatabaseHeatWaveNodesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabase.DataOciDatabaseManagementManagedMySqlDatabaseHeatWaveNodesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabase.DataOciDatabaseManagementManagedMySqlDatabaseHeatWaveNodesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabase.DataOciDatabaseManagementManagedMySqlDatabaseHeatWaveNodesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabase.DataOciDatabaseManagementManagedMySqlDatabaseHeatWaveNodesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabase.DataOciDatabaseManagementManagedMySqlDatabaseHeatWaveNodesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabase.DataOciDatabaseManagementManagedMySqlDatabaseHeatWaveNodesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabase.DataOciDatabaseManagementManagedMySqlDatabaseHeatWaveNodesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabase.DataOciDatabaseManagementManagedMySqlDatabaseHeatWaveNodesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabase.DataOciDatabaseManagementManagedMySqlDatabaseHeatWaveNodesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabase.DataOciDatabaseManagementManagedMySqlDatabaseHeatWaveNodesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabase.DataOciDatabaseManagementManagedMySqlDatabaseHeatWaveNodesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabase.DataOciDatabaseManagementManagedMySqlDatabaseHeatWaveNodesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabase.DataOciDatabaseManagementManagedMySqlDatabaseHeatWaveNodesList.get"></a>

```csharp
private DataOciDatabaseManagementManagedMySqlDatabaseHeatWaveNodesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabase.DataOciDatabaseManagementManagedMySqlDatabaseHeatWaveNodesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabase.DataOciDatabaseManagementManagedMySqlDatabaseHeatWaveNodesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabase.DataOciDatabaseManagementManagedMySqlDatabaseHeatWaveNodesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabase.DataOciDatabaseManagementManagedMySqlDatabaseHeatWaveNodesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabase.DataOciDatabaseManagementManagedMySqlDatabaseHeatWaveNodesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDatabaseManagementManagedMySqlDatabaseHeatWaveNodesOutputReference <a name="DataOciDatabaseManagementManagedMySqlDatabaseHeatWaveNodesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabase.DataOciDatabaseManagementManagedMySqlDatabaseHeatWaveNodesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabase.DataOciDatabaseManagementManagedMySqlDatabaseHeatWaveNodesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseManagementManagedMySqlDatabaseHeatWaveNodesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabase.DataOciDatabaseManagementManagedMySqlDatabaseHeatWaveNodesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabase.DataOciDatabaseManagementManagedMySqlDatabaseHeatWaveNodesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabase.DataOciDatabaseManagementManagedMySqlDatabaseHeatWaveNodesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabase.DataOciDatabaseManagementManagedMySqlDatabaseHeatWaveNodesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabase.DataOciDatabaseManagementManagedMySqlDatabaseHeatWaveNodesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabase.DataOciDatabaseManagementManagedMySqlDatabaseHeatWaveNodesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabase.DataOciDatabaseManagementManagedMySqlDatabaseHeatWaveNodesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabase.DataOciDatabaseManagementManagedMySqlDatabaseHeatWaveNodesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabase.DataOciDatabaseManagementManagedMySqlDatabaseHeatWaveNodesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabase.DataOciDatabaseManagementManagedMySqlDatabaseHeatWaveNodesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabase.DataOciDatabaseManagementManagedMySqlDatabaseHeatWaveNodesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabase.DataOciDatabaseManagementManagedMySqlDatabaseHeatWaveNodesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabase.DataOciDatabaseManagementManagedMySqlDatabaseHeatWaveNodesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabase.DataOciDatabaseManagementManagedMySqlDatabaseHeatWaveNodesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabase.DataOciDatabaseManagementManagedMySqlDatabaseHeatWaveNodesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabase.DataOciDatabaseManagementManagedMySqlDatabaseHeatWaveNodesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabase.DataOciDatabaseManagementManagedMySqlDatabaseHeatWaveNodesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabase.DataOciDatabaseManagementManagedMySqlDatabaseHeatWaveNodesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabase.DataOciDatabaseManagementManagedMySqlDatabaseHeatWaveNodesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabase.DataOciDatabaseManagementManagedMySqlDatabaseHeatWaveNodesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabase.DataOciDatabaseManagementManagedMySqlDatabaseHeatWaveNodesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabase.DataOciDatabaseManagementManagedMySqlDatabaseHeatWaveNodesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabase.DataOciDatabaseManagementManagedMySqlDatabaseHeatWaveNodesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabase.DataOciDatabaseManagementManagedMySqlDatabaseHeatWaveNodesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabase.DataOciDatabaseManagementManagedMySqlDatabaseHeatWaveNodesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabase.DataOciDatabaseManagementManagedMySqlDatabaseHeatWaveNodesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabase.DataOciDatabaseManagementManagedMySqlDatabaseHeatWaveNodesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabase.DataOciDatabaseManagementManagedMySqlDatabaseHeatWaveNodesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabase.DataOciDatabaseManagementManagedMySqlDatabaseHeatWaveNodesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabase.DataOciDatabaseManagementManagedMySqlDatabaseHeatWaveNodesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabase.DataOciDatabaseManagementManagedMySqlDatabaseHeatWaveNodesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabase.DataOciDatabaseManagementManagedMySqlDatabaseHeatWaveNodesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabase.DataOciDatabaseManagementManagedMySqlDatabaseHeatWaveNodesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabase.DataOciDatabaseManagementManagedMySqlDatabaseHeatWaveNodesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabase.DataOciDatabaseManagementManagedMySqlDatabaseHeatWaveNodesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabase.DataOciDatabaseManagementManagedMySqlDatabaseHeatWaveNodesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabase.DataOciDatabaseManagementManagedMySqlDatabaseHeatWaveNodesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabase.DataOciDatabaseManagementManagedMySqlDatabaseHeatWaveNodesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabase.DataOciDatabaseManagementManagedMySqlDatabaseHeatWaveNodesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabase.DataOciDatabaseManagementManagedMySqlDatabaseHeatWaveNodesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabase.DataOciDatabaseManagementManagedMySqlDatabaseHeatWaveNodesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabase.DataOciDatabaseManagementManagedMySqlDatabaseHeatWaveNodesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabase.DataOciDatabaseManagementManagedMySqlDatabaseHeatWaveNodesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabase.DataOciDatabaseManagementManagedMySqlDatabaseHeatWaveNodesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabase.DataOciDatabaseManagementManagedMySqlDatabaseHeatWaveNodesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabase.DataOciDatabaseManagementManagedMySqlDatabaseHeatWaveNodesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabase.DataOciDatabaseManagementManagedMySqlDatabaseHeatWaveNodesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabase.DataOciDatabaseManagementManagedMySqlDatabaseHeatWaveNodesOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabase.DataOciDatabaseManagementManagedMySqlDatabaseHeatWaveNodesOutputReference.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabase.DataOciDatabaseManagementManagedMySqlDatabaseHeatWaveNodesOutputReference.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabase.DataOciDatabaseManagementManagedMySqlDatabaseHeatWaveNodesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabase.DataOciDatabaseManagementManagedMySqlDatabaseHeatWaveNodes">DataOciDatabaseManagementManagedMySqlDatabaseHeatWaveNodes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabase.DataOciDatabaseManagementManagedMySqlDatabaseHeatWaveNodesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabase.DataOciDatabaseManagementManagedMySqlDatabaseHeatWaveNodesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabase.DataOciDatabaseManagementManagedMySqlDatabaseHeatWaveNodesOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabase.DataOciDatabaseManagementManagedMySqlDatabaseHeatWaveNodesOutputReference.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabase.DataOciDatabaseManagementManagedMySqlDatabaseHeatWaveNodesOutputReference.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabase.DataOciDatabaseManagementManagedMySqlDatabaseHeatWaveNodesOutputReference.property.internalValue"></a>

```csharp
public DataOciDatabaseManagementManagedMySqlDatabaseHeatWaveNodes InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabase.DataOciDatabaseManagementManagedMySqlDatabaseHeatWaveNodes">DataOciDatabaseManagementManagedMySqlDatabaseHeatWaveNodes</a>

---


