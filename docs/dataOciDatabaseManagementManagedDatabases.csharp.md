# `dataOciDatabaseManagementManagedDatabases` Submodule <a name="`dataOciDatabaseManagementManagedDatabases` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseManagementManagedDatabases <a name="DataOciDatabaseManagementManagedDatabases" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabases"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_databases oci_database_management_managed_databases}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabases.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseManagementManagedDatabases(Construct Scope, string Id, DataOciDatabaseManagementManagedDatabasesConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabases.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabases.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabases.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesConfig">DataOciDatabaseManagementManagedDatabasesConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabases.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabases.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabases.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesConfig">DataOciDatabaseManagementManagedDatabasesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabases.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabases.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabases.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabases.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabases.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabases.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabases.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabases.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabases.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabases.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabases.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabases.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabases.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabases.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabases.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabases.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabases.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabases.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabases.resetDeploymentType">ResetDeploymentType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabases.resetExternalExadataInfrastructureId">ResetExternalExadataInfrastructureId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabases.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabases.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabases.resetManagementOption">ResetManagementOption</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabases.resetName">ResetName</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabases.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabases.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabases.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabases.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabases.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabases.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabases.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabases.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabases.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabases.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabases.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabases.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabases.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabases.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabases.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabases.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabases.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabases.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabases.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabases.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabases.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabases.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabases.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabases.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabases.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabases.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabases.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabases.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabases.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabases.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabases.putFilter"></a>

```csharp
private void PutFilter(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabases.putFilter.parameter.value"></a>

- *Type:* object

---

##### `ResetDeploymentType` <a name="ResetDeploymentType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabases.resetDeploymentType"></a>

```csharp
private void ResetDeploymentType()
```

##### `ResetExternalExadataInfrastructureId` <a name="ResetExternalExadataInfrastructureId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabases.resetExternalExadataInfrastructureId"></a>

```csharp
private void ResetExternalExadataInfrastructureId()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabases.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabases.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetManagementOption` <a name="ResetManagementOption" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabases.resetManagementOption"></a>

```csharp
private void ResetManagementOption()
```

##### `ResetName` <a name="ResetName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabases.resetName"></a>

```csharp
private void ResetName()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabases.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabases.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabases.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabases.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDatabaseManagementManagedDatabases resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabases.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDatabaseManagementManagedDatabases.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabases.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabases.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDatabaseManagementManagedDatabases.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabases.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabases.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDatabaseManagementManagedDatabases.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabases.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabases.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDatabaseManagementManagedDatabases.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciDatabaseManagementManagedDatabases resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabases.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabases.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciDatabaseManagementManagedDatabases to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabases.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciDatabaseManagementManagedDatabases that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_databases#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabases.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseManagementManagedDatabases to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabases.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabases.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabases.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabases.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabases.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabases.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabases.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabases.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabases.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabases.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabases.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabases.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabases.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesFilterList">DataOciDatabaseManagementManagedDatabasesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabases.property.managedDatabaseCollection">ManagedDatabaseCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionList">DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabases.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabases.property.deploymentTypeInput">DeploymentTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabases.property.externalExadataInfrastructureIdInput">ExternalExadataInfrastructureIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabases.property.filterInput">FilterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabases.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabases.property.managementOptionInput">ManagementOptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabases.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabases.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabases.property.deploymentType">DeploymentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabases.property.externalExadataInfrastructureId">ExternalExadataInfrastructureId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabases.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabases.property.managementOption">ManagementOption</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabases.property.name">Name</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabases.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabases.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabases.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabases.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabases.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabases.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabases.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabases.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabases.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabases.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabases.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabases.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabases.property.filter"></a>

