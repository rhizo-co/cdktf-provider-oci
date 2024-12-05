# `dataOciDatabaseManagementExternalDbSystems` Submodule <a name="`dataOciDatabaseManagementExternalDbSystems` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseManagementExternalDbSystems <a name="DataOciDatabaseManagementExternalDbSystems" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystems"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_db_systems oci_database_management_external_db_systems}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystems.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseManagementExternalDbSystems(Construct Scope, string Id, DataOciDatabaseManagementExternalDbSystemsConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystems.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystems.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystems.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsConfig">DataOciDatabaseManagementExternalDbSystemsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystems.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystems.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystems.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsConfig">DataOciDatabaseManagementExternalDbSystemsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystems.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystems.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystems.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystems.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystems.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystems.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystems.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystems.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystems.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystems.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystems.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystems.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystems.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystems.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystems.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystems.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystems.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystems.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystems.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystems.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystems.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystems.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystems.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystems.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystems.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystems.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystems.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystems.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystems.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystems.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystems.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystems.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystems.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystems.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystems.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystems.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystems.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystems.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystems.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystems.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystems.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystems.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystems.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystems.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystems.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystems.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystems.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystems.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystems.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystems.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystems.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystems.putFilter"></a>

```csharp
private void PutFilter(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystems.putFilter.parameter.value"></a>

- *Type:* object

---

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystems.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystems.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystems.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystems.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystems.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystems.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystems.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDatabaseManagementExternalDbSystems resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystems.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDatabaseManagementExternalDbSystems.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystems.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystems.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDatabaseManagementExternalDbSystems.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystems.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystems.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDatabaseManagementExternalDbSystems.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystems.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystems.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDatabaseManagementExternalDbSystems.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciDatabaseManagementExternalDbSystems resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystems.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystems.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciDatabaseManagementExternalDbSystems to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystems.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciDatabaseManagementExternalDbSystems that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_db_systems#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystems.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseManagementExternalDbSystems to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystems.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystems.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystems.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystems.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystems.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystems.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystems.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystems.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystems.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystems.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystems.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystems.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystems.property.externalDbSystemCollection">ExternalDbSystemCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionList">DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystems.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsFilterList">DataOciDatabaseManagementExternalDbSystemsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystems.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystems.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystems.property.filterInput">FilterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystems.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystems.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystems.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystems.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystems.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystems.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystems.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystems.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystems.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystems.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystems.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystems.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystems.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystems.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystems.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystems.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `ExternalDbSystemCollection`<sup>Required</sup> <a name="ExternalDbSystemCollection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystems.property.externalDbSystemCollection"></a>

```csharp
public DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionList ExternalDbSystemCollection { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionList">DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionList</a>

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystems.property.filter"></a>

```csharp
public DataOciDatabaseManagementExternalDbSystemsFilterList Filter { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsFilterList">DataOciDatabaseManagementExternalDbSystemsFilterList</a>

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystems.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystems.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystems.property.filterInput"></a>

```csharp
public object FilterInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystems.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystems.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystems.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystems.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystems.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystems.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseManagementExternalDbSystemsConfig <a name="DataOciDatabaseManagementExternalDbSystemsConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseManagementExternalDbSystemsConfig {
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
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_db_systems#compartment_id DataOciDatabaseManagementExternalDbSystems#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_db_systems#display_name DataOciDatabaseManagementExternalDbSystems#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsConfig.property.filter">Filter</a></code> | <code>object</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_db_systems#id DataOciDatabaseManagementExternalDbSystems#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_db_systems#compartment_id DataOciDatabaseManagementExternalDbSystems#compartment_id}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_db_systems#display_name DataOciDatabaseManagementExternalDbSystems#display_name}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsConfig.property.filter"></a>

```csharp
public object Filter { get; set; }
```

- *Type:* object

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_db_systems#filter DataOciDatabaseManagementExternalDbSystems#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_db_systems#id DataOciDatabaseManagementExternalDbSystems#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollection <a name="DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollection.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollection {

};
```


### DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItems <a name="DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItems.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItems {

};
```


### DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsDatabaseManagementConfig <a name="DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsDatabaseManagementConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsDatabaseManagementConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsDatabaseManagementConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsDatabaseManagementConfig {

};
```


### DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsStackMonitoringConfig <a name="DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsStackMonitoringConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsStackMonitoringConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsStackMonitoringConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsStackMonitoringConfig {

};
```


### DataOciDatabaseManagementExternalDbSystemsFilter <a name="DataOciDatabaseManagementExternalDbSystemsFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseManagementExternalDbSystemsFilter {
    string Name,
    string[] Values,
    object Regex = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsFilter.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_db_systems#name DataOciDatabaseManagementExternalDbSystems#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsFilter.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_db_systems#values DataOciDatabaseManagementExternalDbSystems#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsFilter.property.regex">Regex</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_db_systems#regex DataOciDatabaseManagementExternalDbSystems#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsFilter.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_db_systems#name DataOciDatabaseManagementExternalDbSystems#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsFilter.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_db_systems#values DataOciDatabaseManagementExternalDbSystems#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsFilter.property.regex"></a>

```csharp
public object Regex { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_db_systems#regex DataOciDatabaseManagementExternalDbSystems#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsDatabaseManagementConfigList <a name="DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsDatabaseManagementConfigList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsDatabaseManagementConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsDatabaseManagementConfigList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsDatabaseManagementConfigList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsDatabaseManagementConfigList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsDatabaseManagementConfigList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsDatabaseManagementConfigList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsDatabaseManagementConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsDatabaseManagementConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsDatabaseManagementConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsDatabaseManagementConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsDatabaseManagementConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsDatabaseManagementConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsDatabaseManagementConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsDatabaseManagementConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsDatabaseManagementConfigList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsDatabaseManagementConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsDatabaseManagementConfigList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsDatabaseManagementConfigList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsDatabaseManagementConfigList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsDatabaseManagementConfigList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsDatabaseManagementConfigList.get"></a>

```csharp
private DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsDatabaseManagementConfigOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsDatabaseManagementConfigList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsDatabaseManagementConfigList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsDatabaseManagementConfigList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsDatabaseManagementConfigList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsDatabaseManagementConfigList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsDatabaseManagementConfigOutputReference <a name="DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsDatabaseManagementConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsDatabaseManagementConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsDatabaseManagementConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsDatabaseManagementConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsDatabaseManagementConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsDatabaseManagementConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsDatabaseManagementConfigOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsDatabaseManagementConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsDatabaseManagementConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsDatabaseManagementConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsDatabaseManagementConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsDatabaseManagementConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsDatabaseManagementConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsDatabaseManagementConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsDatabaseManagementConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsDatabaseManagementConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsDatabaseManagementConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsDatabaseManagementConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsDatabaseManagementConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsDatabaseManagementConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsDatabaseManagementConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsDatabaseManagementConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsDatabaseManagementConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsDatabaseManagementConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsDatabaseManagementConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsDatabaseManagementConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsDatabaseManagementConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsDatabaseManagementConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsDatabaseManagementConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsDatabaseManagementConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsDatabaseManagementConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsDatabaseManagementConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsDatabaseManagementConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsDatabaseManagementConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsDatabaseManagementConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsDatabaseManagementConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsDatabaseManagementConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsDatabaseManagementConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsDatabaseManagementConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsDatabaseManagementConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsDatabaseManagementConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsDatabaseManagementConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsDatabaseManagementConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsDatabaseManagementConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsDatabaseManagementConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsDatabaseManagementConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsDatabaseManagementConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsDatabaseManagementConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsDatabaseManagementConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsDatabaseManagementConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsDatabaseManagementConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsDatabaseManagementConfigOutputReference.property.licenseModel">LicenseModel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsDatabaseManagementConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsDatabaseManagementConfig">DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsDatabaseManagementConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsDatabaseManagementConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsDatabaseManagementConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LicenseModel`<sup>Required</sup> <a name="LicenseModel" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsDatabaseManagementConfigOutputReference.property.licenseModel"></a>

