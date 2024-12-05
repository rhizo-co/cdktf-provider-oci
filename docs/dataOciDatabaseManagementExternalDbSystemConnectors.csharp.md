# `dataOciDatabaseManagementExternalDbSystemConnectors` Submodule <a name="`dataOciDatabaseManagementExternalDbSystemConnectors` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseManagementExternalDbSystemConnectors <a name="DataOciDatabaseManagementExternalDbSystemConnectors" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_db_system_connectors oci_database_management_external_db_system_connectors}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseManagementExternalDbSystemConnectors(Construct Scope, string Id, DataOciDatabaseManagementExternalDbSystemConnectorsConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsConfig">DataOciDatabaseManagementExternalDbSystemConnectorsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsConfig">DataOciDatabaseManagementExternalDbSystemConnectorsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.resetCompartmentId">ResetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.resetExternalDbSystemId">ResetExternalDbSystemId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.putFilter"></a>

```csharp
private void PutFilter(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.putFilter.parameter.value"></a>

- *Type:* object

---

##### `ResetCompartmentId` <a name="ResetCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.resetCompartmentId"></a>

```csharp
private void ResetCompartmentId()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetExternalDbSystemId` <a name="ResetExternalDbSystemId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.resetExternalDbSystemId"></a>

```csharp
private void ResetExternalDbSystemId()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDatabaseManagementExternalDbSystemConnectors resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDatabaseManagementExternalDbSystemConnectors.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDatabaseManagementExternalDbSystemConnectors.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDatabaseManagementExternalDbSystemConnectors.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDatabaseManagementExternalDbSystemConnectors.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciDatabaseManagementExternalDbSystemConnectors resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciDatabaseManagementExternalDbSystemConnectors to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciDatabaseManagementExternalDbSystemConnectors that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_db_system_connectors#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseManagementExternalDbSystemConnectors to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.property.externalDbSystemConnectorCollection">ExternalDbSystemConnectorCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionList">DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterList">DataOciDatabaseManagementExternalDbSystemConnectorsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.property.externalDbSystemIdInput">ExternalDbSystemIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.property.filterInput">FilterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.property.externalDbSystemId">ExternalDbSystemId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `ExternalDbSystemConnectorCollection`<sup>Required</sup> <a name="ExternalDbSystemConnectorCollection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.property.externalDbSystemConnectorCollection"></a>

```csharp
public DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionList ExternalDbSystemConnectorCollection { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionList">DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionList</a>

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.property.filter"></a>

```csharp
public DataOciDatabaseManagementExternalDbSystemConnectorsFilterList Filter { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterList">DataOciDatabaseManagementExternalDbSystemConnectorsFilterList</a>

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `ExternalDbSystemIdInput`<sup>Optional</sup> <a name="ExternalDbSystemIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.property.externalDbSystemIdInput"></a>

```csharp
public string ExternalDbSystemIdInput { get; }
```

- *Type:* string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.property.filterInput"></a>

```csharp
public object FilterInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `ExternalDbSystemId`<sup>Required</sup> <a name="ExternalDbSystemId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.property.externalDbSystemId"></a>

```csharp
public string ExternalDbSystemId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseManagementExternalDbSystemConnectorsConfig <a name="DataOciDatabaseManagementExternalDbSystemConnectorsConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseManagementExternalDbSystemConnectorsConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string CompartmentId = null,
    string DisplayName = null,
    string ExternalDbSystemId = null,
    object Filter = null,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_db_system_connectors#compartment_id DataOciDatabaseManagementExternalDbSystemConnectors#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_db_system_connectors#display_name DataOciDatabaseManagementExternalDbSystemConnectors#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsConfig.property.externalDbSystemId">ExternalDbSystemId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_db_system_connectors#external_db_system_id DataOciDatabaseManagementExternalDbSystemConnectors#external_db_system_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsConfig.property.filter">Filter</a></code> | <code>object</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_db_system_connectors#id DataOciDatabaseManagementExternalDbSystemConnectors#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CompartmentId`<sup>Optional</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_db_system_connectors#compartment_id DataOciDatabaseManagementExternalDbSystemConnectors#compartment_id}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_db_system_connectors#display_name DataOciDatabaseManagementExternalDbSystemConnectors#display_name}.

---

##### `ExternalDbSystemId`<sup>Optional</sup> <a name="ExternalDbSystemId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsConfig.property.externalDbSystemId"></a>

```csharp
public string ExternalDbSystemId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_db_system_connectors#external_db_system_id DataOciDatabaseManagementExternalDbSystemConnectors#external_db_system_id}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsConfig.property.filter"></a>

```csharp
public object Filter { get; set; }
```

- *Type:* object

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_db_system_connectors#filter DataOciDatabaseManagementExternalDbSystemConnectors#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_db_system_connectors#id DataOciDatabaseManagementExternalDbSystemConnectors#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollection <a name="DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollection.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollection {

};
```


### DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItems <a name="DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItems.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItems {

};
```


### DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfo <a name="DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfo" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfo"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfo.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfo {

};
```


### DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentials <a name="DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentials" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentials"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentials.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentials {

};
```


### DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionString <a name="DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionString"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionString.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionString {

};
```


### DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredential <a name="DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredential" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredential"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredential.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredential {

};
```


### DataOciDatabaseManagementExternalDbSystemConnectorsFilter <a name="DataOciDatabaseManagementExternalDbSystemConnectorsFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseManagementExternalDbSystemConnectorsFilter {
    string Name,
    string[] Values,
    object Regex = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilter.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_db_system_connectors#name DataOciDatabaseManagementExternalDbSystemConnectors#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilter.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_db_system_connectors#values DataOciDatabaseManagementExternalDbSystemConnectors#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilter.property.regex">Regex</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_db_system_connectors#regex DataOciDatabaseManagementExternalDbSystemConnectors#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilter.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_db_system_connectors#name DataOciDatabaseManagementExternalDbSystemConnectors#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilter.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_db_system_connectors#values DataOciDatabaseManagementExternalDbSystemConnectors#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilter.property.regex"></a>

```csharp
public object Regex { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_db_system_connectors#regex DataOciDatabaseManagementExternalDbSystemConnectors#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsList <a name="DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsList.get"></a>

```csharp
private DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsOutputReference <a name="DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsOutputReference.property.credentialName">CredentialName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsOutputReference.property.credentialType">CredentialType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsOutputReference.property.namedCredentialId">NamedCredentialId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsOutputReference.property.passwordSecretId">PasswordSecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsOutputReference.property.role">Role</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsOutputReference.property.sslSecretId">SslSecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsOutputReference.property.userName">UserName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentials">DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentials</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CredentialName`<sup>Required</sup> <a name="CredentialName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsOutputReference.property.credentialName"></a>

```csharp
public string CredentialName { get; }
```

- *Type:* string

---

##### `CredentialType`<sup>Required</sup> <a name="CredentialType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsOutputReference.property.credentialType"></a>

```csharp
public string CredentialType { get; }
```

- *Type:* string

---

##### `NamedCredentialId`<sup>Required</sup> <a name="NamedCredentialId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsOutputReference.property.namedCredentialId"></a>

```csharp
public string NamedCredentialId { get; }
```

- *Type:* string

---

##### `PasswordSecretId`<sup>Required</sup> <a name="PasswordSecretId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsOutputReference.property.passwordSecretId"></a>

```csharp
public string PasswordSecretId { get; }
```

- *Type:* string

---

##### `Role`<sup>Required</sup> <a name="Role" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsOutputReference.property.role"></a>

```csharp
public string Role { get; }
```

- *Type:* string

---

##### `SslSecretId`<sup>Required</sup> <a name="SslSecretId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsOutputReference.property.sslSecretId"></a>

```csharp
public string SslSecretId { get; }
```

- *Type:* string

---

##### `UserName`<sup>Required</sup> <a name="UserName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsOutputReference.property.userName"></a>

```csharp
public string UserName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsOutputReference.property.internalValue"></a>

```csharp
public DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentials InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentials">DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentials</a>

---


### DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringList <a name="DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringList.get"></a>

```csharp
private DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringOutputReference <a name="DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringOutputReference.property.hostName">HostName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringOutputReference.property.hosts">Hosts</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringOutputReference.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringOutputReference.property.protocol">Protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringOutputReference.property.service">Service</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionString">DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionString</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `HostName`<sup>Required</sup> <a name="HostName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringOutputReference.property.hostName"></a>

```csharp
public string HostName { get; }
```

- *Type:* string

---

##### `Hosts`<sup>Required</sup> <a name="Hosts" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringOutputReference.property.hosts"></a>

```csharp
public string[] Hosts { get; }
```

- *Type:* string[]

---

##### `Port`<sup>Required</sup> <a name="Port" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringOutputReference.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringOutputReference.property.protocol"></a>

```csharp
public string Protocol { get; }
```

- *Type:* string

---

##### `Service`<sup>Required</sup> <a name="Service" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringOutputReference.property.service"></a>

```csharp
public string Service { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringOutputReference.property.internalValue"></a>

```csharp
public DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionString InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionString">DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionString</a>

---


### DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialList <a name="DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialList.get"></a>

```csharp
private DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialOutputReference <a name="DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialOutputReference.property.credentialType">CredentialType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialOutputReference.property.namedCredentialId">NamedCredentialId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialOutputReference.property.password">Password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialOutputReference.property.passwordSecretId">PasswordSecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialOutputReference.property.role">Role</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialOutputReference.property.username">Username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredential">DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredential</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CredentialType`<sup>Required</sup> <a name="CredentialType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialOutputReference.property.credentialType"></a>

```csharp
public string CredentialType { get; }
```

- *Type:* string

---

##### `NamedCredentialId`<sup>Required</sup> <a name="NamedCredentialId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialOutputReference.property.namedCredentialId"></a>

```csharp
public string NamedCredentialId { get; }
```

- *Type:* string

---

##### `Password`<sup>Required</sup> <a name="Password" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialOutputReference.property.password"></a>

```csharp
public string Password { get; }
```

- *Type:* string

---

##### `PasswordSecretId`<sup>Required</sup> <a name="PasswordSecretId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialOutputReference.property.passwordSecretId"></a>

```csharp
public string PasswordSecretId { get; }
```

- *Type:* string

---

##### `Role`<sup>Required</sup> <a name="Role" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialOutputReference.property.role"></a>

```csharp
public string Role { get; }
```

- *Type:* string

---

##### `Username`<sup>Required</sup> <a name="Username" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialOutputReference.property.username"></a>

```csharp
public string Username { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialOutputReference.property.internalValue"></a>

```csharp
public DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredential InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredential">DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredential</a>

---


### DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoList <a name="DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoList.get"></a>

```csharp
private DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoOutputReference <a name="DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoOutputReference.property.componentType">ComponentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoOutputReference.property.connectionCredentials">ConnectionCredentials</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsList">DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoOutputReference.property.connectionString">ConnectionString</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringList">DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoOutputReference.property.databaseCredential">DatabaseCredential</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialList">DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfo">DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ComponentType`<sup>Required</sup> <a name="ComponentType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoOutputReference.property.componentType"></a>

```csharp
public string ComponentType { get; }
```

- *Type:* string

---

##### `ConnectionCredentials`<sup>Required</sup> <a name="ConnectionCredentials" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoOutputReference.property.connectionCredentials"></a>

```csharp
public DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsList ConnectionCredentials { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsList">DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsList</a>

---

##### `ConnectionString`<sup>Required</sup> <a name="ConnectionString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoOutputReference.property.connectionString"></a>

```csharp
public DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringList ConnectionString { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringList">DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringList</a>

---

##### `DatabaseCredential`<sup>Required</sup> <a name="DatabaseCredential" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoOutputReference.property.databaseCredential"></a>

```csharp
public DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialList DatabaseCredential { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialList">DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoOutputReference.property.internalValue"></a>

```csharp
public DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfo InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfo">DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfo</a>

---


### DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsList <a name="DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsList.get"></a>

```csharp
private DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference <a name="DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.property.agentId">AgentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.property.connectionFailureMessage">ConnectionFailureMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.property.connectionInfo">ConnectionInfo</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoList">DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.property.connectionStatus">ConnectionStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.property.connectorType">ConnectorType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.property.definedTags">DefinedTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.property.externalDbSystemId">ExternalDbSystemId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.property.freeformTags">FreeformTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.property.lifecycleDetails">LifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.property.systemTags">SystemTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.property.timeConnectionStatusLastUpdated">TimeConnectionStatusLastUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.property.timeUpdated">TimeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItems">DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AgentId`<sup>Required</sup> <a name="AgentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.property.agentId"></a>

```csharp
public string AgentId { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `ConnectionFailureMessage`<sup>Required</sup> <a name="ConnectionFailureMessage" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.property.connectionFailureMessage"></a>

```csharp
public string ConnectionFailureMessage { get; }
```

- *Type:* string

---

##### `ConnectionInfo`<sup>Required</sup> <a name="ConnectionInfo" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.property.connectionInfo"></a>

```csharp
public DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoList ConnectionInfo { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoList">DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoList</a>

---

##### `ConnectionStatus`<sup>Required</sup> <a name="ConnectionStatus" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.property.connectionStatus"></a>

```csharp
public string ConnectionStatus { get; }
```

- *Type:* string

---

##### `ConnectorType`<sup>Required</sup> <a name="ConnectorType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.property.connectorType"></a>

```csharp
public string ConnectorType { get; }
```

- *Type:* string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.property.definedTags"></a>

```csharp
public StringMap DefinedTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `ExternalDbSystemId`<sup>Required</sup> <a name="ExternalDbSystemId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.property.externalDbSystemId"></a>

```csharp
public string ExternalDbSystemId { get; }
```

- *Type:* string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.property.freeformTags"></a>

```csharp
public StringMap FreeformTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.property.lifecycleDetails"></a>

```csharp
public string LifecycleDetails { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.property.systemTags"></a>

```csharp
public StringMap SystemTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `TimeConnectionStatusLastUpdated`<sup>Required</sup> <a name="TimeConnectionStatusLastUpdated" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.property.timeConnectionStatusLastUpdated"></a>

```csharp
public string TimeConnectionStatusLastUpdated { get; }
```

- *Type:* string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.property.timeUpdated"></a>

```csharp
public string TimeUpdated { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.property.internalValue"></a>

```csharp
public DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItems InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItems">DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItems</a>

---


### DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionList <a name="DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionList.get"></a>

```csharp
private DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionOutputReference <a name="DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsList">DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollection">DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionOutputReference.property.items"></a>

```csharp
public DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsList Items { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsList">DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionOutputReference.property.internalValue"></a>

```csharp
public DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollection InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollection">DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollection</a>

---


### DataOciDatabaseManagementExternalDbSystemConnectorsFilterList <a name="DataOciDatabaseManagementExternalDbSystemConnectorsFilterList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseManagementExternalDbSystemConnectorsFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterList.get"></a>

```csharp
private DataOciDatabaseManagementExternalDbSystemConnectorsFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciDatabaseManagementExternalDbSystemConnectorsFilterOutputReference <a name="DataOciDatabaseManagementExternalDbSystemConnectorsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseManagementExternalDbSystemConnectorsFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterOutputReference.resetRegex"></a>

```csharp
private void ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterOutputReference.property.regex">Regex</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterOutputReference.property.regexInput"></a>

```csharp
public object RegexInput { get; }
```

- *Type:* object

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterOutputReference.property.regex"></a>

```csharp
public object Regex { get; }
```

- *Type:* object

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



