# `dataOciDatabaseExternalNonContainerDatabases` Submodule <a name="`dataOciDatabaseExternalNonContainerDatabases` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseExternalNonContainerDatabases <a name="DataOciDatabaseExternalNonContainerDatabases" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabases"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_external_non_container_databases oci_database_external_non_container_databases}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabases.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseExternalNonContainerDatabases(Construct Scope, string Id, DataOciDatabaseExternalNonContainerDatabasesConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabases.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabases.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabases.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesConfig">DataOciDatabaseExternalNonContainerDatabasesConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabases.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabases.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabases.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesConfig">DataOciDatabaseExternalNonContainerDatabasesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabases.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabases.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabases.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabases.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabases.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabases.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabases.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabases.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabases.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabases.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabases.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabases.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabases.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabases.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabases.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabases.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabases.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabases.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabases.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabases.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabases.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabases.resetState">ResetState</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabases.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabases.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabases.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabases.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabases.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabases.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabases.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabases.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabases.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabases.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabases.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabases.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabases.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabases.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabases.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabases.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabases.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabases.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabases.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabases.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabases.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabases.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabases.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabases.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabases.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabases.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabases.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabases.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabases.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabases.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabases.putFilter"></a>

```csharp
private void PutFilter(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabases.putFilter.parameter.value"></a>

- *Type:* object

---

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabases.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabases.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabases.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetState` <a name="ResetState" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabases.resetState"></a>

```csharp
private void ResetState()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabases.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabases.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabases.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabases.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDatabaseExternalNonContainerDatabases resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabases.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDatabaseExternalNonContainerDatabases.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabases.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabases.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDatabaseExternalNonContainerDatabases.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabases.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabases.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDatabaseExternalNonContainerDatabases.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabases.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabases.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDatabaseExternalNonContainerDatabases.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciDatabaseExternalNonContainerDatabases resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabases.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabases.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciDatabaseExternalNonContainerDatabases to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabases.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciDatabaseExternalNonContainerDatabases that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_external_non_container_databases#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabases.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseExternalNonContainerDatabases to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabases.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabases.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabases.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabases.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabases.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabases.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabases.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabases.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabases.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabases.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabases.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabases.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabases.property.externalNonContainerDatabases">ExternalNonContainerDatabases</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesList">DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabases.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesFilterList">DataOciDatabaseExternalNonContainerDatabasesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabases.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabases.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabases.property.filterInput">FilterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabases.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabases.property.stateInput">StateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabases.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabases.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabases.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabases.property.state">State</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabases.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabases.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabases.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabases.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabases.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabases.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabases.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabases.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabases.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabases.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabases.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabases.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `ExternalNonContainerDatabases`<sup>Required</sup> <a name="ExternalNonContainerDatabases" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabases.property.externalNonContainerDatabases"></a>

```csharp
public DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesList ExternalNonContainerDatabases { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesList">DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesList</a>

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabases.property.filter"></a>

```csharp
public DataOciDatabaseExternalNonContainerDatabasesFilterList Filter { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesFilterList">DataOciDatabaseExternalNonContainerDatabasesFilterList</a>

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabases.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabases.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabases.property.filterInput"></a>

```csharp
public object FilterInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabases.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabases.property.stateInput"></a>

```csharp
public string StateInput { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabases.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabases.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabases.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabases.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabases.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabases.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseExternalNonContainerDatabasesConfig <a name="DataOciDatabaseExternalNonContainerDatabasesConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseExternalNonContainerDatabasesConfig {
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
    string State = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_external_non_container_databases#compartment_id DataOciDatabaseExternalNonContainerDatabases#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_external_non_container_databases#display_name DataOciDatabaseExternalNonContainerDatabases#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesConfig.property.filter">Filter</a></code> | <code>object</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_external_non_container_databases#id DataOciDatabaseExternalNonContainerDatabases#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesConfig.property.state">State</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_external_non_container_databases#state DataOciDatabaseExternalNonContainerDatabases#state}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_external_non_container_databases#compartment_id DataOciDatabaseExternalNonContainerDatabases#compartment_id}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_external_non_container_databases#display_name DataOciDatabaseExternalNonContainerDatabases#display_name}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesConfig.property.filter"></a>

```csharp
public object Filter { get; set; }
```

- *Type:* object

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_external_non_container_databases#filter DataOciDatabaseExternalNonContainerDatabases#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_external_non_container_databases#id DataOciDatabaseExternalNonContainerDatabases#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `State`<sup>Optional</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesConfig.property.state"></a>

```csharp
public string State { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_external_non_container_databases#state DataOciDatabaseExternalNonContainerDatabases#state}.

---

### DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabases <a name="DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabases" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabases"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabases.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabases {

};
```


### DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesDatabaseManagementConfig <a name="DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesDatabaseManagementConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesDatabaseManagementConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesDatabaseManagementConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesDatabaseManagementConfig {

};
```


### DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOperationsInsightsConfig <a name="DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOperationsInsightsConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOperationsInsightsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOperationsInsightsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOperationsInsightsConfig {

};
```


### DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesStackMonitoringConfig <a name="DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesStackMonitoringConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesStackMonitoringConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesStackMonitoringConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesStackMonitoringConfig {

};
```


