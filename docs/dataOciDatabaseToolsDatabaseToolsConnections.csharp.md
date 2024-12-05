# `dataOciDatabaseToolsDatabaseToolsConnections` Submodule <a name="`dataOciDatabaseToolsDatabaseToolsConnections` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseToolsDatabaseToolsConnections <a name="DataOciDatabaseToolsDatabaseToolsConnections" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_tools_database_tools_connections oci_database_tools_database_tools_connections}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseToolsDatabaseToolsConnections(Construct Scope, string Id, DataOciDatabaseToolsDatabaseToolsConnectionsConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsConfig">DataOciDatabaseToolsDatabaseToolsConnectionsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsConfig">DataOciDatabaseToolsDatabaseToolsConnectionsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.resetRelatedResourceIdentifier">ResetRelatedResourceIdentifier</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.resetRuntimeSupport">ResetRuntimeSupport</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.resetState">ResetState</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.resetType">ResetType</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.putFilter"></a>

```csharp
private void PutFilter(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.putFilter.parameter.value"></a>

- *Type:* object

---

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetRelatedResourceIdentifier` <a name="ResetRelatedResourceIdentifier" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.resetRelatedResourceIdentifier"></a>

```csharp
private void ResetRelatedResourceIdentifier()
```

##### `ResetRuntimeSupport` <a name="ResetRuntimeSupport" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.resetRuntimeSupport"></a>

```csharp
private void ResetRuntimeSupport()
```

##### `ResetState` <a name="ResetState" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.resetState"></a>

```csharp
private void ResetState()
```

##### `ResetType` <a name="ResetType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.resetType"></a>