```csharp
public DataOciDatabaseManagementManagedDatabasesFilterList Filter { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesFilterList">DataOciDatabaseManagementManagedDatabasesFilterList</a>

---

##### `ManagedDatabaseCollection`<sup>Required</sup> <a name="ManagedDatabaseCollection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabases.property.managedDatabaseCollection"></a>

```csharp
public DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionList ManagedDatabaseCollection { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionList">DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionList</a>

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabases.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `DeploymentTypeInput`<sup>Optional</sup> <a name="DeploymentTypeInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabases.property.deploymentTypeInput"></a>

```csharp
public string DeploymentTypeInput { get; }
```

- *Type:* string

---

##### `ExternalExadataInfrastructureIdInput`<sup>Optional</sup> <a name="ExternalExadataInfrastructureIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabases.property.externalExadataInfrastructureIdInput"></a>

```csharp
public string ExternalExadataInfrastructureIdInput { get; }
```

- *Type:* string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabases.property.filterInput"></a>

```csharp
public object FilterInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabases.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ManagementOptionInput`<sup>Optional</sup> <a name="ManagementOptionInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabases.property.managementOptionInput"></a>

```csharp
public string ManagementOptionInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabases.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabases.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `DeploymentType`<sup>Required</sup> <a name="DeploymentType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabases.property.deploymentType"></a>

```csharp
public string DeploymentType { get; }
```

- *Type:* string

---

##### `ExternalExadataInfrastructureId`<sup>Required</sup> <a name="ExternalExadataInfrastructureId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabases.property.externalExadataInfrastructureId"></a>

```csharp
public string ExternalExadataInfrastructureId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabases.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ManagementOption`<sup>Required</sup> <a name="ManagementOption" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabases.property.managementOption"></a>

```csharp
public string ManagementOption { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabases.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabases.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabases.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseManagementManagedDatabasesConfig <a name="DataOciDatabaseManagementManagedDatabasesConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseManagementManagedDatabasesConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string CompartmentId,
    string DeploymentType = null,
    string ExternalExadataInfrastructureId = null,
    object Filter = null,
    string Id = null,
    string ManagementOption = null,
    string Name = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_databases#compartment_id DataOciDatabaseManagementManagedDatabases#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesConfig.property.deploymentType">DeploymentType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_databases#deployment_type DataOciDatabaseManagementManagedDatabases#deployment_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesConfig.property.externalExadataInfrastructureId">ExternalExadataInfrastructureId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_databases#external_exadata_infrastructure_id DataOciDatabaseManagementManagedDatabases#external_exadata_infrastructure_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesConfig.property.filter">Filter</a></code> | <code>object</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_databases#id DataOciDatabaseManagementManagedDatabases#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesConfig.property.managementOption">ManagementOption</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_databases#management_option DataOciDatabaseManagementManagedDatabases#management_option}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_databases#name DataOciDatabaseManagementManagedDatabases#name}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_databases#compartment_id DataOciDatabaseManagementManagedDatabases#compartment_id}.

---

##### `DeploymentType`<sup>Optional</sup> <a name="DeploymentType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesConfig.property.deploymentType"></a>

```csharp
public string DeploymentType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_databases#deployment_type DataOciDatabaseManagementManagedDatabases#deployment_type}.

---

##### `ExternalExadataInfrastructureId`<sup>Optional</sup> <a name="ExternalExadataInfrastructureId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesConfig.property.externalExadataInfrastructureId"></a>

```csharp
public string ExternalExadataInfrastructureId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_databases#external_exadata_infrastructure_id DataOciDatabaseManagementManagedDatabases#external_exadata_infrastructure_id}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesConfig.property.filter"></a>

```csharp
public object Filter { get; set; }
```

- *Type:* object

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_databases#filter DataOciDatabaseManagementManagedDatabases#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_databases#id DataOciDatabaseManagementManagedDatabases#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ManagementOption`<sup>Optional</sup> <a name="ManagementOption" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesConfig.property.managementOption"></a>

```csharp
public string ManagementOption { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_databases#management_option DataOciDatabaseManagementManagedDatabases#management_option}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_databases#name DataOciDatabaseManagementManagedDatabases#name}.

---

### DataOciDatabaseManagementManagedDatabasesFilter <a name="DataOciDatabaseManagementManagedDatabasesFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseManagementManagedDatabasesFilter {
    string Name,
    string[] Values,
    object Regex = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesFilter.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_databases#name DataOciDatabaseManagementManagedDatabases#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesFilter.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_databases#values DataOciDatabaseManagementManagedDatabases#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesFilter.property.regex">Regex</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_databases#regex DataOciDatabaseManagementManagedDatabases#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesFilter.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_databases#name DataOciDatabaseManagementManagedDatabases#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesFilter.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_databases#values DataOciDatabaseManagementManagedDatabases#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesFilter.property.regex"></a>

```csharp
public object Regex { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_databases#regex DataOciDatabaseManagementManagedDatabases#regex}.

---

### DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollection <a name="DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollection.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollection {

};
```


### DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItems <a name="DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItems.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItems {

};
```


### DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigs <a name="DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigs" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigs"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigs.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigs {

};
```


### DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsConnectorDetails <a name="DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsConnectorDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsConnectorDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsConnectorDetails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsConnectorDetails {

};
```


### DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetails <a name="DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetails {

};
```


### DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentials <a name="DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentials" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentials"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentials.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentials {

};
```


### DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionString <a name="DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionString"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionString.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionString {

};
```


### DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsManagedDatabaseGroups <a name="DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsManagedDatabaseGroups" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsManagedDatabaseGroups"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsManagedDatabaseGroups.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsManagedDatabaseGroups {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseManagementManagedDatabasesFilterList <a name="DataOciDatabaseManagementManagedDatabasesFilterList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesFilterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseManagementManagedDatabasesFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesFilterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesFilterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesFilterList.get"></a>

```csharp
private DataOciDatabaseManagementManagedDatabasesFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesFilterList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesFilterList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciDatabaseManagementManagedDatabasesFilterOutputReference <a name="DataOciDatabaseManagementManagedDatabasesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseManagementManagedDatabasesFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesFilterOutputReference.resetRegex"></a>

```csharp
private void ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesFilterOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesFilterOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesFilterOutputReference.property.regex">Regex</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesFilterOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesFilterOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesFilterOutputReference.property.regexInput"></a>

```csharp
public object RegexInput { get; }
```

- *Type:* object

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesFilterOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesFilterOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesFilterOutputReference.property.regex"></a>

```csharp
public object Regex { get; }
```

- *Type:* object

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesFilterOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesFilterOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsConnectorDetailsList <a name="DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsConnectorDetailsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsConnectorDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsConnectorDetailsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsConnectorDetailsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsConnectorDetailsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsConnectorDetailsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsConnectorDetailsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsConnectorDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsConnectorDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsConnectorDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsConnectorDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsConnectorDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsConnectorDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsConnectorDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsConnectorDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsConnectorDetailsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsConnectorDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsConnectorDetailsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsConnectorDetailsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsConnectorDetailsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsConnectorDetailsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsConnectorDetailsList.get"></a>

```csharp
private DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsConnectorDetailsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsConnectorDetailsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsConnectorDetailsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsConnectorDetailsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsConnectorDetailsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsConnectorDetailsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsConnectorDetailsOutputReference <a name="DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsConnectorDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsConnectorDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsConnectorDetailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsConnectorDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsConnectorDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsConnectorDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsConnectorDetailsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsConnectorDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsConnectorDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsConnectorDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsConnectorDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsConnectorDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsConnectorDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsConnectorDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsConnectorDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsConnectorDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsConnectorDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsConnectorDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsConnectorDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsConnectorDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsConnectorDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsConnectorDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsConnectorDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsConnectorDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsConnectorDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsConnectorDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsConnectorDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsConnectorDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsConnectorDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsConnectorDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsConnectorDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsConnectorDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsConnectorDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsConnectorDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsConnectorDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsConnectorDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsConnectorDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsConnectorDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsConnectorDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsConnectorDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsConnectorDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsConnectorDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsConnectorDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsConnectorDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsConnectorDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsConnectorDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsConnectorDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsConnectorDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsConnectorDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsConnectorDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsConnectorDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsConnectorDetailsOutputReference.property.connectorType">ConnectorType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsConnectorDetailsOutputReference.property.databaseConnectorId">DatabaseConnectorId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsConnectorDetailsOutputReference.property.managementAgentId">ManagementAgentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsConnectorDetailsOutputReference.property.privateEndPointId">PrivateEndPointId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsConnectorDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsConnectorDetails">DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsConnectorDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsConnectorDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsConnectorDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ConnectorType`<sup>Required</sup> <a name="ConnectorType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsConnectorDetailsOutputReference.property.connectorType"></a>

```csharp
public string ConnectorType { get; }
```

- *Type:* string

---

##### `DatabaseConnectorId`<sup>Required</sup> <a name="DatabaseConnectorId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsConnectorDetailsOutputReference.property.databaseConnectorId"></a>

```csharp
public string DatabaseConnectorId { get; }
```

- *Type:* string

---

##### `ManagementAgentId`<sup>Required</sup> <a name="ManagementAgentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsConnectorDetailsOutputReference.property.managementAgentId"></a>

```csharp
public string ManagementAgentId { get; }
```

- *Type:* string

---

##### `PrivateEndPointId`<sup>Required</sup> <a name="PrivateEndPointId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsConnectorDetailsOutputReference.property.privateEndPointId"></a>

```csharp
public string PrivateEndPointId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsConnectorDetailsOutputReference.property.internalValue"></a>