### DataOciDatabaseExternalNonContainerDatabasesFilter <a name="DataOciDatabaseExternalNonContainerDatabasesFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseExternalNonContainerDatabasesFilter {
    string Name,
    string[] Values,
    object Regex = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesFilter.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_external_non_container_databases#name DataOciDatabaseExternalNonContainerDatabases#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesFilter.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_external_non_container_databases#values DataOciDatabaseExternalNonContainerDatabases#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesFilter.property.regex">Regex</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_external_non_container_databases#regex DataOciDatabaseExternalNonContainerDatabases#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesFilter.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_external_non_container_databases#name DataOciDatabaseExternalNonContainerDatabases#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesFilter.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_external_non_container_databases#values DataOciDatabaseExternalNonContainerDatabases#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesFilter.property.regex"></a>

```csharp
public object Regex { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_external_non_container_databases#regex DataOciDatabaseExternalNonContainerDatabases#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesDatabaseManagementConfigList <a name="DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesDatabaseManagementConfigList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesDatabaseManagementConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesDatabaseManagementConfigList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesDatabaseManagementConfigList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesDatabaseManagementConfigList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesDatabaseManagementConfigList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesDatabaseManagementConfigList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesDatabaseManagementConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesDatabaseManagementConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesDatabaseManagementConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesDatabaseManagementConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesDatabaseManagementConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesDatabaseManagementConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesDatabaseManagementConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesDatabaseManagementConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesDatabaseManagementConfigList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesDatabaseManagementConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesDatabaseManagementConfigList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesDatabaseManagementConfigList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesDatabaseManagementConfigList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesDatabaseManagementConfigList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesDatabaseManagementConfigList.get"></a>

```csharp
private DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesDatabaseManagementConfigOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesDatabaseManagementConfigList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesDatabaseManagementConfigList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesDatabaseManagementConfigList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesDatabaseManagementConfigList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesDatabaseManagementConfigList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesDatabaseManagementConfigOutputReference <a name="DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesDatabaseManagementConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesDatabaseManagementConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesDatabaseManagementConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesDatabaseManagementConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesDatabaseManagementConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesDatabaseManagementConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesDatabaseManagementConfigOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesDatabaseManagementConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesDatabaseManagementConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesDatabaseManagementConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesDatabaseManagementConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesDatabaseManagementConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesDatabaseManagementConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesDatabaseManagementConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesDatabaseManagementConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesDatabaseManagementConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesDatabaseManagementConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesDatabaseManagementConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesDatabaseManagementConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesDatabaseManagementConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesDatabaseManagementConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesDatabaseManagementConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesDatabaseManagementConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesDatabaseManagementConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesDatabaseManagementConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesDatabaseManagementConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesDatabaseManagementConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesDatabaseManagementConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesDatabaseManagementConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesDatabaseManagementConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesDatabaseManagementConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesDatabaseManagementConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesDatabaseManagementConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesDatabaseManagementConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesDatabaseManagementConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesDatabaseManagementConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesDatabaseManagementConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesDatabaseManagementConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesDatabaseManagementConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesDatabaseManagementConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesDatabaseManagementConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesDatabaseManagementConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesDatabaseManagementConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesDatabaseManagementConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesDatabaseManagementConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesDatabaseManagementConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesDatabaseManagementConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesDatabaseManagementConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesDatabaseManagementConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesDatabaseManagementConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesDatabaseManagementConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesDatabaseManagementConfigOutputReference.property.databaseManagementConnectionId">DatabaseManagementConnectionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesDatabaseManagementConfigOutputReference.property.databaseManagementStatus">DatabaseManagementStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesDatabaseManagementConfigOutputReference.property.licenseModel">LicenseModel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesDatabaseManagementConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesDatabaseManagementConfig">DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesDatabaseManagementConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesDatabaseManagementConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesDatabaseManagementConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DatabaseManagementConnectionId`<sup>Required</sup> <a name="DatabaseManagementConnectionId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesDatabaseManagementConfigOutputReference.property.databaseManagementConnectionId"></a>

