# `dataOciDatabaseExternalNonContainerDatabase` Submodule <a name="`dataOciDatabaseExternalNonContainerDatabase` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseExternalNonContainerDatabase <a name="DataOciDatabaseExternalNonContainerDatabase" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabase"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_external_non_container_database oci_database_external_non_container_database}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabase.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseExternalNonContainerDatabase(Construct Scope, string Id, DataOciDatabaseExternalNonContainerDatabaseConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabase.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabase.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabase.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseConfig">DataOciDatabaseExternalNonContainerDatabaseConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabase.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabase.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabase.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseConfig">DataOciDatabaseExternalNonContainerDatabaseConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabase.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabase.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabase.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabase.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabase.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabase.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabase.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabase.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabase.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabase.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabase.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabase.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabase.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabase.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabase.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabase.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabase.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabase.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabase.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabase.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabase.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabase.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabase.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabase.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabase.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabase.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabase.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabase.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabase.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabase.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabase.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabase.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabase.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabase.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabase.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabase.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabase.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabase.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabase.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabase.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabase.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabase.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabase.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabase.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabase.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabase.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabase.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabase.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabase.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabase.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabase.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDatabaseExternalNonContainerDatabase resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabase.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDatabaseExternalNonContainerDatabase.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabase.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabase.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDatabaseExternalNonContainerDatabase.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabase.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabase.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDatabaseExternalNonContainerDatabase.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabase.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabase.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDatabaseExternalNonContainerDatabase.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciDatabaseExternalNonContainerDatabase resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabase.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabase.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciDatabaseExternalNonContainerDatabase to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabase.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciDatabaseExternalNonContainerDatabase that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_external_non_container_database#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabase.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseExternalNonContainerDatabase to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabase.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabase.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabase.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabase.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabase.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabase.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabase.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabase.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabase.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabase.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabase.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabase.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabase.property.characterSet">CharacterSet</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabase.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabase.property.databaseConfiguration">DatabaseConfiguration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabase.property.databaseEdition">DatabaseEdition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabase.property.databaseManagementConfig">DatabaseManagementConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseDatabaseManagementConfigList">DataOciDatabaseExternalNonContainerDatabaseDatabaseManagementConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabase.property.databaseVersion">DatabaseVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabase.property.dbId">DbId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabase.property.dbPacks">DbPacks</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabase.property.dbUniqueName">DbUniqueName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabase.property.definedTags">DefinedTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabase.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabase.property.freeformTags">FreeformTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabase.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabase.property.lifecycleDetails">LifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabase.property.ncharacterSet">NcharacterSet</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabase.property.operationsInsightsConfig">OperationsInsightsConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseOperationsInsightsConfigList">DataOciDatabaseExternalNonContainerDatabaseOperationsInsightsConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabase.property.stackMonitoringConfig">StackMonitoringConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseStackMonitoringConfigList">DataOciDatabaseExternalNonContainerDatabaseStackMonitoringConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabase.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabase.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabase.property.timeZone">TimeZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabase.property.externalNonContainerDatabaseIdInput">ExternalNonContainerDatabaseIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabase.property.externalNonContainerDatabaseId">ExternalNonContainerDatabaseId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabase.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabase.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabase.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabase.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabase.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabase.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabase.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabase.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabase.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabase.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabase.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabase.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `CharacterSet`<sup>Required</sup> <a name="CharacterSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabase.property.characterSet"></a>

