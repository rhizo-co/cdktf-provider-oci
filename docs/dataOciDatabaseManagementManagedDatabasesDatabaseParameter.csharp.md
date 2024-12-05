# `dataOciDatabaseManagementManagedDatabasesDatabaseParameter` Submodule <a name="`dataOciDatabaseManagementManagedDatabasesDatabaseParameter` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseManagementManagedDatabasesDatabaseParameter <a name="DataOciDatabaseManagementManagedDatabasesDatabaseParameter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameter"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_databases_database_parameter oci_database_management_managed_databases_database_parameter}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseManagementManagedDatabasesDatabaseParameter(Construct Scope, string Id, DataOciDatabaseManagementManagedDatabasesDatabaseParameterConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameter.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameter.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameter.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterConfig">DataOciDatabaseManagementManagedDatabasesDatabaseParameterConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameter.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameter.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameter.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterConfig">DataOciDatabaseManagementManagedDatabasesDatabaseParameterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameter.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameter.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameter.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameter.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameter.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameter.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameter.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameter.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameter.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameter.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameter.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameter.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameter.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameter.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameter.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameter.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameter.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameter.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameter.resetIsAllowedValuesIncluded">ResetIsAllowedValuesIncluded</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameter.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameter.resetSource">ResetSource</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameter.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameter.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameter.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameter.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameter.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameter.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameter.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameter.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameter.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameter.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameter.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameter.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameter.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameter.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameter.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameter.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameter.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameter.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameter.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameter.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameter.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameter.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameter.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameter.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameter.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameter.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameter.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameter.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameter.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameter.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameter.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIsAllowedValuesIncluded` <a name="ResetIsAllowedValuesIncluded" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameter.resetIsAllowedValuesIncluded"></a>

```csharp
private void ResetIsAllowedValuesIncluded()
```

##### `ResetName` <a name="ResetName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameter.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetSource` <a name="ResetSource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameter.resetSource"></a>