```csharp
public string DatabaseManagementConnectionId { get; }
```

- *Type:* string

---

##### `DatabaseManagementStatus`<sup>Required</sup> <a name="DatabaseManagementStatus" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesDatabaseManagementConfigOutputReference.property.databaseManagementStatus"></a>

```csharp
public string DatabaseManagementStatus { get; }
```

- *Type:* string

---

##### `LicenseModel`<sup>Required</sup> <a name="LicenseModel" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesDatabaseManagementConfigOutputReference.property.licenseModel"></a>

```csharp
public string LicenseModel { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesDatabaseManagementConfigOutputReference.property.internalValue"></a>

```csharp
public DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesDatabaseManagementConfig InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesDatabaseManagementConfig">DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesDatabaseManagementConfig</a>

---


### DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesList <a name="DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesList.get"></a>

```csharp
private DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOperationsInsightsConfigList <a name="DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOperationsInsightsConfigList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOperationsInsightsConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOperationsInsightsConfigList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOperationsInsightsConfigList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOperationsInsightsConfigList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOperationsInsightsConfigList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOperationsInsightsConfigList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOperationsInsightsConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOperationsInsightsConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOperationsInsightsConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOperationsInsightsConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOperationsInsightsConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOperationsInsightsConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOperationsInsightsConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOperationsInsightsConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOperationsInsightsConfigList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOperationsInsightsConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOperationsInsightsConfigList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOperationsInsightsConfigList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOperationsInsightsConfigList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOperationsInsightsConfigList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOperationsInsightsConfigList.get"></a>

```csharp
private DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOperationsInsightsConfigOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOperationsInsightsConfigList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOperationsInsightsConfigList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOperationsInsightsConfigList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOperationsInsightsConfigList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOperationsInsightsConfigList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOperationsInsightsConfigOutputReference <a name="DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOperationsInsightsConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOperationsInsightsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOperationsInsightsConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOperationsInsightsConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOperationsInsightsConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOperationsInsightsConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOperationsInsightsConfigOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOperationsInsightsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOperationsInsightsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOperationsInsightsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOperationsInsightsConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOperationsInsightsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOperationsInsightsConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOperationsInsightsConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOperationsInsightsConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOperationsInsightsConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOperationsInsightsConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOperationsInsightsConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOperationsInsightsConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOperationsInsightsConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOperationsInsightsConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOperationsInsightsConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOperationsInsightsConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOperationsInsightsConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOperationsInsightsConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOperationsInsightsConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOperationsInsightsConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOperationsInsightsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOperationsInsightsConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOperationsInsightsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOperationsInsightsConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOperationsInsightsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOperationsInsightsConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOperationsInsightsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOperationsInsightsConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOperationsInsightsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOperationsInsightsConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOperationsInsightsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOperationsInsightsConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOperationsInsightsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOperationsInsightsConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOperationsInsightsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOperationsInsightsConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOperationsInsightsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOperationsInsightsConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOperationsInsightsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOperationsInsightsConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOperationsInsightsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOperationsInsightsConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOperationsInsightsConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOperationsInsightsConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOperationsInsightsConfigOutputReference.property.operationsInsightsConnectorId">OperationsInsightsConnectorId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOperationsInsightsConfigOutputReference.property.operationsInsightsStatus">OperationsInsightsStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOperationsInsightsConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOperationsInsightsConfig">DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOperationsInsightsConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOperationsInsightsConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOperationsInsightsConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `OperationsInsightsConnectorId`<sup>Required</sup> <a name="OperationsInsightsConnectorId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOperationsInsightsConfigOutputReference.property.operationsInsightsConnectorId"></a>

```csharp
public string OperationsInsightsConnectorId { get; }
```

- *Type:* string

---

##### `OperationsInsightsStatus`<sup>Required</sup> <a name="OperationsInsightsStatus" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOperationsInsightsConfigOutputReference.property.operationsInsightsStatus"></a>