```csharp
public string CharacterSet { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabase.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `DatabaseConfiguration`<sup>Required</sup> <a name="DatabaseConfiguration" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabase.property.databaseConfiguration"></a>

```csharp
public string DatabaseConfiguration { get; }
```

- *Type:* string

---

##### `DatabaseEdition`<sup>Required</sup> <a name="DatabaseEdition" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabase.property.databaseEdition"></a>

```csharp
public string DatabaseEdition { get; }
```

- *Type:* string

---

##### `DatabaseManagementConfig`<sup>Required</sup> <a name="DatabaseManagementConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabase.property.databaseManagementConfig"></a>

```csharp
public DataOciDatabaseExternalNonContainerDatabaseDatabaseManagementConfigList DatabaseManagementConfig { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseDatabaseManagementConfigList">DataOciDatabaseExternalNonContainerDatabaseDatabaseManagementConfigList</a>

---

##### `DatabaseVersion`<sup>Required</sup> <a name="DatabaseVersion" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabase.property.databaseVersion"></a>

```csharp
public string DatabaseVersion { get; }
```

- *Type:* string

---

##### `DbId`<sup>Required</sup> <a name="DbId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabase.property.dbId"></a>

```csharp
public string DbId { get; }
```

- *Type:* string

---

##### `DbPacks`<sup>Required</sup> <a name="DbPacks" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabase.property.dbPacks"></a>

```csharp
public string DbPacks { get; }
```

- *Type:* string

---

##### `DbUniqueName`<sup>Required</sup> <a name="DbUniqueName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabase.property.dbUniqueName"></a>

```csharp
public string DbUniqueName { get; }
```

- *Type:* string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabase.property.definedTags"></a>

```csharp
public StringMap DefinedTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabase.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabase.property.freeformTags"></a>

```csharp
public StringMap FreeformTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabase.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabase.property.lifecycleDetails"></a>

```csharp
public string LifecycleDetails { get; }
```

- *Type:* string

---

##### `NcharacterSet`<sup>Required</sup> <a name="NcharacterSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabase.property.ncharacterSet"></a>

```csharp
public string NcharacterSet { get; }
```

- *Type:* string

---

##### `OperationsInsightsConfig`<sup>Required</sup> <a name="OperationsInsightsConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabase.property.operationsInsightsConfig"></a>

```csharp
public DataOciDatabaseExternalNonContainerDatabaseOperationsInsightsConfigList OperationsInsightsConfig { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseOperationsInsightsConfigList">DataOciDatabaseExternalNonContainerDatabaseOperationsInsightsConfigList</a>

---

##### `StackMonitoringConfig`<sup>Required</sup> <a name="StackMonitoringConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabase.property.stackMonitoringConfig"></a>

```csharp
public DataOciDatabaseExternalNonContainerDatabaseStackMonitoringConfigList StackMonitoringConfig { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseStackMonitoringConfigList">DataOciDatabaseExternalNonContainerDatabaseStackMonitoringConfigList</a>

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabase.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabase.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `TimeZone`<sup>Required</sup> <a name="TimeZone" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabase.property.timeZone"></a>

```csharp
public string TimeZone { get; }
```

- *Type:* string

---

##### `ExternalNonContainerDatabaseIdInput`<sup>Optional</sup> <a name="ExternalNonContainerDatabaseIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabase.property.externalNonContainerDatabaseIdInput"></a>

```csharp
public string ExternalNonContainerDatabaseIdInput { get; }
```

- *Type:* string

---

##### `ExternalNonContainerDatabaseId`<sup>Required</sup> <a name="ExternalNonContainerDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabase.property.externalNonContainerDatabaseId"></a>

```csharp
public string ExternalNonContainerDatabaseId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabase.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabase.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseExternalNonContainerDatabaseConfig <a name="DataOciDatabaseExternalNonContainerDatabaseConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseExternalNonContainerDatabaseConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ExternalNonContainerDatabaseId
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseConfig.property.externalNonContainerDatabaseId">ExternalNonContainerDatabaseId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_external_non_container_database#external_non_container_database_id DataOciDatabaseExternalNonContainerDatabase#external_non_container_database_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ExternalNonContainerDatabaseId`<sup>Required</sup> <a name="ExternalNonContainerDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseConfig.property.externalNonContainerDatabaseId"></a>

```csharp
public string ExternalNonContainerDatabaseId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_external_non_container_database#external_non_container_database_id DataOciDatabaseExternalNonContainerDatabase#external_non_container_database_id}.

---

### DataOciDatabaseExternalNonContainerDatabaseDatabaseManagementConfig <a name="DataOciDatabaseExternalNonContainerDatabaseDatabaseManagementConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseDatabaseManagementConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseDatabaseManagementConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseExternalNonContainerDatabaseDatabaseManagementConfig {

};
```


### DataOciDatabaseExternalNonContainerDatabaseOperationsInsightsConfig <a name="DataOciDatabaseExternalNonContainerDatabaseOperationsInsightsConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseOperationsInsightsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseOperationsInsightsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseExternalNonContainerDatabaseOperationsInsightsConfig {

};
```


### DataOciDatabaseExternalNonContainerDatabaseStackMonitoringConfig <a name="DataOciDatabaseExternalNonContainerDatabaseStackMonitoringConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseStackMonitoringConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseStackMonitoringConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseExternalNonContainerDatabaseStackMonitoringConfig {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseExternalNonContainerDatabaseDatabaseManagementConfigList <a name="DataOciDatabaseExternalNonContainerDatabaseDatabaseManagementConfigList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseDatabaseManagementConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseDatabaseManagementConfigList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseExternalNonContainerDatabaseDatabaseManagementConfigList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseDatabaseManagementConfigList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseDatabaseManagementConfigList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseDatabaseManagementConfigList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseDatabaseManagementConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseDatabaseManagementConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseDatabaseManagementConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseDatabaseManagementConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseDatabaseManagementConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseDatabaseManagementConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseDatabaseManagementConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseDatabaseManagementConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseDatabaseManagementConfigList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseDatabaseManagementConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseDatabaseManagementConfigList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseDatabaseManagementConfigList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseDatabaseManagementConfigList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseDatabaseManagementConfigList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseDatabaseManagementConfigList.get"></a>

```csharp
private DataOciDatabaseExternalNonContainerDatabaseDatabaseManagementConfigOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseDatabaseManagementConfigList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseDatabaseManagementConfigList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseDatabaseManagementConfigList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseDatabaseManagementConfigList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseDatabaseManagementConfigList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDatabaseExternalNonContainerDatabaseDatabaseManagementConfigOutputReference <a name="DataOciDatabaseExternalNonContainerDatabaseDatabaseManagementConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseDatabaseManagementConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseDatabaseManagementConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseExternalNonContainerDatabaseDatabaseManagementConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseDatabaseManagementConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseDatabaseManagementConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseDatabaseManagementConfigOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseDatabaseManagementConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseDatabaseManagementConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseDatabaseManagementConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseDatabaseManagementConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseDatabaseManagementConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseDatabaseManagementConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseDatabaseManagementConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseDatabaseManagementConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseDatabaseManagementConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseDatabaseManagementConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseDatabaseManagementConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseDatabaseManagementConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseDatabaseManagementConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseDatabaseManagementConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseDatabaseManagementConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseDatabaseManagementConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseDatabaseManagementConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseDatabaseManagementConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseDatabaseManagementConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseDatabaseManagementConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseDatabaseManagementConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseDatabaseManagementConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseDatabaseManagementConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseDatabaseManagementConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseDatabaseManagementConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseDatabaseManagementConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseDatabaseManagementConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseDatabaseManagementConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseDatabaseManagementConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseDatabaseManagementConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseDatabaseManagementConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseDatabaseManagementConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseDatabaseManagementConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseDatabaseManagementConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseDatabaseManagementConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseDatabaseManagementConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseDatabaseManagementConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseDatabaseManagementConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseDatabaseManagementConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseDatabaseManagementConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseDatabaseManagementConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseDatabaseManagementConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseDatabaseManagementConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseDatabaseManagementConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseDatabaseManagementConfigOutputReference.property.databaseManagementConnectionId">DatabaseManagementConnectionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseDatabaseManagementConfigOutputReference.property.databaseManagementStatus">DatabaseManagementStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseDatabaseManagementConfigOutputReference.property.licenseModel">LicenseModel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseDatabaseManagementConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseDatabaseManagementConfig">DataOciDatabaseExternalNonContainerDatabaseDatabaseManagementConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseDatabaseManagementConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseDatabaseManagementConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DatabaseManagementConnectionId`<sup>Required</sup> <a name="DatabaseManagementConnectionId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseDatabaseManagementConfigOutputReference.property.databaseManagementConnectionId"></a>

```csharp
public string DatabaseManagementConnectionId { get; }
```

- *Type:* string

---

##### `DatabaseManagementStatus`<sup>Required</sup> <a name="DatabaseManagementStatus" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseDatabaseManagementConfigOutputReference.property.databaseManagementStatus"></a>

```csharp
public string DatabaseManagementStatus { get; }
```

- *Type:* string

---

##### `LicenseModel`<sup>Required</sup> <a name="LicenseModel" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseDatabaseManagementConfigOutputReference.property.licenseModel"></a>

```csharp
public string LicenseModel { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseDatabaseManagementConfigOutputReference.property.internalValue"></a>

```csharp
public DataOciDatabaseExternalNonContainerDatabaseDatabaseManagementConfig InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseDatabaseManagementConfig">DataOciDatabaseExternalNonContainerDatabaseDatabaseManagementConfig</a>

---


### DataOciDatabaseExternalNonContainerDatabaseOperationsInsightsConfigList <a name="DataOciDatabaseExternalNonContainerDatabaseOperationsInsightsConfigList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseOperationsInsightsConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseOperationsInsightsConfigList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseExternalNonContainerDatabaseOperationsInsightsConfigList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseOperationsInsightsConfigList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseOperationsInsightsConfigList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseOperationsInsightsConfigList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseOperationsInsightsConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseOperationsInsightsConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseOperationsInsightsConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseOperationsInsightsConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseOperationsInsightsConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseOperationsInsightsConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseOperationsInsightsConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseOperationsInsightsConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseOperationsInsightsConfigList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseOperationsInsightsConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseOperationsInsightsConfigList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseOperationsInsightsConfigList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseOperationsInsightsConfigList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseOperationsInsightsConfigList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseOperationsInsightsConfigList.get"></a>

```csharp
private DataOciDatabaseExternalNonContainerDatabaseOperationsInsightsConfigOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseOperationsInsightsConfigList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseOperationsInsightsConfigList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseOperationsInsightsConfigList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseOperationsInsightsConfigList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseOperationsInsightsConfigList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDatabaseExternalNonContainerDatabaseOperationsInsightsConfigOutputReference <a name="DataOciDatabaseExternalNonContainerDatabaseOperationsInsightsConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseOperationsInsightsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseOperationsInsightsConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseExternalNonContainerDatabaseOperationsInsightsConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseOperationsInsightsConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseOperationsInsightsConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseOperationsInsightsConfigOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseOperationsInsightsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseOperationsInsightsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseOperationsInsightsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseOperationsInsightsConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseOperationsInsightsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseOperationsInsightsConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseOperationsInsightsConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseOperationsInsightsConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseOperationsInsightsConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseOperationsInsightsConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseOperationsInsightsConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseOperationsInsightsConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseOperationsInsightsConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseOperationsInsightsConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseOperationsInsightsConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseOperationsInsightsConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseOperationsInsightsConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseOperationsInsightsConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseOperationsInsightsConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseOperationsInsightsConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseOperationsInsightsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseOperationsInsightsConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseOperationsInsightsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseOperationsInsightsConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseOperationsInsightsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseOperationsInsightsConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseOperationsInsightsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseOperationsInsightsConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseOperationsInsightsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseOperationsInsightsConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseOperationsInsightsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseOperationsInsightsConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseOperationsInsightsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseOperationsInsightsConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseOperationsInsightsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseOperationsInsightsConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseOperationsInsightsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseOperationsInsightsConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseOperationsInsightsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseOperationsInsightsConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseOperationsInsightsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseOperationsInsightsConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseOperationsInsightsConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseOperationsInsightsConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseOperationsInsightsConfigOutputReference.property.operationsInsightsConnectorId">OperationsInsightsConnectorId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseOperationsInsightsConfigOutputReference.property.operationsInsightsStatus">OperationsInsightsStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseOperationsInsightsConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseOperationsInsightsConfig">DataOciDatabaseExternalNonContainerDatabaseOperationsInsightsConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseOperationsInsightsConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseOperationsInsightsConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `OperationsInsightsConnectorId`<sup>Required</sup> <a name="OperationsInsightsConnectorId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseOperationsInsightsConfigOutputReference.property.operationsInsightsConnectorId"></a>

```csharp
public string OperationsInsightsConnectorId { get; }
```

- *Type:* string

---

##### `OperationsInsightsStatus`<sup>Required</sup> <a name="OperationsInsightsStatus" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseOperationsInsightsConfigOutputReference.property.operationsInsightsStatus"></a>

```csharp
public string OperationsInsightsStatus { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseOperationsInsightsConfigOutputReference.property.internalValue"></a>

```csharp
public DataOciDatabaseExternalNonContainerDatabaseOperationsInsightsConfig InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseOperationsInsightsConfig">DataOciDatabaseExternalNonContainerDatabaseOperationsInsightsConfig</a>

---


### DataOciDatabaseExternalNonContainerDatabaseStackMonitoringConfigList <a name="DataOciDatabaseExternalNonContainerDatabaseStackMonitoringConfigList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseStackMonitoringConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseStackMonitoringConfigList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseExternalNonContainerDatabaseStackMonitoringConfigList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseStackMonitoringConfigList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseStackMonitoringConfigList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseStackMonitoringConfigList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseStackMonitoringConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseStackMonitoringConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseStackMonitoringConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseStackMonitoringConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseStackMonitoringConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseStackMonitoringConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseStackMonitoringConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseStackMonitoringConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseStackMonitoringConfigList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseStackMonitoringConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseStackMonitoringConfigList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseStackMonitoringConfigList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseStackMonitoringConfigList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseStackMonitoringConfigList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseStackMonitoringConfigList.get"></a>

```csharp
private DataOciDatabaseExternalNonContainerDatabaseStackMonitoringConfigOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseStackMonitoringConfigList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseStackMonitoringConfigList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseStackMonitoringConfigList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseStackMonitoringConfigList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseStackMonitoringConfigList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDatabaseExternalNonContainerDatabaseStackMonitoringConfigOutputReference <a name="DataOciDatabaseExternalNonContainerDatabaseStackMonitoringConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseStackMonitoringConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseStackMonitoringConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseExternalNonContainerDatabaseStackMonitoringConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseStackMonitoringConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseStackMonitoringConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseStackMonitoringConfigOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseStackMonitoringConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseStackMonitoringConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseStackMonitoringConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseStackMonitoringConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseStackMonitoringConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseStackMonitoringConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseStackMonitoringConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseStackMonitoringConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseStackMonitoringConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseStackMonitoringConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseStackMonitoringConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseStackMonitoringConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseStackMonitoringConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseStackMonitoringConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseStackMonitoringConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseStackMonitoringConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseStackMonitoringConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseStackMonitoringConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseStackMonitoringConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseStackMonitoringConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseStackMonitoringConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseStackMonitoringConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseStackMonitoringConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseStackMonitoringConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseStackMonitoringConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseStackMonitoringConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseStackMonitoringConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseStackMonitoringConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseStackMonitoringConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseStackMonitoringConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseStackMonitoringConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseStackMonitoringConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseStackMonitoringConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseStackMonitoringConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseStackMonitoringConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseStackMonitoringConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseStackMonitoringConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseStackMonitoringConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseStackMonitoringConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseStackMonitoringConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseStackMonitoringConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseStackMonitoringConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseStackMonitoringConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseStackMonitoringConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseStackMonitoringConfigOutputReference.property.stackMonitoringConnectorId">StackMonitoringConnectorId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseStackMonitoringConfigOutputReference.property.stackMonitoringStatus">StackMonitoringStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseStackMonitoringConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseStackMonitoringConfig">DataOciDatabaseExternalNonContainerDatabaseStackMonitoringConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseStackMonitoringConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseStackMonitoringConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `StackMonitoringConnectorId`<sup>Required</sup> <a name="StackMonitoringConnectorId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseStackMonitoringConfigOutputReference.property.stackMonitoringConnectorId"></a>

```csharp
public string StackMonitoringConnectorId { get; }
```

- *Type:* string

---

##### `StackMonitoringStatus`<sup>Required</sup> <a name="StackMonitoringStatus" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseStackMonitoringConfigOutputReference.property.stackMonitoringStatus"></a>

```csharp
public string StackMonitoringStatus { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseStackMonitoringConfigOutputReference.property.internalValue"></a>

```csharp
public DataOciDatabaseExternalNonContainerDatabaseStackMonitoringConfig InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseStackMonitoringConfig">DataOciDatabaseExternalNonContainerDatabaseStackMonitoringConfig</a>

---



