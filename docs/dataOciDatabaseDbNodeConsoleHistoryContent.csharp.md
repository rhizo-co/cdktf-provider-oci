# `dataOciDatabaseDbNodeConsoleHistoryContent` Submodule <a name="`dataOciDatabaseDbNodeConsoleHistoryContent` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistoryContent"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseDbNodeConsoleHistoryContent <a name="DataOciDatabaseDbNodeConsoleHistoryContent" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistoryContent.DataOciDatabaseDbNodeConsoleHistoryContent"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_node_console_history_content oci_database_db_node_console_history_content}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistoryContent.DataOciDatabaseDbNodeConsoleHistoryContent.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseDbNodeConsoleHistoryContent(Construct Scope, string Id, DataOciDatabaseDbNodeConsoleHistoryContentConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistoryContent.DataOciDatabaseDbNodeConsoleHistoryContent.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistoryContent.DataOciDatabaseDbNodeConsoleHistoryContent.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistoryContent.DataOciDatabaseDbNodeConsoleHistoryContent.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistoryContent.DataOciDatabaseDbNodeConsoleHistoryContentConfig">DataOciDatabaseDbNodeConsoleHistoryContentConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistoryContent.DataOciDatabaseDbNodeConsoleHistoryContent.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistoryContent.DataOciDatabaseDbNodeConsoleHistoryContent.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistoryContent.DataOciDatabaseDbNodeConsoleHistoryContent.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistoryContent.DataOciDatabaseDbNodeConsoleHistoryContentConfig">DataOciDatabaseDbNodeConsoleHistoryContentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistoryContent.DataOciDatabaseDbNodeConsoleHistoryContent.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistoryContent.DataOciDatabaseDbNodeConsoleHistoryContent.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistoryContent.DataOciDatabaseDbNodeConsoleHistoryContent.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistoryContent.DataOciDatabaseDbNodeConsoleHistoryContent.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistoryContent.DataOciDatabaseDbNodeConsoleHistoryContent.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistoryContent.DataOciDatabaseDbNodeConsoleHistoryContent.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistoryContent.DataOciDatabaseDbNodeConsoleHistoryContent.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistoryContent.DataOciDatabaseDbNodeConsoleHistoryContent.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistoryContent.DataOciDatabaseDbNodeConsoleHistoryContent.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistoryContent.DataOciDatabaseDbNodeConsoleHistoryContent.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistoryContent.DataOciDatabaseDbNodeConsoleHistoryContent.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistoryContent.DataOciDatabaseDbNodeConsoleHistoryContent.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistoryContent.DataOciDatabaseDbNodeConsoleHistoryContent.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistoryContent.DataOciDatabaseDbNodeConsoleHistoryContent.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistoryContent.DataOciDatabaseDbNodeConsoleHistoryContent.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistoryContent.DataOciDatabaseDbNodeConsoleHistoryContent.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistoryContent.DataOciDatabaseDbNodeConsoleHistoryContent.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistoryContent.DataOciDatabaseDbNodeConsoleHistoryContent.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistoryContent.DataOciDatabaseDbNodeConsoleHistoryContent.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistoryContent.DataOciDatabaseDbNodeConsoleHistoryContent.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistoryContent.DataOciDatabaseDbNodeConsoleHistoryContent.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistoryContent.DataOciDatabaseDbNodeConsoleHistoryContent.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistoryContent.DataOciDatabaseDbNodeConsoleHistoryContent.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistoryContent.DataOciDatabaseDbNodeConsoleHistoryContent.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistoryContent.DataOciDatabaseDbNodeConsoleHistoryContent.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistoryContent.DataOciDatabaseDbNodeConsoleHistoryContent.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistoryContent.DataOciDatabaseDbNodeConsoleHistoryContent.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistoryContent.DataOciDatabaseDbNodeConsoleHistoryContent.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistoryContent.DataOciDatabaseDbNodeConsoleHistoryContent.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistoryContent.DataOciDatabaseDbNodeConsoleHistoryContent.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistoryContent.DataOciDatabaseDbNodeConsoleHistoryContent.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistoryContent.DataOciDatabaseDbNodeConsoleHistoryContent.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistoryContent.DataOciDatabaseDbNodeConsoleHistoryContent.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistoryContent.DataOciDatabaseDbNodeConsoleHistoryContent.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistoryContent.DataOciDatabaseDbNodeConsoleHistoryContent.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistoryContent.DataOciDatabaseDbNodeConsoleHistoryContent.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistoryContent.DataOciDatabaseDbNodeConsoleHistoryContent.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistoryContent.DataOciDatabaseDbNodeConsoleHistoryContent.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistoryContent.DataOciDatabaseDbNodeConsoleHistoryContent.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistoryContent.DataOciDatabaseDbNodeConsoleHistoryContent.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistoryContent.DataOciDatabaseDbNodeConsoleHistoryContent.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistoryContent.DataOciDatabaseDbNodeConsoleHistoryContent.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistoryContent.DataOciDatabaseDbNodeConsoleHistoryContent.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistoryContent.DataOciDatabaseDbNodeConsoleHistoryContent.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistoryContent.DataOciDatabaseDbNodeConsoleHistoryContent.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistoryContent.DataOciDatabaseDbNodeConsoleHistoryContent.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistoryContent.DataOciDatabaseDbNodeConsoleHistoryContent.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistoryContent.DataOciDatabaseDbNodeConsoleHistoryContent.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistoryContent.DataOciDatabaseDbNodeConsoleHistoryContent.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistoryContent.DataOciDatabaseDbNodeConsoleHistoryContent.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistoryContent.DataOciDatabaseDbNodeConsoleHistoryContent.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistoryContent.DataOciDatabaseDbNodeConsoleHistoryContent.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistoryContent.DataOciDatabaseDbNodeConsoleHistoryContent.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDatabaseDbNodeConsoleHistoryContent resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistoryContent.DataOciDatabaseDbNodeConsoleHistoryContent.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDatabaseDbNodeConsoleHistoryContent.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistoryContent.DataOciDatabaseDbNodeConsoleHistoryContent.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistoryContent.DataOciDatabaseDbNodeConsoleHistoryContent.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDatabaseDbNodeConsoleHistoryContent.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistoryContent.DataOciDatabaseDbNodeConsoleHistoryContent.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistoryContent.DataOciDatabaseDbNodeConsoleHistoryContent.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDatabaseDbNodeConsoleHistoryContent.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistoryContent.DataOciDatabaseDbNodeConsoleHistoryContent.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistoryContent.DataOciDatabaseDbNodeConsoleHistoryContent.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDatabaseDbNodeConsoleHistoryContent.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciDatabaseDbNodeConsoleHistoryContent resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistoryContent.DataOciDatabaseDbNodeConsoleHistoryContent.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistoryContent.DataOciDatabaseDbNodeConsoleHistoryContent.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciDatabaseDbNodeConsoleHistoryContent to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistoryContent.DataOciDatabaseDbNodeConsoleHistoryContent.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciDatabaseDbNodeConsoleHistoryContent that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_node_console_history_content#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistoryContent.DataOciDatabaseDbNodeConsoleHistoryContent.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseDbNodeConsoleHistoryContent to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistoryContent.DataOciDatabaseDbNodeConsoleHistoryContent.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistoryContent.DataOciDatabaseDbNodeConsoleHistoryContent.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistoryContent.DataOciDatabaseDbNodeConsoleHistoryContent.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistoryContent.DataOciDatabaseDbNodeConsoleHistoryContent.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistoryContent.DataOciDatabaseDbNodeConsoleHistoryContent.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistoryContent.DataOciDatabaseDbNodeConsoleHistoryContent.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistoryContent.DataOciDatabaseDbNodeConsoleHistoryContent.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistoryContent.DataOciDatabaseDbNodeConsoleHistoryContent.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistoryContent.DataOciDatabaseDbNodeConsoleHistoryContent.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistoryContent.DataOciDatabaseDbNodeConsoleHistoryContent.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistoryContent.DataOciDatabaseDbNodeConsoleHistoryContent.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistoryContent.DataOciDatabaseDbNodeConsoleHistoryContent.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistoryContent.DataOciDatabaseDbNodeConsoleHistoryContent.property.consoleHistoryIdInput">ConsoleHistoryIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistoryContent.DataOciDatabaseDbNodeConsoleHistoryContent.property.dbNodeIdInput">DbNodeIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistoryContent.DataOciDatabaseDbNodeConsoleHistoryContent.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistoryContent.DataOciDatabaseDbNodeConsoleHistoryContent.property.consoleHistoryId">ConsoleHistoryId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistoryContent.DataOciDatabaseDbNodeConsoleHistoryContent.property.dbNodeId">DbNodeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistoryContent.DataOciDatabaseDbNodeConsoleHistoryContent.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistoryContent.DataOciDatabaseDbNodeConsoleHistoryContent.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistoryContent.DataOciDatabaseDbNodeConsoleHistoryContent.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistoryContent.DataOciDatabaseDbNodeConsoleHistoryContent.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistoryContent.DataOciDatabaseDbNodeConsoleHistoryContent.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistoryContent.DataOciDatabaseDbNodeConsoleHistoryContent.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistoryContent.DataOciDatabaseDbNodeConsoleHistoryContent.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistoryContent.DataOciDatabaseDbNodeConsoleHistoryContent.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistoryContent.DataOciDatabaseDbNodeConsoleHistoryContent.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistoryContent.DataOciDatabaseDbNodeConsoleHistoryContent.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistoryContent.DataOciDatabaseDbNodeConsoleHistoryContent.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistoryContent.DataOciDatabaseDbNodeConsoleHistoryContent.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistoryContent.DataOciDatabaseDbNodeConsoleHistoryContent.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `ConsoleHistoryIdInput`<sup>Optional</sup> <a name="ConsoleHistoryIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistoryContent.DataOciDatabaseDbNodeConsoleHistoryContent.property.consoleHistoryIdInput"></a>