```csharp
public string OperationsInsightsStatus { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOperationsInsightsConfigOutputReference.property.internalValue"></a>

```csharp
public DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOperationsInsightsConfig InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOperationsInsightsConfig">DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOperationsInsightsConfig</a>

---


### DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOutputReference <a name="DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOutputReference.property.characterSet">CharacterSet</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOutputReference.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOutputReference.property.databaseConfiguration">DatabaseConfiguration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOutputReference.property.databaseEdition">DatabaseEdition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOutputReference.property.databaseManagementConfig">DatabaseManagementConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesDatabaseManagementConfigList">DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesDatabaseManagementConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOutputReference.property.databaseVersion">DatabaseVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOutputReference.property.dbId">DbId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOutputReference.property.dbPacks">DbPacks</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOutputReference.property.dbUniqueName">DbUniqueName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOutputReference.property.definedTags">DefinedTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOutputReference.property.freeformTags">FreeformTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOutputReference.property.lifecycleDetails">LifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOutputReference.property.ncharacterSet">NcharacterSet</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOutputReference.property.operationsInsightsConfig">OperationsInsightsConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOperationsInsightsConfigList">DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOperationsInsightsConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOutputReference.property.stackMonitoringConfig">StackMonitoringConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesStackMonitoringConfigList">DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesStackMonitoringConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOutputReference.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOutputReference.property.timeZone">TimeZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabases">DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabases</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CharacterSet`<sup>Required</sup> <a name="CharacterSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOutputReference.property.characterSet"></a>