```csharp
public DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsConnectorDetails InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsConnectorDetails">DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsConnectorDetails</a>

---


### DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsList <a name="DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsList.get"></a>

```csharp
private DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsOutputReference <a name="DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsOutputReference.property.credentialName">CredentialName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsOutputReference.property.credentialType">CredentialType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsOutputReference.property.namedCredentialId">NamedCredentialId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsOutputReference.property.passwordSecretId">PasswordSecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsOutputReference.property.role">Role</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsOutputReference.property.sslSecretId">SslSecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsOutputReference.property.userName">UserName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentials">DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentials</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CredentialName`<sup>Required</sup> <a name="CredentialName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsOutputReference.property.credentialName"></a>

```csharp
public string CredentialName { get; }
```

- *Type:* string

---

##### `CredentialType`<sup>Required</sup> <a name="CredentialType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsOutputReference.property.credentialType"></a>

```csharp
public string CredentialType { get; }
```

- *Type:* string

---

##### `NamedCredentialId`<sup>Required</sup> <a name="NamedCredentialId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsOutputReference.property.namedCredentialId"></a>

```csharp
public string NamedCredentialId { get; }
```

- *Type:* string

---

##### `PasswordSecretId`<sup>Required</sup> <a name="PasswordSecretId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsOutputReference.property.passwordSecretId"></a>

```csharp
public string PasswordSecretId { get; }
```

- *Type:* string

---

##### `Role`<sup>Required</sup> <a name="Role" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsOutputReference.property.role"></a>

```csharp
public string Role { get; }
```

- *Type:* string

---

##### `SslSecretId`<sup>Required</sup> <a name="SslSecretId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsOutputReference.property.sslSecretId"></a>

```csharp
public string SslSecretId { get; }
```

- *Type:* string

---

##### `UserName`<sup>Required</sup> <a name="UserName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsOutputReference.property.userName"></a>

```csharp
public string UserName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsOutputReference.property.internalValue"></a>

```csharp
public DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentials InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentials">DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentials</a>

---


### DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringList <a name="DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringList.get"></a>

```csharp
private DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringOutputReference <a name="DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringOutputReference.property.connectionType">ConnectionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringOutputReference.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringOutputReference.property.protocol">Protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringOutputReference.property.service">Service</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionString">DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionString</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ConnectionType`<sup>Required</sup> <a name="ConnectionType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringOutputReference.property.connectionType"></a>

