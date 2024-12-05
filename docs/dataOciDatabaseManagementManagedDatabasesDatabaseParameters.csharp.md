# `dataOciDatabaseManagementManagedDatabasesDatabaseParameters` Submodule <a name="`dataOciDatabaseManagementManagedDatabasesDatabaseParameters` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseManagementManagedDatabasesDatabaseParameters <a name="DataOciDatabaseManagementManagedDatabasesDatabaseParameters" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_databases_database_parameters oci_database_management_managed_databases_database_parameters}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseManagementManagedDatabasesDatabaseParameters(Construct Scope, string Id, DataOciDatabaseManagementManagedDatabasesDatabaseParametersConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersConfig">DataOciDatabaseManagementManagedDatabasesDatabaseParametersConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersConfig">DataOciDatabaseManagementManagedDatabasesDatabaseParametersConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.resetIsAllowedValuesIncluded">ResetIsAllowedValuesIncluded</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.resetOpcNamedCredentialId">ResetOpcNamedCredentialId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.resetSource">ResetSource</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.putFilter"></a>

```csharp
private void PutFilter(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.putFilter.parameter.value"></a>

- *Type:* object

---

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIsAllowedValuesIncluded` <a name="ResetIsAllowedValuesIncluded" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.resetIsAllowedValuesIncluded"></a>

```csharp
private void ResetIsAllowedValuesIncluded()
```

##### `ResetName` <a name="ResetName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetOpcNamedCredentialId` <a name="ResetOpcNamedCredentialId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.resetOpcNamedCredentialId"></a>

```csharp
private void ResetOpcNamedCredentialId()
```

##### `ResetSource` <a name="ResetSource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.resetSource"></a>