```csharp
public string CharacterSet { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOutputReference.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `DatabaseConfiguration`<sup>Required</sup> <a name="DatabaseConfiguration" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOutputReference.property.databaseConfiguration"></a>

```csharp
public string DatabaseConfiguration { get; }
```

- *Type:* string

---

##### `DatabaseEdition`<sup>Required</sup> <a name="DatabaseEdition" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOutputReference.property.databaseEdition"></a>

```csharp
public string DatabaseEdition { get; }
```

- *Type:* string

---

##### `DatabaseManagementConfig`<sup>Required</sup> <a name="DatabaseManagementConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOutputReference.property.databaseManagementConfig"></a>

```csharp
public DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesDatabaseManagementConfigList DatabaseManagementConfig { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesDatabaseManagementConfigList">DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesDatabaseManagementConfigList</a>

---

##### `DatabaseVersion`<sup>Required</sup> <a name="DatabaseVersion" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOutputReference.property.databaseVersion"></a>

```csharp
public string DatabaseVersion { get; }
```

- *Type:* string

---

##### `DbId`<sup>Required</sup> <a name="DbId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOutputReference.property.dbId"></a>

```csharp
public string DbId { get; }
```

- *Type:* string

---

##### `DbPacks`<sup>Required</sup> <a name="DbPacks" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOutputReference.property.dbPacks"></a>

```csharp
public string DbPacks { get; }
```

- *Type:* string

---

##### `DbUniqueName`<sup>Required</sup> <a name="DbUniqueName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOutputReference.property.dbUniqueName"></a>

```csharp
public string DbUniqueName { get; }
```

- *Type:* string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOutputReference.property.definedTags"></a>

```csharp
public StringMap DefinedTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOutputReference.property.freeformTags"></a>

```csharp
public StringMap FreeformTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOutputReference.property.lifecycleDetails"></a>

```csharp
public string LifecycleDetails { get; }
```

- *Type:* string

---

##### `NcharacterSet`<sup>Required</sup> <a name="NcharacterSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOutputReference.property.ncharacterSet"></a>

```csharp
public string NcharacterSet { get; }
```

- *Type:* string

---

##### `OperationsInsightsConfig`<sup>Required</sup> <a name="OperationsInsightsConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOutputReference.property.operationsInsightsConfig"></a>

```csharp
public DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOperationsInsightsConfigList OperationsInsightsConfig { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOperationsInsightsConfigList">DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOperationsInsightsConfigList</a>

---

##### `StackMonitoringConfig`<sup>Required</sup> <a name="StackMonitoringConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOutputReference.property.stackMonitoringConfig"></a>

```csharp
public DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesStackMonitoringConfigList StackMonitoringConfig { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesStackMonitoringConfigList">DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesStackMonitoringConfigList</a>

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOutputReference.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `TimeZone`<sup>Required</sup> <a name="TimeZone" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOutputReference.property.timeZone"></a>

```csharp
public string TimeZone { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOutputReference.property.internalValue"></a>

```csharp
public DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabases InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabases">DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabases</a>

---


### DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesStackMonitoringConfigList <a name="DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesStackMonitoringConfigList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesStackMonitoringConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesStackMonitoringConfigList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesStackMonitoringConfigList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesStackMonitoringConfigList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesStackMonitoringConfigList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesStackMonitoringConfigList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesStackMonitoringConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesStackMonitoringConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesStackMonitoringConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesStackMonitoringConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesStackMonitoringConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesStackMonitoringConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesStackMonitoringConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesStackMonitoringConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesStackMonitoringConfigList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesStackMonitoringConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesStackMonitoringConfigList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesStackMonitoringConfigList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesStackMonitoringConfigList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesStackMonitoringConfigList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesStackMonitoringConfigList.get"></a>

```csharp
private DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesStackMonitoringConfigOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesStackMonitoringConfigList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesStackMonitoringConfigList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesStackMonitoringConfigList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesStackMonitoringConfigList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesStackMonitoringConfigList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesStackMonitoringConfigOutputReference <a name="DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesStackMonitoringConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesStackMonitoringConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesStackMonitoringConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesStackMonitoringConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesStackMonitoringConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesStackMonitoringConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesStackMonitoringConfigOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesStackMonitoringConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesStackMonitoringConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesStackMonitoringConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesStackMonitoringConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesStackMonitoringConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesStackMonitoringConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesStackMonitoringConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesStackMonitoringConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesStackMonitoringConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesStackMonitoringConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesStackMonitoringConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesStackMonitoringConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesStackMonitoringConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesStackMonitoringConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesStackMonitoringConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesStackMonitoringConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesStackMonitoringConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesStackMonitoringConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesStackMonitoringConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesStackMonitoringConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesStackMonitoringConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesStackMonitoringConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesStackMonitoringConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesStackMonitoringConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesStackMonitoringConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesStackMonitoringConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesStackMonitoringConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesStackMonitoringConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesStackMonitoringConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesStackMonitoringConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesStackMonitoringConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesStackMonitoringConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesStackMonitoringConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesStackMonitoringConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesStackMonitoringConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesStackMonitoringConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesStackMonitoringConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesStackMonitoringConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesStackMonitoringConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesStackMonitoringConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesStackMonitoringConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesStackMonitoringConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesStackMonitoringConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesStackMonitoringConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesStackMonitoringConfigOutputReference.property.stackMonitoringConnectorId">StackMonitoringConnectorId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesStackMonitoringConfigOutputReference.property.stackMonitoringStatus">StackMonitoringStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesStackMonitoringConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesStackMonitoringConfig">DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesStackMonitoringConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesStackMonitoringConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesStackMonitoringConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `StackMonitoringConnectorId`<sup>Required</sup> <a name="StackMonitoringConnectorId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesStackMonitoringConfigOutputReference.property.stackMonitoringConnectorId"></a>

```csharp
public string StackMonitoringConnectorId { get; }
```

- *Type:* string

---

##### `StackMonitoringStatus`<sup>Required</sup> <a name="StackMonitoringStatus" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesStackMonitoringConfigOutputReference.property.stackMonitoringStatus"></a>

```csharp
public string StackMonitoringStatus { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesStackMonitoringConfigOutputReference.property.internalValue"></a>

```csharp
public DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesStackMonitoringConfig InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesStackMonitoringConfig">DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesStackMonitoringConfig</a>

---


### DataOciDatabaseExternalNonContainerDatabasesFilterList <a name="DataOciDatabaseExternalNonContainerDatabasesFilterList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesFilterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseExternalNonContainerDatabasesFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesFilterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesFilterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesFilterList.get"></a>

```csharp
private DataOciDatabaseExternalNonContainerDatabasesFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesFilterList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesFilterList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciDatabaseExternalNonContainerDatabasesFilterOutputReference <a name="DataOciDatabaseExternalNonContainerDatabasesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseExternalNonContainerDatabasesFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesFilterOutputReference.resetRegex"></a>

```csharp
private void ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesFilterOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesFilterOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesFilterOutputReference.property.regex">Regex</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesFilterOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesFilterOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesFilterOutputReference.property.regexInput"></a>

```csharp
public object RegexInput { get; }
```

- *Type:* object

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesFilterOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesFilterOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesFilterOutputReference.property.regex"></a>

```csharp
public object Regex { get; }
```

- *Type:* object

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesFilterOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesFilterOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



