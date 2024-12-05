# `dataOciDatabaseExascaleDbStorageVaults` Submodule <a name="`dataOciDatabaseExascaleDbStorageVaults` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseExascaleDbStorageVaults <a name="DataOciDatabaseExascaleDbStorageVaults" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_exascale_db_storage_vaults oci_database_exascale_db_storage_vaults}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseExascaleDbStorageVaults(Construct Scope, string Id, DataOciDatabaseExascaleDbStorageVaultsConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsConfig">DataOciDatabaseExascaleDbStorageVaultsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsConfig">DataOciDatabaseExascaleDbStorageVaultsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.resetState">ResetState</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.putFilter"></a>

```csharp
private void PutFilter(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.putFilter.parameter.value"></a>

- *Type:* object

---

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetState` <a name="ResetState" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.resetState"></a>

```csharp
private void ResetState()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDatabaseExascaleDbStorageVaults resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDatabaseExascaleDbStorageVaults.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDatabaseExascaleDbStorageVaults.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDatabaseExascaleDbStorageVaults.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDatabaseExascaleDbStorageVaults.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciDatabaseExascaleDbStorageVaults resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciDatabaseExascaleDbStorageVaults to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciDatabaseExascaleDbStorageVaults that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_exascale_db_storage_vaults#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseExascaleDbStorageVaults to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.property.exascaleDbStorageVaults">ExascaleDbStorageVaults</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsList">DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterList">DataOciDatabaseExascaleDbStorageVaultsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.property.filterInput">FilterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.property.stateInput">StateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.property.state">State</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `ExascaleDbStorageVaults`<sup>Required</sup> <a name="ExascaleDbStorageVaults" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.property.exascaleDbStorageVaults"></a>

```csharp
public DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsList ExascaleDbStorageVaults { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsList">DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsList</a>

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.property.filter"></a>

```csharp
public DataOciDatabaseExascaleDbStorageVaultsFilterList Filter { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterList">DataOciDatabaseExascaleDbStorageVaultsFilterList</a>

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.property.filterInput"></a>

```csharp
public object FilterInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.property.stateInput"></a>

```csharp
public string StateInput { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseExascaleDbStorageVaultsConfig <a name="DataOciDatabaseExascaleDbStorageVaultsConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseExascaleDbStorageVaultsConfig {
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
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_exascale_db_storage_vaults#compartment_id DataOciDatabaseExascaleDbStorageVaults#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_exascale_db_storage_vaults#display_name DataOciDatabaseExascaleDbStorageVaults#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsConfig.property.filter">Filter</a></code> | <code>object</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_exascale_db_storage_vaults#id DataOciDatabaseExascaleDbStorageVaults#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsConfig.property.state">State</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_exascale_db_storage_vaults#state DataOciDatabaseExascaleDbStorageVaults#state}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_exascale_db_storage_vaults#compartment_id DataOciDatabaseExascaleDbStorageVaults#compartment_id}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_exascale_db_storage_vaults#display_name DataOciDatabaseExascaleDbStorageVaults#display_name}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsConfig.property.filter"></a>

```csharp
public object Filter { get; set; }
```

- *Type:* object

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_exascale_db_storage_vaults#filter DataOciDatabaseExascaleDbStorageVaults#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_exascale_db_storage_vaults#id DataOciDatabaseExascaleDbStorageVaults#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `State`<sup>Optional</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsConfig.property.state"></a>

```csharp
public string State { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_exascale_db_storage_vaults#state DataOciDatabaseExascaleDbStorageVaults#state}.

---

### DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaults <a name="DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaults" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaults"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaults.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaults {

};
```


### DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorage <a name="DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorage" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorage"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorage.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorage {

};
```


### DataOciDatabaseExascaleDbStorageVaultsFilter <a name="DataOciDatabaseExascaleDbStorageVaultsFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseExascaleDbStorageVaultsFilter {
    string Name,
    string[] Values,
    object Regex = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilter.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_exascale_db_storage_vaults#name DataOciDatabaseExascaleDbStorageVaults#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilter.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_exascale_db_storage_vaults#values DataOciDatabaseExascaleDbStorageVaults#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilter.property.regex">Regex</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_exascale_db_storage_vaults#regex DataOciDatabaseExascaleDbStorageVaults#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilter.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_exascale_db_storage_vaults#name DataOciDatabaseExascaleDbStorageVaults#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilter.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_exascale_db_storage_vaults#values DataOciDatabaseExascaleDbStorageVaults#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilter.property.regex"></a>

```csharp
public object Regex { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_exascale_db_storage_vaults#regex DataOciDatabaseExascaleDbStorageVaults#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageList <a name="DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageList.get"></a>

```csharp
private DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageOutputReference <a name="DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageOutputReference.property.availableSizeInGbs">AvailableSizeInGbs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageOutputReference.property.totalSizeInGbs">TotalSizeInGbs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorage">DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorage</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AvailableSizeInGbs`<sup>Required</sup> <a name="AvailableSizeInGbs" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageOutputReference.property.availableSizeInGbs"></a>

```csharp
public double AvailableSizeInGbs { get; }
```

- *Type:* double

---

##### `TotalSizeInGbs`<sup>Required</sup> <a name="TotalSizeInGbs" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageOutputReference.property.totalSizeInGbs"></a>

```csharp
public double TotalSizeInGbs { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageOutputReference.property.internalValue"></a>

```csharp
public DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorage InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorage">DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorage</a>

---


### DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsList <a name="DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsList.get"></a>

```csharp
private DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference <a name="DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.property.additionalFlashCacheInPercent">AdditionalFlashCacheInPercent</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.property.availabilityDomain">AvailabilityDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.property.definedTags">DefinedTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.property.freeformTags">FreeformTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.property.highCapacityDatabaseStorage">HighCapacityDatabaseStorage</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageList">DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.property.lifecycleDetails">LifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.property.systemTags">SystemTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.property.timeZone">TimeZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.property.vmClusterCount">VmClusterCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.property.vmClusterIds">VmClusterIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaults">DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaults</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AdditionalFlashCacheInPercent`<sup>Required</sup> <a name="AdditionalFlashCacheInPercent" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.property.additionalFlashCacheInPercent"></a>

```csharp
public double AdditionalFlashCacheInPercent { get; }
```

- *Type:* double

---

##### `AvailabilityDomain`<sup>Required</sup> <a name="AvailabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.property.availabilityDomain"></a>

```csharp
public string AvailabilityDomain { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.property.definedTags"></a>

```csharp
public StringMap DefinedTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.property.freeformTags"></a>

```csharp
public StringMap FreeformTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `HighCapacityDatabaseStorage`<sup>Required</sup> <a name="HighCapacityDatabaseStorage" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.property.highCapacityDatabaseStorage"></a>

```csharp
public DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageList HighCapacityDatabaseStorage { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageList">DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.property.lifecycleDetails"></a>

```csharp
public string LifecycleDetails { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.property.systemTags"></a>

```csharp
public StringMap SystemTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `TimeZone`<sup>Required</sup> <a name="TimeZone" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.property.timeZone"></a>

```csharp
public string TimeZone { get; }
```

- *Type:* string

---

##### `VmClusterCount`<sup>Required</sup> <a name="VmClusterCount" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.property.vmClusterCount"></a>

```csharp
public double VmClusterCount { get; }
```

- *Type:* double

---

##### `VmClusterIds`<sup>Required</sup> <a name="VmClusterIds" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.property.vmClusterIds"></a>

```csharp
public string[] VmClusterIds { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.property.internalValue"></a>

```csharp
public DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaults InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaults">DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaults</a>

---


### DataOciDatabaseExascaleDbStorageVaultsFilterList <a name="DataOciDatabaseExascaleDbStorageVaultsFilterList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseExascaleDbStorageVaultsFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterList.get"></a>

```csharp
private DataOciDatabaseExascaleDbStorageVaultsFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciDatabaseExascaleDbStorageVaultsFilterOutputReference <a name="DataOciDatabaseExascaleDbStorageVaultsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseExascaleDbStorageVaultsFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterOutputReference.resetRegex"></a>

```csharp
private void ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterOutputReference.property.regex">Regex</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterOutputReference.property.regexInput"></a>

```csharp
public object RegexInput { get; }
```

- *Type:* object

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterOutputReference.property.regex"></a>

```csharp
public object Regex { get; }
```

- *Type:* object

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