```csharp
private void ResetSource()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDatabaseManagementManagedDatabasesDatabaseParameters resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDatabaseManagementManagedDatabasesDatabaseParameters.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDatabaseManagementManagedDatabasesDatabaseParameters.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDatabaseManagementManagedDatabasesDatabaseParameters.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDatabaseManagementManagedDatabasesDatabaseParameters.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciDatabaseManagementManagedDatabasesDatabaseParameters resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciDatabaseManagementManagedDatabasesDatabaseParameters to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciDatabaseManagementManagedDatabasesDatabaseParameters that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_databases_database_parameters#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseManagementManagedDatabasesDatabaseParameters to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.property.databaseParametersCollection">DatabaseParametersCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionList">DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterList">DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.property.filterInput">FilterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.property.isAllowedValuesIncludedInput">IsAllowedValuesIncludedInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.property.managedDatabaseIdInput">ManagedDatabaseIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.property.opcNamedCredentialIdInput">OpcNamedCredentialIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.property.sourceInput">SourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.property.isAllowedValuesIncluded">IsAllowedValuesIncluded</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.property.managedDatabaseId">ManagedDatabaseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.property.opcNamedCredentialId">OpcNamedCredentialId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.property.source">Source</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `DatabaseParametersCollection`<sup>Required</sup> <a name="DatabaseParametersCollection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.property.databaseParametersCollection"></a>

```csharp
public DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionList DatabaseParametersCollection { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionList">DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionList</a>

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.property.filter"></a>

```csharp
public DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterList Filter { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterList">DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterList</a>

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.property.filterInput"></a>

```csharp
public object FilterInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IsAllowedValuesIncludedInput`<sup>Optional</sup> <a name="IsAllowedValuesIncludedInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.property.isAllowedValuesIncludedInput"></a>

```csharp
public object IsAllowedValuesIncludedInput { get; }
```

- *Type:* object

---

##### `ManagedDatabaseIdInput`<sup>Optional</sup> <a name="ManagedDatabaseIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.property.managedDatabaseIdInput"></a>

```csharp
public string ManagedDatabaseIdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `OpcNamedCredentialIdInput`<sup>Optional</sup> <a name="OpcNamedCredentialIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.property.opcNamedCredentialIdInput"></a>

```csharp
public string OpcNamedCredentialIdInput { get; }
```

- *Type:* string

---

##### `SourceInput`<sup>Optional</sup> <a name="SourceInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.property.sourceInput"></a>

```csharp
public string SourceInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IsAllowedValuesIncluded`<sup>Required</sup> <a name="IsAllowedValuesIncluded" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.property.isAllowedValuesIncluded"></a>

```csharp
public object IsAllowedValuesIncluded { get; }
```

- *Type:* object

---

##### `ManagedDatabaseId`<sup>Required</sup> <a name="ManagedDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.property.managedDatabaseId"></a>

```csharp
public string ManagedDatabaseId { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `OpcNamedCredentialId`<sup>Required</sup> <a name="OpcNamedCredentialId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.property.opcNamedCredentialId"></a>

```csharp
public string OpcNamedCredentialId { get; }
```

- *Type:* string

---

##### `Source`<sup>Required</sup> <a name="Source" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.property.source"></a>

```csharp
public string Source { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseManagementManagedDatabasesDatabaseParametersConfig <a name="DataOciDatabaseManagementManagedDatabasesDatabaseParametersConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseManagementManagedDatabasesDatabaseParametersConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ManagedDatabaseId,
    object Filter = null,
    string Id = null,
    object IsAllowedValuesIncluded = null,
    string Name = null,
    string OpcNamedCredentialId = null,
    string Source = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersConfig.property.managedDatabaseId">ManagedDatabaseId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_databases_database_parameters#managed_database_id DataOciDatabaseManagementManagedDatabasesDatabaseParameters#managed_database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersConfig.property.filter">Filter</a></code> | <code>object</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_databases_database_parameters#id DataOciDatabaseManagementManagedDatabasesDatabaseParameters#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersConfig.property.isAllowedValuesIncluded">IsAllowedValuesIncluded</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_databases_database_parameters#is_allowed_values_included DataOciDatabaseManagementManagedDatabasesDatabaseParameters#is_allowed_values_included}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_databases_database_parameters#name DataOciDatabaseManagementManagedDatabasesDatabaseParameters#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersConfig.property.opcNamedCredentialId">OpcNamedCredentialId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_databases_database_parameters#opc_named_credential_id DataOciDatabaseManagementManagedDatabasesDatabaseParameters#opc_named_credential_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersConfig.property.source">Source</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_databases_database_parameters#source DataOciDatabaseManagementManagedDatabasesDatabaseParameters#source}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ManagedDatabaseId`<sup>Required</sup> <a name="ManagedDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersConfig.property.managedDatabaseId"></a>

```csharp
public string ManagedDatabaseId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_databases_database_parameters#managed_database_id DataOciDatabaseManagementManagedDatabasesDatabaseParameters#managed_database_id}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersConfig.property.filter"></a>

```csharp
public object Filter { get; set; }
```

- *Type:* object

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_databases_database_parameters#filter DataOciDatabaseManagementManagedDatabasesDatabaseParameters#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_databases_database_parameters#id DataOciDatabaseManagementManagedDatabasesDatabaseParameters#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IsAllowedValuesIncluded`<sup>Optional</sup> <a name="IsAllowedValuesIncluded" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersConfig.property.isAllowedValuesIncluded"></a>

```csharp
public object IsAllowedValuesIncluded { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_databases_database_parameters#is_allowed_values_included DataOciDatabaseManagementManagedDatabasesDatabaseParameters#is_allowed_values_included}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_databases_database_parameters#name DataOciDatabaseManagementManagedDatabasesDatabaseParameters#name}.

---

##### `OpcNamedCredentialId`<sup>Optional</sup> <a name="OpcNamedCredentialId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersConfig.property.opcNamedCredentialId"></a>

```csharp
public string OpcNamedCredentialId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_databases_database_parameters#opc_named_credential_id DataOciDatabaseManagementManagedDatabasesDatabaseParameters#opc_named_credential_id}.

---

##### `Source`<sup>Optional</sup> <a name="Source" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersConfig.property.source"></a>

```csharp
public string Source { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_databases_database_parameters#source DataOciDatabaseManagementManagedDatabasesDatabaseParameters#source}.

---

### DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollection <a name="DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollection.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollection {

};
```


### DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItems <a name="DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItems.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItems {

};
```


### DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValues <a name="DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValues" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValues"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValues.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValues {

};
```


### DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilter <a name="DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilter {
    string Name,
    string[] Values,
    object Regex = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilter.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_databases_database_parameters#name DataOciDatabaseManagementManagedDatabasesDatabaseParameters#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilter.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_databases_database_parameters#values DataOciDatabaseManagementManagedDatabasesDatabaseParameters#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilter.property.regex">Regex</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_databases_database_parameters#regex DataOciDatabaseManagementManagedDatabasesDatabaseParameters#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilter.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_databases_database_parameters#name DataOciDatabaseManagementManagedDatabasesDatabaseParameters#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilter.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_databases_database_parameters#values DataOciDatabaseManagementManagedDatabasesDatabaseParameters#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilter.property.regex"></a>

```csharp
public object Regex { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_databases_database_parameters#regex DataOciDatabaseManagementManagedDatabasesDatabaseParameters#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesList <a name="DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesList.get"></a>

```csharp
private DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesOutputReference <a name="DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesOutputReference.property.isDefault">IsDefault</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesOutputReference.property.ordinal">Ordinal</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValues">DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValues</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IsDefault`<sup>Required</sup> <a name="IsDefault" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesOutputReference.property.isDefault"></a>

```csharp
public IResolvable IsDefault { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Ordinal`<sup>Required</sup> <a name="Ordinal" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesOutputReference.property.ordinal"></a>

```csharp
public double Ordinal { get; }
```

- *Type:* double

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesOutputReference.property.internalValue"></a>

```csharp
public DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValues InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValues">DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValues</a>

---


### DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsList <a name="DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsList.get"></a>

```csharp
private DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference <a name="DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.property.allowedValues">AllowedValues</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesList">DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.property.category">Category</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.property.constraint">Constraint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.property.containerId">ContainerId</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.property.displayValue">DisplayValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.property.isAdjusted">IsAdjusted</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.property.isBasic">IsBasic</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.property.isDefault">IsDefault</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.property.isDeprecated">IsDeprecated</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.property.isInstanceModifiable">IsInstanceModifiable</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.property.isModified">IsModified</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.property.isPdbModifiable">IsPdbModifiable</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.property.isSessionModifiable">IsSessionModifiable</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.property.isSpecified">IsSpecified</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.property.isSystemModifiable">IsSystemModifiable</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.property.number">Number</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.property.ordinal">Ordinal</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.property.sid">Sid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.property.updateComment">UpdateComment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItems">DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AllowedValues`<sup>Required</sup> <a name="AllowedValues" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.property.allowedValues"></a>

```csharp
public DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesList AllowedValues { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesList">DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesList</a>

---

##### `Category`<sup>Required</sup> <a name="Category" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.property.category"></a>

```csharp
public string Category { get; }
```

- *Type:* string

---

##### `Constraint`<sup>Required</sup> <a name="Constraint" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.property.constraint"></a>

```csharp
public string Constraint { get; }
```

- *Type:* string

---

##### `ContainerId`<sup>Required</sup> <a name="ContainerId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.property.containerId"></a>

```csharp
public double ContainerId { get; }
```

- *Type:* double

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayValue`<sup>Required</sup> <a name="DisplayValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.property.displayValue"></a>

```csharp
public string DisplayValue { get; }
```

- *Type:* string

---

##### `IsAdjusted`<sup>Required</sup> <a name="IsAdjusted" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.property.isAdjusted"></a>

```csharp
public IResolvable IsAdjusted { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IsBasic`<sup>Required</sup> <a name="IsBasic" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.property.isBasic"></a>

```csharp
public IResolvable IsBasic { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IsDefault`<sup>Required</sup> <a name="IsDefault" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.property.isDefault"></a>

```csharp
public IResolvable IsDefault { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IsDeprecated`<sup>Required</sup> <a name="IsDeprecated" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.property.isDeprecated"></a>

```csharp
public IResolvable IsDeprecated { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IsInstanceModifiable`<sup>Required</sup> <a name="IsInstanceModifiable" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.property.isInstanceModifiable"></a>

```csharp
public IResolvable IsInstanceModifiable { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IsModified`<sup>Required</sup> <a name="IsModified" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.property.isModified"></a>

```csharp
public string IsModified { get; }
```

- *Type:* string

---

##### `IsPdbModifiable`<sup>Required</sup> <a name="IsPdbModifiable" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.property.isPdbModifiable"></a>

```csharp
public IResolvable IsPdbModifiable { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IsSessionModifiable`<sup>Required</sup> <a name="IsSessionModifiable" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.property.isSessionModifiable"></a>

```csharp
public IResolvable IsSessionModifiable { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IsSpecified`<sup>Required</sup> <a name="IsSpecified" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.property.isSpecified"></a>

```csharp
public IResolvable IsSpecified { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IsSystemModifiable`<sup>Required</sup> <a name="IsSystemModifiable" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.property.isSystemModifiable"></a>

```csharp
public string IsSystemModifiable { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Number`<sup>Required</sup> <a name="Number" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.property.number"></a>

```csharp
public double Number { get; }
```

- *Type:* double

---

##### `Ordinal`<sup>Required</sup> <a name="Ordinal" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.property.ordinal"></a>

```csharp
public double Ordinal { get; }
```

- *Type:* double

---

##### `Sid`<sup>Required</sup> <a name="Sid" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.property.sid"></a>

```csharp
public string Sid { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `UpdateComment`<sup>Required</sup> <a name="UpdateComment" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.property.updateComment"></a>

```csharp
public string UpdateComment { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.property.internalValue"></a>

```csharp
public DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItems InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItems">DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItems</a>

---


### DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionList <a name="DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionList.get"></a>

```csharp
private DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionOutputReference <a name="DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionOutputReference.property.databaseName">DatabaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionOutputReference.property.databaseSubType">DatabaseSubType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionOutputReference.property.databaseType">DatabaseType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionOutputReference.property.databaseVersion">DatabaseVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsList">DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollection">DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionOutputReference.property.databaseName"></a>

```csharp
public string DatabaseName { get; }
```

- *Type:* string

---

##### `DatabaseSubType`<sup>Required</sup> <a name="DatabaseSubType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionOutputReference.property.databaseSubType"></a>

```csharp
public string DatabaseSubType { get; }
```

- *Type:* string

---

##### `DatabaseType`<sup>Required</sup> <a name="DatabaseType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionOutputReference.property.databaseType"></a>

```csharp
public string DatabaseType { get; }
```

- *Type:* string

---

##### `DatabaseVersion`<sup>Required</sup> <a name="DatabaseVersion" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionOutputReference.property.databaseVersion"></a>

```csharp
public string DatabaseVersion { get; }
```

- *Type:* string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionOutputReference.property.items"></a>

```csharp
public DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsList Items { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsList">DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionOutputReference.property.internalValue"></a>

```csharp
public DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollection InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollection">DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollection</a>

---


### DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterList <a name="DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterList.get"></a>

```csharp
private DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterOutputReference <a name="DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterOutputReference.resetRegex"></a>

```csharp
private void ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterOutputReference.property.regex">Regex</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterOutputReference.property.regexInput"></a>

```csharp
public object RegexInput { get; }
```

- *Type:* object

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterOutputReference.property.regex"></a>

```csharp
public object Regex { get; }
```

- *Type:* object

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