```csharp
private void ResetType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDatabaseToolsDatabaseToolsConnections resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDatabaseToolsDatabaseToolsConnections.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDatabaseToolsDatabaseToolsConnections.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDatabaseToolsDatabaseToolsConnections.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDatabaseToolsDatabaseToolsConnections.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciDatabaseToolsDatabaseToolsConnections resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciDatabaseToolsDatabaseToolsConnections to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciDatabaseToolsDatabaseToolsConnections that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_tools_database_tools_connections#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseToolsDatabaseToolsConnections to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.property.databaseToolsConnectionCollection">DatabaseToolsConnectionCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionList">DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterList">DataOciDatabaseToolsDatabaseToolsConnectionsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.property.filterInput">FilterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.property.relatedResourceIdentifierInput">RelatedResourceIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.property.runtimeSupportInput">RuntimeSupportInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.property.stateInput">StateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.property.typeInput">TypeInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.property.relatedResourceIdentifier">RelatedResourceIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.property.runtimeSupport">RuntimeSupport</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.property.type">Type</a></code> | <code>string[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `DatabaseToolsConnectionCollection`<sup>Required</sup> <a name="DatabaseToolsConnectionCollection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.property.databaseToolsConnectionCollection"></a>

```csharp
public DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionList DatabaseToolsConnectionCollection { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionList">DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionList</a>

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.property.filter"></a>

```csharp
public DataOciDatabaseToolsDatabaseToolsConnectionsFilterList Filter { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterList">DataOciDatabaseToolsDatabaseToolsConnectionsFilterList</a>

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.property.filterInput"></a>

```csharp
public object FilterInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `RelatedResourceIdentifierInput`<sup>Optional</sup> <a name="RelatedResourceIdentifierInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.property.relatedResourceIdentifierInput"></a>

```csharp
public string RelatedResourceIdentifierInput { get; }
```

- *Type:* string

---

##### `RuntimeSupportInput`<sup>Optional</sup> <a name="RuntimeSupportInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.property.runtimeSupportInput"></a>

```csharp
public string[] RuntimeSupportInput { get; }
```

- *Type:* string[]

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.property.stateInput"></a>

```csharp
public string StateInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.property.typeInput"></a>

```csharp
public string[] TypeInput { get; }
```

- *Type:* string[]

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `RelatedResourceIdentifier`<sup>Required</sup> <a name="RelatedResourceIdentifier" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.property.relatedResourceIdentifier"></a>

```csharp
public string RelatedResourceIdentifier { get; }
```

- *Type:* string

---

##### `RuntimeSupport`<sup>Required</sup> <a name="RuntimeSupport" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.property.runtimeSupport"></a>

```csharp
public string[] RuntimeSupport { get; }
```

- *Type:* string[]

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.property.type"></a>

```csharp
public string[] Type { get; }
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseToolsDatabaseToolsConnectionsConfig <a name="DataOciDatabaseToolsDatabaseToolsConnectionsConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseToolsDatabaseToolsConnectionsConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string CompartmentId,
    string DisplayName = null,
    object Filter = null,
    string Id = null,
    string RelatedResourceIdentifier = null,
    string[] RuntimeSupport = null,
    string State = null,
    string[] Type = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_tools_database_tools_connections#compartment_id DataOciDatabaseToolsDatabaseToolsConnections#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_tools_database_tools_connections#display_name DataOciDatabaseToolsDatabaseToolsConnections#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsConfig.property.filter">Filter</a></code> | <code>object</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_tools_database_tools_connections#id DataOciDatabaseToolsDatabaseToolsConnections#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsConfig.property.relatedResourceIdentifier">RelatedResourceIdentifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_tools_database_tools_connections#related_resource_identifier DataOciDatabaseToolsDatabaseToolsConnections#related_resource_identifier}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsConfig.property.runtimeSupport">RuntimeSupport</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_tools_database_tools_connections#runtime_support DataOciDatabaseToolsDatabaseToolsConnections#runtime_support}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsConfig.property.state">State</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_tools_database_tools_connections#state DataOciDatabaseToolsDatabaseToolsConnections#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsConfig.property.type">Type</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_tools_database_tools_connections#type DataOciDatabaseToolsDatabaseToolsConnections#type}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_tools_database_tools_connections#compartment_id DataOciDatabaseToolsDatabaseToolsConnections#compartment_id}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_tools_database_tools_connections#display_name DataOciDatabaseToolsDatabaseToolsConnections#display_name}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsConfig.property.filter"></a>

```csharp
public object Filter { get; set; }
```

- *Type:* object

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_tools_database_tools_connections#filter DataOciDatabaseToolsDatabaseToolsConnections#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_tools_database_tools_connections#id DataOciDatabaseToolsDatabaseToolsConnections#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `RelatedResourceIdentifier`<sup>Optional</sup> <a name="RelatedResourceIdentifier" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsConfig.property.relatedResourceIdentifier"></a>

```csharp
public string RelatedResourceIdentifier { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_tools_database_tools_connections#related_resource_identifier DataOciDatabaseToolsDatabaseToolsConnections#related_resource_identifier}.

---

##### `RuntimeSupport`<sup>Optional</sup> <a name="RuntimeSupport" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsConfig.property.runtimeSupport"></a>

```csharp
public string[] RuntimeSupport { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_tools_database_tools_connections#runtime_support DataOciDatabaseToolsDatabaseToolsConnections#runtime_support}.

---

##### `State`<sup>Optional</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsConfig.property.state"></a>

```csharp
public string State { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_tools_database_tools_connections#state DataOciDatabaseToolsDatabaseToolsConnections#state}.

---

##### `Type`<sup>Optional</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsConfig.property.type"></a>

```csharp
public string[] Type { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_tools_database_tools_connections#type DataOciDatabaseToolsDatabaseToolsConnections#type}.

---

### DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollection <a name="DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollection.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollection {

};
```


### DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItems <a name="DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItems.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItems {

};
```


### DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStores <a name="DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStores" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStores"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStores.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStores {

};
```


### DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContent <a name="DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContent" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContent"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContent.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContent {

};
```


### DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePassword <a name="DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePassword" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePassword"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePassword.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePassword {

};
```


### DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocks <a name="DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocks" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocks"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocks.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocks {

};
```


### DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClient <a name="DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClient" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClient"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClient.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClient {

};
```


### DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPassword <a name="DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPassword" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPassword"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPassword.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPassword {

};
```


### DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResource <a name="DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResource"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResource.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResource {

};
```


### DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPassword <a name="DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPassword" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPassword"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPassword.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPassword {

};
```


### DataOciDatabaseToolsDatabaseToolsConnectionsFilter <a name="DataOciDatabaseToolsDatabaseToolsConnectionsFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseToolsDatabaseToolsConnectionsFilter {
    string Name,
    string[] Values,
    object Regex = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilter.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_tools_database_tools_connections#name DataOciDatabaseToolsDatabaseToolsConnections#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilter.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_tools_database_tools_connections#values DataOciDatabaseToolsDatabaseToolsConnections#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilter.property.regex">Regex</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_tools_database_tools_connections#regex DataOciDatabaseToolsDatabaseToolsConnections#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilter.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_tools_database_tools_connections#name DataOciDatabaseToolsDatabaseToolsConnections#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilter.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_tools_database_tools_connections#values DataOciDatabaseToolsDatabaseToolsConnections#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilter.property.regex"></a>

```csharp
public object Regex { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_tools_database_tools_connections#regex DataOciDatabaseToolsDatabaseToolsConnections#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentList <a name="DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentList.get"></a>

```csharp
private DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentOutputReference <a name="DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentOutputReference.property.secretId">SecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentOutputReference.property.valueType">ValueType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContent">DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContent</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SecretId`<sup>Required</sup> <a name="SecretId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentOutputReference.property.secretId"></a>

```csharp
public string SecretId { get; }
```

- *Type:* string

---

##### `ValueType`<sup>Required</sup> <a name="ValueType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentOutputReference.property.valueType"></a>

```csharp
public string ValueType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentOutputReference.property.internalValue"></a>

```csharp
public DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContent InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContent">DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContent</a>

---


### DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordList <a name="DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordList.get"></a>

```csharp
private DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordOutputReference <a name="DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordOutputReference.property.secretId">SecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordOutputReference.property.valueType">ValueType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePassword">DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePassword</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SecretId`<sup>Required</sup> <a name="SecretId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordOutputReference.property.secretId"></a>

```csharp
public string SecretId { get; }
```

- *Type:* string

---

##### `ValueType`<sup>Required</sup> <a name="ValueType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordOutputReference.property.valueType"></a>

```csharp
public string ValueType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordOutputReference.property.internalValue"></a>

```csharp
public DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePassword InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePassword">DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePassword</a>

---


### DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresList <a name="DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresList.get"></a>

```csharp
private DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresOutputReference <a name="DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresOutputReference.property.keyStoreContent">KeyStoreContent</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentList">DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresOutputReference.property.keyStorePassword">KeyStorePassword</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordList">DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresOutputReference.property.keyStoreType">KeyStoreType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStores">DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStores</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyStoreContent`<sup>Required</sup> <a name="KeyStoreContent" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresOutputReference.property.keyStoreContent"></a>