```csharp
public string ConsoleHistoryIdInput { get; }
```

- *Type:* string

---

##### `DbNodeIdInput`<sup>Optional</sup> <a name="DbNodeIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistoryContent.DataOciDatabaseDbNodeConsoleHistoryContent.property.dbNodeIdInput"></a>

```csharp
public string DbNodeIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistoryContent.DataOciDatabaseDbNodeConsoleHistoryContent.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ConsoleHistoryId`<sup>Required</sup> <a name="ConsoleHistoryId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistoryContent.DataOciDatabaseDbNodeConsoleHistoryContent.property.consoleHistoryId"></a>

```csharp
public string ConsoleHistoryId { get; }
```

- *Type:* string

---

##### `DbNodeId`<sup>Required</sup> <a name="DbNodeId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistoryContent.DataOciDatabaseDbNodeConsoleHistoryContent.property.dbNodeId"></a>

```csharp
public string DbNodeId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistoryContent.DataOciDatabaseDbNodeConsoleHistoryContent.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistoryContent.DataOciDatabaseDbNodeConsoleHistoryContent.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistoryContent.DataOciDatabaseDbNodeConsoleHistoryContent.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseDbNodeConsoleHistoryContentConfig <a name="DataOciDatabaseDbNodeConsoleHistoryContentConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistoryContent.DataOciDatabaseDbNodeConsoleHistoryContentConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistoryContent.DataOciDatabaseDbNodeConsoleHistoryContentConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseDbNodeConsoleHistoryContentConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ConsoleHistoryId,
    string DbNodeId,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistoryContent.DataOciDatabaseDbNodeConsoleHistoryContentConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistoryContent.DataOciDatabaseDbNodeConsoleHistoryContentConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistoryContent.DataOciDatabaseDbNodeConsoleHistoryContentConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistoryContent.DataOciDatabaseDbNodeConsoleHistoryContentConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistoryContent.DataOciDatabaseDbNodeConsoleHistoryContentConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistoryContent.DataOciDatabaseDbNodeConsoleHistoryContentConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistoryContent.DataOciDatabaseDbNodeConsoleHistoryContentConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistoryContent.DataOciDatabaseDbNodeConsoleHistoryContentConfig.property.consoleHistoryId">ConsoleHistoryId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_node_console_history_content#console_history_id DataOciDatabaseDbNodeConsoleHistoryContent#console_history_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistoryContent.DataOciDatabaseDbNodeConsoleHistoryContentConfig.property.dbNodeId">DbNodeId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_node_console_history_content#db_node_id DataOciDatabaseDbNodeConsoleHistoryContent#db_node_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistoryContent.DataOciDatabaseDbNodeConsoleHistoryContentConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_node_console_history_content#id DataOciDatabaseDbNodeConsoleHistoryContent#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistoryContent.DataOciDatabaseDbNodeConsoleHistoryContentConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistoryContent.DataOciDatabaseDbNodeConsoleHistoryContentConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistoryContent.DataOciDatabaseDbNodeConsoleHistoryContentConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistoryContent.DataOciDatabaseDbNodeConsoleHistoryContentConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistoryContent.DataOciDatabaseDbNodeConsoleHistoryContentConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistoryContent.DataOciDatabaseDbNodeConsoleHistoryContentConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistoryContent.DataOciDatabaseDbNodeConsoleHistoryContentConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ConsoleHistoryId`<sup>Required</sup> <a name="ConsoleHistoryId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistoryContent.DataOciDatabaseDbNodeConsoleHistoryContentConfig.property.consoleHistoryId"></a>

```csharp
public string ConsoleHistoryId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_node_console_history_content#console_history_id DataOciDatabaseDbNodeConsoleHistoryContent#console_history_id}.

---

##### `DbNodeId`<sup>Required</sup> <a name="DbNodeId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistoryContent.DataOciDatabaseDbNodeConsoleHistoryContentConfig.property.dbNodeId"></a>

```csharp
public string DbNodeId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_node_console_history_content#db_node_id DataOciDatabaseDbNodeConsoleHistoryContent#db_node_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistoryContent.DataOciDatabaseDbNodeConsoleHistoryContentConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_node_console_history_content#id DataOciDatabaseDbNodeConsoleHistoryContent#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



