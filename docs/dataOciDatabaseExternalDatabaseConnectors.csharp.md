# `dataOciDatabaseExternalDatabaseConnectors` Submodule <a name="`dataOciDatabaseExternalDatabaseConnectors` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseExternalDatabaseConnectors <a name="DataOciDatabaseExternalDatabaseConnectors" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_external_database_connectors oci_database_external_database_connectors}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseExternalDatabaseConnectors(Construct Scope, string Id, DataOciDatabaseExternalDatabaseConnectorsConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsConfig">DataOciDatabaseExternalDatabaseConnectorsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsConfig">DataOciDatabaseExternalDatabaseConnectorsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.resetState">ResetState</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.putFilter"></a>

```csharp
private void PutFilter(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.putFilter.parameter.value"></a>

- *Type:* object

---

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetState` <a name="ResetState" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.resetState"></a>

```csharp
private void ResetState()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDatabaseExternalDatabaseConnectors resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDatabaseExternalDatabaseConnectors.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDatabaseExternalDatabaseConnectors.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDatabaseExternalDatabaseConnectors.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDatabaseExternalDatabaseConnectors.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciDatabaseExternalDatabaseConnectors resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciDatabaseExternalDatabaseConnectors to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciDatabaseExternalDatabaseConnectors that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_external_database_connectors#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseExternalDatabaseConnectors to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.property.externalDatabaseConnectors">ExternalDatabaseConnectors</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsList">DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilterList">DataOciDatabaseExternalDatabaseConnectorsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.property.externalDatabaseIdInput">ExternalDatabaseIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.property.filterInput">FilterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.property.stateInput">StateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.property.externalDatabaseId">ExternalDatabaseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.property.state">State</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `ExternalDatabaseConnectors`<sup>Required</sup> <a name="ExternalDatabaseConnectors" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.property.externalDatabaseConnectors"></a>

```csharp
public DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsList ExternalDatabaseConnectors { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsList">DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsList</a>

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.property.filter"></a>

```csharp
public DataOciDatabaseExternalDatabaseConnectorsFilterList Filter { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilterList">DataOciDatabaseExternalDatabaseConnectorsFilterList</a>

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `ExternalDatabaseIdInput`<sup>Optional</sup> <a name="ExternalDatabaseIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.property.externalDatabaseIdInput"></a>

```csharp
public string ExternalDatabaseIdInput { get; }
```

- *Type:* string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.property.filterInput"></a>

```csharp
public object FilterInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.property.stateInput"></a>

```csharp
public string StateInput { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `ExternalDatabaseId`<sup>Required</sup> <a name="ExternalDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.property.externalDatabaseId"></a>

```csharp
public string ExternalDatabaseId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseExternalDatabaseConnectorsConfig <a name="DataOciDatabaseExternalDatabaseConnectorsConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseExternalDatabaseConnectorsConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string CompartmentId,
    string ExternalDatabaseId,
    string DisplayName = null,
    object Filter = null,
    string Id = null,
    string State = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_external_database_connectors#compartment_id DataOciDatabaseExternalDatabaseConnectors#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsConfig.property.externalDatabaseId">ExternalDatabaseId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_external_database_connectors#external_database_id DataOciDatabaseExternalDatabaseConnectors#external_database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_external_database_connectors#display_name DataOciDatabaseExternalDatabaseConnectors#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsConfig.property.filter">Filter</a></code> | <code>object</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_external_database_connectors#id DataOciDatabaseExternalDatabaseConnectors#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsConfig.property.state">State</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_external_database_connectors#state DataOciDatabaseExternalDatabaseConnectors#state}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_external_database_connectors#compartment_id DataOciDatabaseExternalDatabaseConnectors#compartment_id}.

---

##### `ExternalDatabaseId`<sup>Required</sup> <a name="ExternalDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsConfig.property.externalDatabaseId"></a>

```csharp
public string ExternalDatabaseId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_external_database_connectors#external_database_id DataOciDatabaseExternalDatabaseConnectors#external_database_id}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_external_database_connectors#display_name DataOciDatabaseExternalDatabaseConnectors#display_name}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsConfig.property.filter"></a>

```csharp
public object Filter { get; set; }
```

- *Type:* object

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_external_database_connectors#filter DataOciDatabaseExternalDatabaseConnectors#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_external_database_connectors#id DataOciDatabaseExternalDatabaseConnectors#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `State`<sup>Optional</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsConfig.property.state"></a>

```csharp
public string State { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_external_database_connectors#state DataOciDatabaseExternalDatabaseConnectors#state}.

---

### DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectors <a name="DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectors" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectors"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectors.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectors {

};
```


### DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentials <a name="DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentials" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentials"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentials.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentials {

};
```


### DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionString <a name="DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionString"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionString.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionString {

};
```


### DataOciDatabaseExternalDatabaseConnectorsFilter <a name="DataOciDatabaseExternalDatabaseConnectorsFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseExternalDatabaseConnectorsFilter {
    string Name,
    string[] Values,
    object Regex = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilter.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_external_database_connectors#name DataOciDatabaseExternalDatabaseConnectors#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilter.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_external_database_connectors#values DataOciDatabaseExternalDatabaseConnectors#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilter.property.regex">Regex</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_external_database_connectors#regex DataOciDatabaseExternalDatabaseConnectors#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilter.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_external_database_connectors#name DataOciDatabaseExternalDatabaseConnectors#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilter.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_external_database_connectors#values DataOciDatabaseExternalDatabaseConnectors#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilter.property.regex"></a>

```csharp
public object Regex { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_external_database_connectors#regex DataOciDatabaseExternalDatabaseConnectors#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsList <a name="DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsList.get"></a>

```csharp
private DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsOutputReference <a name="DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsOutputReference.property.credentialName">CredentialName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsOutputReference.property.credentialType">CredentialType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsOutputReference.property.password">Password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsOutputReference.property.role">Role</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsOutputReference.property.sslSecretId">SslSecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsOutputReference.property.username">Username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentials">DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentials</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CredentialName`<sup>Required</sup> <a name="CredentialName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsOutputReference.property.credentialName"></a>

```csharp
public string CredentialName { get; }
```

- *Type:* string

---

##### `CredentialType`<sup>Required</sup> <a name="CredentialType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsOutputReference.property.credentialType"></a>

```csharp
public string CredentialType { get; }
```

- *Type:* string

---

##### `Password`<sup>Required</sup> <a name="Password" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsOutputReference.property.password"></a>

```csharp
public string Password { get; }
```

- *Type:* string

---

##### `Role`<sup>Required</sup> <a name="Role" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsOutputReference.property.role"></a>

```csharp
public string Role { get; }
```

- *Type:* string

---

##### `SslSecretId`<sup>Required</sup> <a name="SslSecretId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsOutputReference.property.sslSecretId"></a>

```csharp
public string SslSecretId { get; }
```

- *Type:* string

---

##### `Username`<sup>Required</sup> <a name="Username" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsOutputReference.property.username"></a>

```csharp
public string Username { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsOutputReference.property.internalValue"></a>

```csharp
public DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentials InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentials">DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentials</a>

---


### DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionStringList <a name="DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionStringList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionStringList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionStringList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionStringList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionStringList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionStringList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionStringList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionStringList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionStringList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionStringList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionStringList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionStringList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionStringList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionStringList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionStringList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionStringList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionStringList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionStringList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionStringList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionStringList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionStringList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionStringList.get"></a>

```csharp
private DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionStringOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionStringList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionStringList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionStringList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionStringList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionStringList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionStringOutputReference <a name="DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionStringOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionStringOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionStringOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionStringOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionStringOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionStringOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionStringOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionStringOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionStringOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionStringOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionStringOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionStringOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionStringOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionStringOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionStringOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionStringOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionStringOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionStringOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionStringOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionStringOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionStringOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionStringOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionStringOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionStringOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionStringOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionStringOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionStringOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionStringOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionStringOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionStringOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionStringOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionStringOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionStringOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionStringOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionStringOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionStringOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionStringOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionStringOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionStringOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionStringOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionStringOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionStringOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionStringOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionStringOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionStringOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionStringOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionStringOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionStringOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionStringOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionStringOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionStringOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionStringOutputReference.property.hostname">Hostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionStringOutputReference.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionStringOutputReference.property.protocol">Protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionStringOutputReference.property.service">Service</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionStringOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionString">DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionString</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionStringOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionStringOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Hostname`<sup>Required</sup> <a name="Hostname" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionStringOutputReference.property.hostname"></a>

```csharp
public string Hostname { get; }
```

- *Type:* string

---

##### `Port`<sup>Required</sup> <a name="Port" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionStringOutputReference.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionStringOutputReference.property.protocol"></a>

```csharp
public string Protocol { get; }
```

- *Type:* string

---

##### `Service`<sup>Required</sup> <a name="Service" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionStringOutputReference.property.service"></a>

```csharp
public string Service { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionStringOutputReference.property.internalValue"></a>

```csharp
public DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionString InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionString">DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionString</a>

---


### DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsList <a name="DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsList.get"></a>

```csharp
private DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsOutputReference <a name="DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsOutputReference.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsOutputReference.property.connectionCredentials">ConnectionCredentials</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsList">DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsOutputReference.property.connectionStatus">ConnectionStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsOutputReference.property.connectionString">ConnectionString</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionStringList">DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionStringList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsOutputReference.property.connectorAgentId">ConnectorAgentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsOutputReference.property.connectorType">ConnectorType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsOutputReference.property.definedTags">DefinedTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsOutputReference.property.externalDatabaseId">ExternalDatabaseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsOutputReference.property.freeformTags">FreeformTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsOutputReference.property.lifecycleDetails">LifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsOutputReference.property.timeConnectionStatusLastUpdated">TimeConnectionStatusLastUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsOutputReference.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectors">DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectors</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsOutputReference.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `ConnectionCredentials`<sup>Required</sup> <a name="ConnectionCredentials" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsOutputReference.property.connectionCredentials"></a>

```csharp
public DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsList ConnectionCredentials { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsList">DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsList</a>

---

##### `ConnectionStatus`<sup>Required</sup> <a name="ConnectionStatus" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsOutputReference.property.connectionStatus"></a>

```csharp
public string ConnectionStatus { get; }
```

- *Type:* string

---

##### `ConnectionString`<sup>Required</sup> <a name="ConnectionString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsOutputReference.property.connectionString"></a>

```csharp
public DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionStringList ConnectionString { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionStringList">DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionStringList</a>

---

##### `ConnectorAgentId`<sup>Required</sup> <a name="ConnectorAgentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsOutputReference.property.connectorAgentId"></a>

```csharp
public string ConnectorAgentId { get; }
```

- *Type:* string

---

##### `ConnectorType`<sup>Required</sup> <a name="ConnectorType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsOutputReference.property.connectorType"></a>

```csharp
public string ConnectorType { get; }
```

- *Type:* string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsOutputReference.property.definedTags"></a>

```csharp
public StringMap DefinedTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `ExternalDatabaseId`<sup>Required</sup> <a name="ExternalDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsOutputReference.property.externalDatabaseId"></a>

```csharp
public string ExternalDatabaseId { get; }
```

- *Type:* string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsOutputReference.property.freeformTags"></a>

```csharp
public StringMap FreeformTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsOutputReference.property.lifecycleDetails"></a>

```csharp
public string LifecycleDetails { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `TimeConnectionStatusLastUpdated`<sup>Required</sup> <a name="TimeConnectionStatusLastUpdated" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsOutputReference.property.timeConnectionStatusLastUpdated"></a>

```csharp
public string TimeConnectionStatusLastUpdated { get; }
```

- *Type:* string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsOutputReference.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsOutputReference.property.internalValue"></a>

```csharp
public DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectors InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectors">DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectors</a>

---


### DataOciDatabaseExternalDatabaseConnectorsFilterList <a name="DataOciDatabaseExternalDatabaseConnectorsFilterList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseExternalDatabaseConnectorsFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilterList.get"></a>

```csharp
private DataOciDatabaseExternalDatabaseConnectorsFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilterList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilterList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciDatabaseExternalDatabaseConnectorsFilterOutputReference <a name="DataOciDatabaseExternalDatabaseConnectorsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseExternalDatabaseConnectorsFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilterOutputReference.resetRegex"></a>

```csharp
private void ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilterOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilterOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilterOutputReference.property.regex">Regex</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilterOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilterOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilterOutputReference.property.regexInput"></a>

```csharp
public object RegexInput { get; }
```

- *Type:* object

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilterOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilterOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilterOutputReference.property.regex"></a>

```csharp
public object Regex { get; }
```

- *Type:* object

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilterOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilterOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