```csharp
public DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentList KeyStoreContent { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentList">DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentList</a>

---

##### `KeyStorePassword`<sup>Required</sup> <a name="KeyStorePassword" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresOutputReference.property.keyStorePassword"></a>

```csharp
public DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordList KeyStorePassword { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordList">DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordList</a>

---

##### `KeyStoreType`<sup>Required</sup> <a name="KeyStoreType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresOutputReference.property.keyStoreType"></a>

```csharp
public string KeyStoreType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresOutputReference.property.internalValue"></a>

```csharp
public DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStores InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStores">DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStores</a>

---


### DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsList <a name="DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsList.get"></a>

```csharp
private DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksList <a name="DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksList.get"></a>

```csharp
private DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksOutputReference <a name="DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksOutputReference.property.message">Message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksOutputReference.property.relatedResourceId">RelatedResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksOutputReference.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocks">DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocks</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Message`<sup>Required</sup> <a name="Message" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksOutputReference.property.message"></a>

```csharp
public string Message { get; }
```

- *Type:* string

---

##### `RelatedResourceId`<sup>Required</sup> <a name="RelatedResourceId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksOutputReference.property.relatedResourceId"></a>

```csharp
public string RelatedResourceId { get; }
```

- *Type:* string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksOutputReference.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksOutputReference.property.internalValue"></a>

```csharp
public DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocks InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocks">DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocks</a>

---


### DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference <a name="DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.property.advancedProperties">AdvancedProperties</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.property.connectionString">ConnectionString</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.property.definedTags">DefinedTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.property.freeformTags">FreeformTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.property.keyStores">KeyStores</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresList">DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.property.lifecycleDetails">LifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.property.locks">Locks</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksList">DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.property.privateEndpointId">PrivateEndpointId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.property.proxyClient">ProxyClient</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientList">DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.property.relatedResource">RelatedResource</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceList">DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.property.runtimeSupport">RuntimeSupport</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.property.systemTags">SystemTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.property.timeUpdated">TimeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.property.url">Url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.property.userName">UserName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.property.userPassword">UserPassword</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordList">DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItems">DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AdvancedProperties`<sup>Required</sup> <a name="AdvancedProperties" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.property.advancedProperties"></a>

```csharp
public StringMap AdvancedProperties { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `ConnectionString`<sup>Required</sup> <a name="ConnectionString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.property.connectionString"></a>

```csharp
public string ConnectionString { get; }
```

- *Type:* string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.property.definedTags"></a>

```csharp
public StringMap DefinedTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.property.freeformTags"></a>

```csharp
public StringMap FreeformTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `KeyStores`<sup>Required</sup> <a name="KeyStores" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.property.keyStores"></a>

```csharp
public DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresList KeyStores { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresList">DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresList</a>

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.property.lifecycleDetails"></a>

```csharp
public string LifecycleDetails { get; }
```

- *Type:* string

---

##### `Locks`<sup>Required</sup> <a name="Locks" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.property.locks"></a>

```csharp
public DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksList Locks { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksList">DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksList</a>

---

##### `PrivateEndpointId`<sup>Required</sup> <a name="PrivateEndpointId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.property.privateEndpointId"></a>

```csharp
public string PrivateEndpointId { get; }
```

- *Type:* string

---

##### `ProxyClient`<sup>Required</sup> <a name="ProxyClient" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.property.proxyClient"></a>

```csharp
public DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientList ProxyClient { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientList">DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientList</a>

---

##### `RelatedResource`<sup>Required</sup> <a name="RelatedResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.property.relatedResource"></a>

```csharp
public DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceList RelatedResource { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceList">DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceList</a>

---

##### `RuntimeSupport`<sup>Required</sup> <a name="RuntimeSupport" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.property.runtimeSupport"></a>

```csharp
public string RuntimeSupport { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.property.systemTags"></a>

```csharp
public StringMap SystemTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.property.timeUpdated"></a>

```csharp
public string TimeUpdated { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Url`<sup>Required</sup> <a name="Url" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.property.url"></a>

```csharp
public string Url { get; }
```

- *Type:* string

---

##### `UserName`<sup>Required</sup> <a name="UserName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.property.userName"></a>

```csharp
public string UserName { get; }
```

- *Type:* string

---

##### `UserPassword`<sup>Required</sup> <a name="UserPassword" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.property.userPassword"></a>

```csharp
public DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordList UserPassword { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordList">DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.property.internalValue"></a>

```csharp
public DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItems InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItems">DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItems</a>

---


### DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientList <a name="DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientList.get"></a>

```csharp
private DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientOutputReference <a name="DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientOutputReference.property.proxyAuthenticationType">ProxyAuthenticationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientOutputReference.property.roles">Roles</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientOutputReference.property.userName">UserName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientOutputReference.property.userPassword">UserPassword</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordList">DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClient">DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClient</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ProxyAuthenticationType`<sup>Required</sup> <a name="ProxyAuthenticationType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientOutputReference.property.proxyAuthenticationType"></a>

```csharp
public string ProxyAuthenticationType { get; }
```

- *Type:* string

---

##### `Roles`<sup>Required</sup> <a name="Roles" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientOutputReference.property.roles"></a>

```csharp
public string[] Roles { get; }
```

- *Type:* string[]

---

##### `UserName`<sup>Required</sup> <a name="UserName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientOutputReference.property.userName"></a>

```csharp
public string UserName { get; }
```

- *Type:* string

---

##### `UserPassword`<sup>Required</sup> <a name="UserPassword" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientOutputReference.property.userPassword"></a>

```csharp
public DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordList UserPassword { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordList">DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientOutputReference.property.internalValue"></a>

```csharp
public DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClient InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClient">DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClient</a>

---


### DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordList <a name="DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordList.get"></a>

```csharp
private DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordOutputReference <a name="DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordOutputReference.property.secretId">SecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordOutputReference.property.valueType">ValueType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPassword">DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPassword</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SecretId`<sup>Required</sup> <a name="SecretId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordOutputReference.property.secretId"></a>

```csharp
public string SecretId { get; }
```

- *Type:* string

---

##### `ValueType`<sup>Required</sup> <a name="ValueType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordOutputReference.property.valueType"></a>

```csharp
public string ValueType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordOutputReference.property.internalValue"></a>

```csharp
public DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPassword InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPassword">DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPassword</a>

---


### DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceList <a name="DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceList.get"></a>

```csharp
private DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceOutputReference <a name="DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceOutputReference.property.entityType">EntityType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceOutputReference.property.identifier">Identifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResource">DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EntityType`<sup>Required</sup> <a name="EntityType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceOutputReference.property.entityType"></a>

```csharp
public string EntityType { get; }
```

- *Type:* string

---

##### `Identifier`<sup>Required</sup> <a name="Identifier" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceOutputReference.property.identifier"></a>

```csharp
public string Identifier { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceOutputReference.property.internalValue"></a>

```csharp
public DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResource InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResource">DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResource</a>

---


### DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordList <a name="DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordList.get"></a>

```csharp
private DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordOutputReference <a name="DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordOutputReference.property.secretId">SecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordOutputReference.property.valueType">ValueType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPassword">DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPassword</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SecretId`<sup>Required</sup> <a name="SecretId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordOutputReference.property.secretId"></a>

```csharp
public string SecretId { get; }
```

- *Type:* string

---

##### `ValueType`<sup>Required</sup> <a name="ValueType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordOutputReference.property.valueType"></a>

```csharp
public string ValueType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordOutputReference.property.internalValue"></a>

```csharp
public DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPassword InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPassword">DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPassword</a>

---


### DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionList <a name="DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionList.get"></a>

```csharp
private DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionOutputReference <a name="DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsList">DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollection">DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionOutputReference.property.items"></a>

```csharp
public DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsList Items { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsList">DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionOutputReference.property.internalValue"></a>

```csharp
public DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollection InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollection">DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollection</a>

---


### DataOciDatabaseToolsDatabaseToolsConnectionsFilterList <a name="DataOciDatabaseToolsDatabaseToolsConnectionsFilterList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseToolsDatabaseToolsConnectionsFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterList.get"></a>

```csharp
private DataOciDatabaseToolsDatabaseToolsConnectionsFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciDatabaseToolsDatabaseToolsConnectionsFilterOutputReference <a name="DataOciDatabaseToolsDatabaseToolsConnectionsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseToolsDatabaseToolsConnectionsFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterOutputReference.resetRegex"></a>

```csharp
private void ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterOutputReference.property.regex">Regex</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterOutputReference.property.regexInput"></a>

```csharp
public object RegexInput { get; }
```

- *Type:* object

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterOutputReference.property.regex"></a>

```csharp
public object Regex { get; }
```

- *Type:* object

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