```csharp
public string ConnectionType { get; }
```

- *Type:* string

---

##### `Port`<sup>Required</sup> <a name="Port" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringOutputReference.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringOutputReference.property.protocol"></a>

```csharp
public string Protocol { get; }
```

- *Type:* string

---

##### `Service`<sup>Required</sup> <a name="Service" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringOutputReference.property.service"></a>

```csharp
public string Service { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringOutputReference.property.internalValue"></a>

```csharp
public DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionString InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionString">DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionString</a>

---


### DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsList <a name="DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsList.get"></a>

```csharp
private DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsOutputReference <a name="DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsOutputReference.property.connectionCredentials">ConnectionCredentials</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsList">DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsOutputReference.property.connectionString">ConnectionString</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringList">DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetails">DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ConnectionCredentials`<sup>Required</sup> <a name="ConnectionCredentials" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsOutputReference.property.connectionCredentials"></a>

```csharp
public DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsList ConnectionCredentials { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsList">DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsList</a>

---

##### `ConnectionString`<sup>Required</sup> <a name="ConnectionString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsOutputReference.property.connectionString"></a>

```csharp
public DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringList ConnectionString { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringList">DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsOutputReference.property.internalValue"></a>

```csharp
public DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetails InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetails">DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetails</a>

---


### DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsList <a name="DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsList.get"></a>

```csharp
private DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsOutputReference <a name="DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsOutputReference.property.connectorDetails">ConnectorDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsConnectorDetailsList">DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsConnectorDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsOutputReference.property.databaseConnectionDetails">DatabaseConnectionDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsList">DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsOutputReference.property.feature">Feature</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsOutputReference.property.featureStatus">FeatureStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsOutputReference.property.licenseModel">LicenseModel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigs">DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ConnectorDetails`<sup>Required</sup> <a name="ConnectorDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsOutputReference.property.connectorDetails"></a>

```csharp
public DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsConnectorDetailsList ConnectorDetails { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsConnectorDetailsList">DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsConnectorDetailsList</a>

---

##### `DatabaseConnectionDetails`<sup>Required</sup> <a name="DatabaseConnectionDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsOutputReference.property.databaseConnectionDetails"></a>

```csharp
public DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsList DatabaseConnectionDetails { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsList">DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsDatabaseConnectionDetailsList</a>

---

##### `Feature`<sup>Required</sup> <a name="Feature" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsOutputReference.property.feature"></a>

```csharp
public string Feature { get; }
```

- *Type:* string

---

##### `FeatureStatus`<sup>Required</sup> <a name="FeatureStatus" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsOutputReference.property.featureStatus"></a>

```csharp
public string FeatureStatus { get; }
```

- *Type:* string

---

##### `LicenseModel`<sup>Required</sup> <a name="LicenseModel" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsOutputReference.property.licenseModel"></a>

```csharp
public string LicenseModel { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsOutputReference.property.internalValue"></a>

```csharp
public DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigs InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigs">DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigs</a>

---


### DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsList <a name="DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsList.get"></a>

```csharp
private DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsManagedDatabaseGroupsList <a name="DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsManagedDatabaseGroupsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsManagedDatabaseGroupsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsManagedDatabaseGroupsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsManagedDatabaseGroupsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsManagedDatabaseGroupsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsManagedDatabaseGroupsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsManagedDatabaseGroupsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsManagedDatabaseGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsManagedDatabaseGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsManagedDatabaseGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsManagedDatabaseGroupsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsManagedDatabaseGroupsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsManagedDatabaseGroupsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsManagedDatabaseGroupsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsManagedDatabaseGroupsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsManagedDatabaseGroupsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsManagedDatabaseGroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsManagedDatabaseGroupsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsManagedDatabaseGroupsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsManagedDatabaseGroupsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsManagedDatabaseGroupsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsManagedDatabaseGroupsList.get"></a>

```csharp
private DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsManagedDatabaseGroupsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsManagedDatabaseGroupsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsManagedDatabaseGroupsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsManagedDatabaseGroupsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsManagedDatabaseGroupsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsManagedDatabaseGroupsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsManagedDatabaseGroupsOutputReference <a name="DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsManagedDatabaseGroupsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsManagedDatabaseGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsManagedDatabaseGroupsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsManagedDatabaseGroupsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsManagedDatabaseGroupsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsManagedDatabaseGroupsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsManagedDatabaseGroupsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsManagedDatabaseGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsManagedDatabaseGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsManagedDatabaseGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsManagedDatabaseGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsManagedDatabaseGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsManagedDatabaseGroupsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsManagedDatabaseGroupsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsManagedDatabaseGroupsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsManagedDatabaseGroupsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsManagedDatabaseGroupsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsManagedDatabaseGroupsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsManagedDatabaseGroupsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsManagedDatabaseGroupsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsManagedDatabaseGroupsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsManagedDatabaseGroupsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsManagedDatabaseGroupsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsManagedDatabaseGroupsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsManagedDatabaseGroupsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsManagedDatabaseGroupsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsManagedDatabaseGroupsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsManagedDatabaseGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsManagedDatabaseGroupsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsManagedDatabaseGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsManagedDatabaseGroupsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsManagedDatabaseGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsManagedDatabaseGroupsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsManagedDatabaseGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsManagedDatabaseGroupsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsManagedDatabaseGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsManagedDatabaseGroupsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsManagedDatabaseGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsManagedDatabaseGroupsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsManagedDatabaseGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsManagedDatabaseGroupsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsManagedDatabaseGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsManagedDatabaseGroupsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsManagedDatabaseGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsManagedDatabaseGroupsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsManagedDatabaseGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsManagedDatabaseGroupsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsManagedDatabaseGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsManagedDatabaseGroupsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsManagedDatabaseGroupsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsManagedDatabaseGroupsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsManagedDatabaseGroupsOutputReference.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsManagedDatabaseGroupsOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsManagedDatabaseGroupsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsManagedDatabaseGroupsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsManagedDatabaseGroups">DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsManagedDatabaseGroups</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsManagedDatabaseGroupsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsManagedDatabaseGroupsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsManagedDatabaseGroupsOutputReference.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsManagedDatabaseGroupsOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsManagedDatabaseGroupsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsManagedDatabaseGroupsOutputReference.property.internalValue"></a>

```csharp
public DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsManagedDatabaseGroups InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsManagedDatabaseGroups">DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsManagedDatabaseGroups</a>

---


### DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsOutputReference <a name="DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsOutputReference.property.additionalDetails">AdditionalDetails</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsOutputReference.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsOutputReference.property.databasePlatformName">DatabasePlatformName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsOutputReference.property.databaseStatus">DatabaseStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsOutputReference.property.databaseSubType">DatabaseSubType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsOutputReference.property.databaseType">DatabaseType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsOutputReference.property.databaseVersion">DatabaseVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsOutputReference.property.dbmgmtFeatureConfigs">DbmgmtFeatureConfigs</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsList">DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsOutputReference.property.dbSystemId">DbSystemId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsOutputReference.property.definedTags">DefinedTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsOutputReference.property.deploymentType">DeploymentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsOutputReference.property.freeformTags">FreeformTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsOutputReference.property.isCluster">IsCluster</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsOutputReference.property.managedDatabaseGroups">ManagedDatabaseGroups</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsManagedDatabaseGroupsList">DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsManagedDatabaseGroupsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsOutputReference.property.managementOption">ManagementOption</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsOutputReference.property.parentContainerId">ParentContainerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsOutputReference.property.storageSystemId">StorageSystemId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsOutputReference.property.systemTags">SystemTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsOutputReference.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsOutputReference.property.workloadType">WorkloadType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItems">DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AdditionalDetails`<sup>Required</sup> <a name="AdditionalDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsOutputReference.property.additionalDetails"></a>

```csharp
public StringMap AdditionalDetails { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsOutputReference.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `DatabasePlatformName`<sup>Required</sup> <a name="DatabasePlatformName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsOutputReference.property.databasePlatformName"></a>

```csharp
public string DatabasePlatformName { get; }
```

- *Type:* string

---

##### `DatabaseStatus`<sup>Required</sup> <a name="DatabaseStatus" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsOutputReference.property.databaseStatus"></a>

```csharp
public string DatabaseStatus { get; }
```

- *Type:* string

---

##### `DatabaseSubType`<sup>Required</sup> <a name="DatabaseSubType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsOutputReference.property.databaseSubType"></a>

```csharp
public string DatabaseSubType { get; }
```

- *Type:* string

---

##### `DatabaseType`<sup>Required</sup> <a name="DatabaseType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsOutputReference.property.databaseType"></a>

```csharp
public string DatabaseType { get; }
```

- *Type:* string

---

##### `DatabaseVersion`<sup>Required</sup> <a name="DatabaseVersion" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsOutputReference.property.databaseVersion"></a>

```csharp
public string DatabaseVersion { get; }
```

- *Type:* string

---

##### `DbmgmtFeatureConfigs`<sup>Required</sup> <a name="DbmgmtFeatureConfigs" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsOutputReference.property.dbmgmtFeatureConfigs"></a>

```csharp
public DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsList DbmgmtFeatureConfigs { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsList">DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsDbmgmtFeatureConfigsList</a>

---

##### `DbSystemId`<sup>Required</sup> <a name="DbSystemId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsOutputReference.property.dbSystemId"></a>

```csharp
public string DbSystemId { get; }
```

- *Type:* string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsOutputReference.property.definedTags"></a>

```csharp
public StringMap DefinedTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `DeploymentType`<sup>Required</sup> <a name="DeploymentType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsOutputReference.property.deploymentType"></a>

```csharp
public string DeploymentType { get; }
```

- *Type:* string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsOutputReference.property.freeformTags"></a>

```csharp
public StringMap FreeformTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IsCluster`<sup>Required</sup> <a name="IsCluster" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsOutputReference.property.isCluster"></a>

```csharp
public IResolvable IsCluster { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `ManagedDatabaseGroups`<sup>Required</sup> <a name="ManagedDatabaseGroups" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsOutputReference.property.managedDatabaseGroups"></a>

```csharp
public DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsManagedDatabaseGroupsList ManagedDatabaseGroups { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsManagedDatabaseGroupsList">DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsManagedDatabaseGroupsList</a>

---

##### `ManagementOption`<sup>Required</sup> <a name="ManagementOption" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsOutputReference.property.managementOption"></a>

```csharp
public string ManagementOption { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ParentContainerId`<sup>Required</sup> <a name="ParentContainerId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsOutputReference.property.parentContainerId"></a>

```csharp
public string ParentContainerId { get; }
```

- *Type:* string

---

##### `StorageSystemId`<sup>Required</sup> <a name="StorageSystemId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsOutputReference.property.storageSystemId"></a>

```csharp
public string StorageSystemId { get; }
```

- *Type:* string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsOutputReference.property.systemTags"></a>

```csharp
public StringMap SystemTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsOutputReference.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `WorkloadType`<sup>Required</sup> <a name="WorkloadType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsOutputReference.property.workloadType"></a>

```csharp
public string WorkloadType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsOutputReference.property.internalValue"></a>

```csharp
public DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItems InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItems">DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItems</a>

---


### DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionList <a name="DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionList.get"></a>

```csharp
private DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionOutputReference <a name="DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsList">DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollection">DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionOutputReference.property.items"></a>

```csharp
public DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsList Items { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsList">DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollectionOutputReference.property.internalValue"></a>

```csharp
public DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollection InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabases.DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollection">DataOciDatabaseManagementManagedDatabasesManagedDatabaseCollection</a>

---