```csharp
private void ResetSource()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameter.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameter.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameter.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameter.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDatabaseManagementManagedDatabasesDatabaseParameter resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameter.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDatabaseManagementManagedDatabasesDatabaseParameter.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameter.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameter.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDatabaseManagementManagedDatabasesDatabaseParameter.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameter.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameter.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDatabaseManagementManagedDatabasesDatabaseParameter.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameter.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameter.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDatabaseManagementManagedDatabasesDatabaseParameter.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciDatabaseManagementManagedDatabasesDatabaseParameter resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameter.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameter.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciDatabaseManagementManagedDatabasesDatabaseParameter to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameter.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciDatabaseManagementManagedDatabasesDatabaseParameter that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_databases_database_parameter#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameter.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseManagementManagedDatabasesDatabaseParameter to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameter.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameter.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameter.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameter.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameter.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameter.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameter.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameter.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameter.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameter.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameter.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameter.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameter.property.databaseName">DatabaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameter.property.databaseSubType">DatabaseSubType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameter.property.databaseType">DatabaseType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameter.property.databaseVersion">DatabaseVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameter.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsList">DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameter.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameter.property.isAllowedValuesIncludedInput">IsAllowedValuesIncludedInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameter.property.managedDatabaseIdInput">ManagedDatabaseIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameter.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameter.property.sourceInput">SourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameter.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameter.property.isAllowedValuesIncluded">IsAllowedValuesIncluded</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameter.property.managedDatabaseId">ManagedDatabaseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameter.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameter.property.source">Source</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameter.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameter.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameter.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameter.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameter.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameter.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameter.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameter.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameter.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameter.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameter.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameter.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameter.property.databaseName"></a>

```csharp
public string DatabaseName { get; }
```

- *Type:* string

---

##### `DatabaseSubType`<sup>Required</sup> <a name="DatabaseSubType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameter.property.databaseSubType"></a>

```csharp
public string DatabaseSubType { get; }
```

- *Type:* string

---

##### `DatabaseType`<sup>Required</sup> <a name="DatabaseType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameter.property.databaseType"></a>

```csharp
public string DatabaseType { get; }
```

- *Type:* string

---

##### `DatabaseVersion`<sup>Required</sup> <a name="DatabaseVersion" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameter.property.databaseVersion"></a>

```csharp
public string DatabaseVersion { get; }
```

- *Type:* string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameter.property.items"></a>

```csharp
public DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsList Items { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsList">DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameter.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IsAllowedValuesIncludedInput`<sup>Optional</sup> <a name="IsAllowedValuesIncludedInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameter.property.isAllowedValuesIncludedInput"></a>

```csharp
public object IsAllowedValuesIncludedInput { get; }
```

- *Type:* object

---

##### `ManagedDatabaseIdInput`<sup>Optional</sup> <a name="ManagedDatabaseIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameter.property.managedDatabaseIdInput"></a>

```csharp
public string ManagedDatabaseIdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameter.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `SourceInput`<sup>Optional</sup> <a name="SourceInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameter.property.sourceInput"></a>

```csharp
public string SourceInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameter.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IsAllowedValuesIncluded`<sup>Required</sup> <a name="IsAllowedValuesIncluded" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameter.property.isAllowedValuesIncluded"></a>

```csharp
public object IsAllowedValuesIncluded { get; }
```

- *Type:* object

---

##### `ManagedDatabaseId`<sup>Required</sup> <a name="ManagedDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameter.property.managedDatabaseId"></a>

```csharp
public string ManagedDatabaseId { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameter.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Source`<sup>Required</sup> <a name="Source" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameter.property.source"></a>

```csharp
public string Source { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameter.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameter.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseManagementManagedDatabasesDatabaseParameterConfig <a name="DataOciDatabaseManagementManagedDatabasesDatabaseParameterConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseManagementManagedDatabasesDatabaseParameterConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ManagedDatabaseId,
    string Id = null,
    object IsAllowedValuesIncluded = null,
    string Name = null,
    string Source = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterConfig.property.managedDatabaseId">ManagedDatabaseId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_databases_database_parameter#managed_database_id DataOciDatabaseManagementManagedDatabasesDatabaseParameter#managed_database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_databases_database_parameter#id DataOciDatabaseManagementManagedDatabasesDatabaseParameter#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterConfig.property.isAllowedValuesIncluded">IsAllowedValuesIncluded</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_databases_database_parameter#is_allowed_values_included DataOciDatabaseManagementManagedDatabasesDatabaseParameter#is_allowed_values_included}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_databases_database_parameter#name DataOciDatabaseManagementManagedDatabasesDatabaseParameter#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterConfig.property.source">Source</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_databases_database_parameter#source DataOciDatabaseManagementManagedDatabasesDatabaseParameter#source}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ManagedDatabaseId`<sup>Required</sup> <a name="ManagedDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterConfig.property.managedDatabaseId"></a>

```csharp
public string ManagedDatabaseId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_databases_database_parameter#managed_database_id DataOciDatabaseManagementManagedDatabasesDatabaseParameter#managed_database_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_databases_database_parameter#id DataOciDatabaseManagementManagedDatabasesDatabaseParameter#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IsAllowedValuesIncluded`<sup>Optional</sup> <a name="IsAllowedValuesIncluded" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterConfig.property.isAllowedValuesIncluded"></a>

```csharp
public object IsAllowedValuesIncluded { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_databases_database_parameter#is_allowed_values_included DataOciDatabaseManagementManagedDatabasesDatabaseParameter#is_allowed_values_included}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_databases_database_parameter#name DataOciDatabaseManagementManagedDatabasesDatabaseParameter#name}.

---

##### `Source`<sup>Optional</sup> <a name="Source" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterConfig.property.source"></a>

```csharp
public string Source { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_databases_database_parameter#source DataOciDatabaseManagementManagedDatabasesDatabaseParameter#source}.

---

### DataOciDatabaseManagementManagedDatabasesDatabaseParameterItems <a name="DataOciDatabaseManagementManagedDatabasesDatabaseParameterItems" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItems.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseManagementManagedDatabasesDatabaseParameterItems {

};
```


### DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsAllowedValues <a name="DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsAllowedValues" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsAllowedValues"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsAllowedValues.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsAllowedValues {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsAllowedValuesList <a name="DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsAllowedValuesList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsAllowedValuesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsAllowedValuesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsAllowedValuesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsAllowedValuesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsAllowedValuesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsAllowedValuesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsAllowedValuesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsAllowedValuesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsAllowedValuesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsAllowedValuesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsAllowedValuesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsAllowedValuesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsAllowedValuesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsAllowedValuesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsAllowedValuesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsAllowedValuesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsAllowedValuesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsAllowedValuesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsAllowedValuesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsAllowedValuesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsAllowedValuesList.get"></a>

```csharp
private DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsAllowedValuesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsAllowedValuesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsAllowedValuesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsAllowedValuesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsAllowedValuesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsAllowedValuesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsAllowedValuesOutputReference <a name="DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsAllowedValuesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsAllowedValuesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsAllowedValuesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsAllowedValuesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsAllowedValuesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsAllowedValuesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsAllowedValuesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsAllowedValuesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsAllowedValuesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsAllowedValuesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsAllowedValuesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsAllowedValuesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsAllowedValuesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsAllowedValuesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsAllowedValuesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsAllowedValuesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsAllowedValuesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsAllowedValuesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsAllowedValuesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsAllowedValuesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsAllowedValuesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsAllowedValuesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsAllowedValuesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsAllowedValuesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsAllowedValuesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsAllowedValuesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsAllowedValuesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsAllowedValuesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsAllowedValuesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsAllowedValuesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsAllowedValuesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsAllowedValuesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsAllowedValuesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsAllowedValuesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsAllowedValuesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsAllowedValuesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsAllowedValuesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsAllowedValuesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsAllowedValuesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsAllowedValuesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsAllowedValuesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsAllowedValuesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsAllowedValuesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsAllowedValuesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsAllowedValuesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsAllowedValuesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsAllowedValuesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsAllowedValuesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsAllowedValuesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsAllowedValuesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsAllowedValuesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsAllowedValuesOutputReference.property.isDefault">IsDefault</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsAllowedValuesOutputReference.property.ordinal">Ordinal</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsAllowedValuesOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsAllowedValuesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsAllowedValues">DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsAllowedValues</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsAllowedValuesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsAllowedValuesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IsDefault`<sup>Required</sup> <a name="IsDefault" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsAllowedValuesOutputReference.property.isDefault"></a>

```csharp
public IResolvable IsDefault { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Ordinal`<sup>Required</sup> <a name="Ordinal" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsAllowedValuesOutputReference.property.ordinal"></a>

```csharp
public double Ordinal { get; }
```

- *Type:* double

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsAllowedValuesOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsAllowedValuesOutputReference.property.internalValue"></a>

```csharp
public DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsAllowedValues InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsAllowedValues">DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsAllowedValues</a>

---


### DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsList <a name="DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsList.get"></a>

```csharp
private DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsOutputReference <a name="DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsOutputReference.property.allowedValues">AllowedValues</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsAllowedValuesList">DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsAllowedValuesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsOutputReference.property.category">Category</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsOutputReference.property.constraint">Constraint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsOutputReference.property.containerId">ContainerId</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsOutputReference.property.displayValue">DisplayValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsOutputReference.property.isAdjusted">IsAdjusted</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsOutputReference.property.isBasic">IsBasic</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsOutputReference.property.isDefault">IsDefault</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsOutputReference.property.isDeprecated">IsDeprecated</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsOutputReference.property.isInstanceModifiable">IsInstanceModifiable</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsOutputReference.property.isModified">IsModified</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsOutputReference.property.isPdbModifiable">IsPdbModifiable</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsOutputReference.property.isSessionModifiable">IsSessionModifiable</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsOutputReference.property.isSpecified">IsSpecified</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsOutputReference.property.isSystemModifiable">IsSystemModifiable</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsOutputReference.property.number">Number</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsOutputReference.property.ordinal">Ordinal</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsOutputReference.property.sid">Sid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsOutputReference.property.updateComment">UpdateComment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItems">DataOciDatabaseManagementManagedDatabasesDatabaseParameterItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AllowedValues`<sup>Required</sup> <a name="AllowedValues" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsOutputReference.property.allowedValues"></a>

```csharp
public DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsAllowedValuesList AllowedValues { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsAllowedValuesList">DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsAllowedValuesList</a>

---

##### `Category`<sup>Required</sup> <a name="Category" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsOutputReference.property.category"></a>

```csharp
public string Category { get; }
```

- *Type:* string

---

##### `Constraint`<sup>Required</sup> <a name="Constraint" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsOutputReference.property.constraint"></a>

```csharp
public string Constraint { get; }
```

- *Type:* string

---

##### `ContainerId`<sup>Required</sup> <a name="ContainerId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsOutputReference.property.containerId"></a>

```csharp
public double ContainerId { get; }
```

- *Type:* double

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayValue`<sup>Required</sup> <a name="DisplayValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsOutputReference.property.displayValue"></a>

```csharp
public string DisplayValue { get; }
```

- *Type:* string

---

##### `IsAdjusted`<sup>Required</sup> <a name="IsAdjusted" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsOutputReference.property.isAdjusted"></a>

```csharp
public IResolvable IsAdjusted { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IsBasic`<sup>Required</sup> <a name="IsBasic" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsOutputReference.property.isBasic"></a>

```csharp
public IResolvable IsBasic { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IsDefault`<sup>Required</sup> <a name="IsDefault" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsOutputReference.property.isDefault"></a>

```csharp
public IResolvable IsDefault { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IsDeprecated`<sup>Required</sup> <a name="IsDeprecated" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsOutputReference.property.isDeprecated"></a>

```csharp
public IResolvable IsDeprecated { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IsInstanceModifiable`<sup>Required</sup> <a name="IsInstanceModifiable" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsOutputReference.property.isInstanceModifiable"></a>

```csharp
public IResolvable IsInstanceModifiable { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IsModified`<sup>Required</sup> <a name="IsModified" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsOutputReference.property.isModified"></a>

```csharp
public string IsModified { get; }
```

- *Type:* string

---

##### `IsPdbModifiable`<sup>Required</sup> <a name="IsPdbModifiable" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsOutputReference.property.isPdbModifiable"></a>

```csharp
public IResolvable IsPdbModifiable { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IsSessionModifiable`<sup>Required</sup> <a name="IsSessionModifiable" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsOutputReference.property.isSessionModifiable"></a>

```csharp
public IResolvable IsSessionModifiable { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IsSpecified`<sup>Required</sup> <a name="IsSpecified" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsOutputReference.property.isSpecified"></a>

```csharp
public IResolvable IsSpecified { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IsSystemModifiable`<sup>Required</sup> <a name="IsSystemModifiable" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsOutputReference.property.isSystemModifiable"></a>

```csharp
public string IsSystemModifiable { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Number`<sup>Required</sup> <a name="Number" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsOutputReference.property.number"></a>

```csharp
public double Number { get; }
```

- *Type:* double

---

##### `Ordinal`<sup>Required</sup> <a name="Ordinal" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsOutputReference.property.ordinal"></a>

```csharp
public double Ordinal { get; }
```

- *Type:* double

---

##### `Sid`<sup>Required</sup> <a name="Sid" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsOutputReference.property.sid"></a>

```csharp
public string Sid { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `UpdateComment`<sup>Required</sup> <a name="UpdateComment" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsOutputReference.property.updateComment"></a>

```csharp
public string UpdateComment { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsOutputReference.property.internalValue"></a>

```csharp
public DataOciDatabaseManagementManagedDatabasesDatabaseParameterItems InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItems">DataOciDatabaseManagementManagedDatabasesDatabaseParameterItems</a>

---