```csharp
public string LicenseModel { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsDatabaseManagementConfigOutputReference.property.internalValue"></a>

```csharp
public DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsDatabaseManagementConfig InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsDatabaseManagementConfig">DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsDatabaseManagementConfig</a>

---


### DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsList <a name="DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsList.get"></a>

```csharp
private DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsOutputReference <a name="DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsOutputReference.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsOutputReference.property.databaseManagementConfig">DatabaseManagementConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsDatabaseManagementConfigList">DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsDatabaseManagementConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsOutputReference.property.dbSystemDiscoveryId">DbSystemDiscoveryId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsOutputReference.property.definedTags">DefinedTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsOutputReference.property.discoveryAgentId">DiscoveryAgentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsOutputReference.property.freeformTags">FreeformTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsOutputReference.property.homeDirectory">HomeDirectory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsOutputReference.property.isCluster">IsCluster</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsOutputReference.property.lifecycleDetails">LifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsOutputReference.property.stackMonitoringConfig">StackMonitoringConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsStackMonitoringConfigList">DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsStackMonitoringConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsOutputReference.property.systemTags">SystemTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsOutputReference.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsOutputReference.property.timeUpdated">TimeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItems">DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsOutputReference.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `DatabaseManagementConfig`<sup>Required</sup> <a name="DatabaseManagementConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsOutputReference.property.databaseManagementConfig"></a>

```csharp
public DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsDatabaseManagementConfigList DatabaseManagementConfig { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsDatabaseManagementConfigList">DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsDatabaseManagementConfigList</a>

---

##### `DbSystemDiscoveryId`<sup>Required</sup> <a name="DbSystemDiscoveryId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsOutputReference.property.dbSystemDiscoveryId"></a>

```csharp
public string DbSystemDiscoveryId { get; }
```

- *Type:* string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsOutputReference.property.definedTags"></a>

```csharp
public StringMap DefinedTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `DiscoveryAgentId`<sup>Required</sup> <a name="DiscoveryAgentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsOutputReference.property.discoveryAgentId"></a>

```csharp
public string DiscoveryAgentId { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsOutputReference.property.freeformTags"></a>

```csharp
public StringMap FreeformTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `HomeDirectory`<sup>Required</sup> <a name="HomeDirectory" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsOutputReference.property.homeDirectory"></a>

```csharp
public string HomeDirectory { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IsCluster`<sup>Required</sup> <a name="IsCluster" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsOutputReference.property.isCluster"></a>

```csharp
public IResolvable IsCluster { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsOutputReference.property.lifecycleDetails"></a>

```csharp
public string LifecycleDetails { get; }
```

- *Type:* string

---

##### `StackMonitoringConfig`<sup>Required</sup> <a name="StackMonitoringConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsOutputReference.property.stackMonitoringConfig"></a>

```csharp
public DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsStackMonitoringConfigList StackMonitoringConfig { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsStackMonitoringConfigList">DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsStackMonitoringConfigList</a>

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsOutputReference.property.systemTags"></a>

```csharp
public StringMap SystemTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsOutputReference.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsOutputReference.property.timeUpdated"></a>

```csharp
public string TimeUpdated { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsOutputReference.property.internalValue"></a>

```csharp
public DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItems InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItems">DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItems</a>

---


### DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsStackMonitoringConfigList <a name="DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsStackMonitoringConfigList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsStackMonitoringConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsStackMonitoringConfigList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsStackMonitoringConfigList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsStackMonitoringConfigList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsStackMonitoringConfigList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsStackMonitoringConfigList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsStackMonitoringConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsStackMonitoringConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsStackMonitoringConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsStackMonitoringConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsStackMonitoringConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsStackMonitoringConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsStackMonitoringConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsStackMonitoringConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsStackMonitoringConfigList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsStackMonitoringConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsStackMonitoringConfigList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsStackMonitoringConfigList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsStackMonitoringConfigList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsStackMonitoringConfigList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsStackMonitoringConfigList.get"></a>

```csharp
private DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsStackMonitoringConfigOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsStackMonitoringConfigList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsStackMonitoringConfigList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsStackMonitoringConfigList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsStackMonitoringConfigList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsStackMonitoringConfigList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsStackMonitoringConfigOutputReference <a name="DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsStackMonitoringConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsStackMonitoringConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsStackMonitoringConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsStackMonitoringConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsStackMonitoringConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsStackMonitoringConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsStackMonitoringConfigOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsStackMonitoringConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsStackMonitoringConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsStackMonitoringConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsStackMonitoringConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsStackMonitoringConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsStackMonitoringConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsStackMonitoringConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsStackMonitoringConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsStackMonitoringConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsStackMonitoringConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsStackMonitoringConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsStackMonitoringConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsStackMonitoringConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsStackMonitoringConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsStackMonitoringConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsStackMonitoringConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsStackMonitoringConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsStackMonitoringConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsStackMonitoringConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsStackMonitoringConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsStackMonitoringConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsStackMonitoringConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsStackMonitoringConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsStackMonitoringConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsStackMonitoringConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsStackMonitoringConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsStackMonitoringConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsStackMonitoringConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsStackMonitoringConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsStackMonitoringConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsStackMonitoringConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsStackMonitoringConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsStackMonitoringConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsStackMonitoringConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsStackMonitoringConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsStackMonitoringConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsStackMonitoringConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsStackMonitoringConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsStackMonitoringConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsStackMonitoringConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsStackMonitoringConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsStackMonitoringConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsStackMonitoringConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsStackMonitoringConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsStackMonitoringConfigOutputReference.property.isEnabled">IsEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsStackMonitoringConfigOutputReference.property.metadata">Metadata</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsStackMonitoringConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsStackMonitoringConfig">DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsStackMonitoringConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsStackMonitoringConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsStackMonitoringConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IsEnabled`<sup>Required</sup> <a name="IsEnabled" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsStackMonitoringConfigOutputReference.property.isEnabled"></a>

```csharp
public IResolvable IsEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsStackMonitoringConfigOutputReference.property.metadata"></a>

```csharp
public string Metadata { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsStackMonitoringConfigOutputReference.property.internalValue"></a>

```csharp
public DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsStackMonitoringConfig InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsStackMonitoringConfig">DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsStackMonitoringConfig</a>

---


### DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionList <a name="DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionList.get"></a>

```csharp
private DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionOutputReference <a name="DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsList">DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollection">DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionOutputReference.property.items"></a>

```csharp
public DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsList Items { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsList">DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollectionOutputReference.property.internalValue"></a>

```csharp
public DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollection InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollection">DataOciDatabaseManagementExternalDbSystemsExternalDbSystemCollection</a>

---


### DataOciDatabaseManagementExternalDbSystemsFilterList <a name="DataOciDatabaseManagementExternalDbSystemsFilterList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsFilterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseManagementExternalDbSystemsFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsFilterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsFilterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsFilterList.get"></a>

```csharp
private DataOciDatabaseManagementExternalDbSystemsFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsFilterList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsFilterList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciDatabaseManagementExternalDbSystemsFilterOutputReference <a name="DataOciDatabaseManagementExternalDbSystemsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseManagementExternalDbSystemsFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsFilterOutputReference.resetRegex"></a>

```csharp
private void ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsFilterOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsFilterOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsFilterOutputReference.property.regex">Regex</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsFilterOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsFilterOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsFilterOutputReference.property.regexInput"></a>

```csharp
public object RegexInput { get; }
```

- *Type:* object

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsFilterOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsFilterOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsFilterOutputReference.property.regex"></a>

```csharp
public object Regex { get; }
```

- *Type:* object

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsFilterOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystems.DataOciDatabaseManagementExternalDbSystemsFilterOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



